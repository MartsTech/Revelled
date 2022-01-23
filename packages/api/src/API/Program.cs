var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApiServices(builder.Configuration);
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseMiddleware<ExceptionMiddleware>();
app.UseCookiePolicy(new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.Lax,
});

app.UseXContentTypeOptions();
app.UseReferrerPolicy(opt => opt.NoReferrer());
app.UseXXssProtection(opt => opt.EnabledWithBlockMode());
app.UseXfo(opt => opt.Deny());
app.UseCspReportOnly(opt => opt
    .BlockAllMixedContent()
    .StyleSources(s => s.Self().CustomSources(
        "sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
        "sha256-wkAU1AW/h8YFx0XlzvpTllAKnFEO2tw8aKErs5a26LY="
        ))
    .FontSources(s => s.Self())
    .FormActions(s => s.Self())
    .FrameAncestors(s => s.Self())
    .ImageSources(s => s.Self().CustomSources(
        "https://res.cloudinary.com",
        "data:"
        ))
    .ScriptSources(s => s.Self().CustomSources(
        "sha256-AaD233S3nLNrz8GvI5Ct4JgDe2xTKcgZbhIdfyO3wrA=",
        "sha256-Tui7QoFlnLXkJCSl1/JvEZdIXTmBttnWNxzJpXomQjg="
        ))
);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseHsts();
}

// app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatHub>("/chat");
app.MapFallbackToController("Index", "Fallback");

// Seed Data

using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<User>>();
    await context.Database.MigrateAsync();
    await DbInitializer.Initialize(context, userManager);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error ocurred during migration.");
}

await app.RunAsync();
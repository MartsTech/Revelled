namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddIdentityCore<User>(opt =>
            {
                opt.Password.RequireNonAlphanumeric = false;
                opt.SignIn.RequireConfirmedEmail = true;
            })
            .AddEntityFrameworkStores<DataContext>()
            .AddSignInManager<SignInManager<User>>()
            .AddDefaultTokenProviders();

            //var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWTSettings:TokenKey"]));

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie();

            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(opt =>
            //    {
            //        opt.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuerSigningKey = true,
            //            IssuerSigningKey = key,
            //            ValidateIssuer = false,
            //            ValidateAudience = false,
            //            ValidateLifetime = true,
            //            ClockSkew = TimeSpan.Zero
            //        };
            //        opt.Events = new JwtBearerEvents
            //        {
            //            OnMessageReceived = context =>
            //            {
            //                var accessToken = context.Request.Query["access_token"];

            //                var path = context.HttpContext.Request.Path;

            //                if (!string.IsNullOrEmpty(accessToken) && (path.StartsWithSegments("/chat")))
            //                {
            //                    context.Token = accessToken;
            //                }

            //                return Task.CompletedTask;
            //            }
            //        };
            //    });

            services.AddAuthorization(opt =>
            {
                opt.AddPolicy("IsEventHost", policy =>
                {
                    policy.Requirements.Add(new IsEventHostRequirement());
                });
            });
            services.AddTransient<IAuthorizationHandler, IsEventHostRequirementHandler>();
            //services.AddScoped<TokenService>();
            services.AddScoped<CookieService>();

            return services;
        }
    }
}

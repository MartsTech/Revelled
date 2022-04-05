namespace WebApi.Modules.Common.Authentication;

using Application.Services;
using Infrastructure.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.FeatureManagement;
using Persistence;
using WebApi.Modules.Common.FeatureFlags;

public static class AuthenticationExtensions
{
    public static IServiceCollection AddAuthentication(
        this IServiceCollection services,
        IConfiguration config)
    {
        IFeatureManager featureManager = services
            .BuildServiceProvider()
            .GetRequiredService<IFeatureManager>();

        bool isEnabled = featureManager
            .IsEnabledAsync(nameof(CustomFeature.Authentication))
            .ConfigureAwait(false)
            .GetAwaiter()
            .GetResult();

        if (isEnabled)
        {
            services.AddScoped<IUserService, UserService>();

            services.AddAuthentication()
                .AddGoogle(googleOptions =>
                {
                    googleOptions.ClientId = config["Authentication:Google:ClientId"];
                    googleOptions.ClientSecret = config["Authentication:Google:ClientSecret"];

                    googleOptions.ClaimActions.MapJsonKey("urn:google:picture", "picture", "url");
                    googleOptions.ClaimActions.MapJsonKey("urn:google:locale", "locale", "string");

                    googleOptions.SaveTokens = true;

                    googleOptions.Events.OnCreatingTicket = ctx =>
                    {
                        List<AuthenticationToken> tokens = ctx.Properties.GetTokens().ToList();

                        tokens.Add(new AuthenticationToken()
                        {
                            Name = "TicketCreated",
                            Value = DateTime.UtcNow.ToString()
                        });

                        ctx.Properties.StoreTokens(tokens);

                        return Task.CompletedTask;
                    };
                });
        }
        else
        {
            services.AddScoped<IUserService, TestUserService>();

            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = "Test";
                opt.DefaultChallengeScheme = "Test";
            })
            .AddScheme<AuthenticationSchemeOptions, TestAuthenticationHandler>(
                "Test", opt => { });
        }

        return services;
    }
}
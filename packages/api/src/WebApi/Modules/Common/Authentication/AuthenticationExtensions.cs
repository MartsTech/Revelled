namespace WebApi.Modules.Common.Authentication;

using Microsoft.AspNetCore.Authentication;
using Microsoft.FeatureManagement;
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
        }
        else
        {
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
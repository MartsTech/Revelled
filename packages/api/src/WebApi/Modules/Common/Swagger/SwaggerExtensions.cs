namespace WebApi.Modules.Common.Swagger;

using FeatureFlags;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.FeatureManagement;

public static class SwaggerExtensions
{
    public static IServiceCollection AddSwagger(this IServiceCollection services)
    {
        IFeatureManager featureManager = services
            .BuildServiceProvider()
            .GetRequiredService<IFeatureManager>();

        bool isEnabled = featureManager
           .IsEnabledAsync(nameof(CustomFeature.Swagger))
           .ConfigureAwait(false)
           .GetAwaiter()
           .GetResult();

        if (isEnabled)
        {
            services
                .AddEndpointsApiExplorer()
                .AddSwaggerGen();
        }

        return services;
    }

    public static IApplicationBuilder UseVersionedSwagger(
        this IApplicationBuilder app)
    {
        app.UseSwagger();
        app.UseSwaggerUI();

        return app;
    }
}
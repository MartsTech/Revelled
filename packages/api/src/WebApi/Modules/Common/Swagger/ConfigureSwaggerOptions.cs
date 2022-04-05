namespace WebApi.Modules.Common.Swagger;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

public sealed class ConfigureSwaggerOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {
        options.SwaggerDoc("v1", CreateInfoForApiVersion());
    }

    private static OpenApiInfo CreateInfoForApiVersion()
    {
        OpenApiInfo info = new()
        {
            Title = "Revelled",
            Version = "v1",
            Description = "A public event management and advertisement platform for " +
            "interactive events which allows the users to easily announce, organize" +
            " and manage interactive events, where the participants can feed as a part" +
            " of the event even before it, can be entertained and take part in the organization",
            License = new OpenApiLicense { Name = "MIT" }
        };

        return info;
    }
}
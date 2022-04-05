namespace WebApi.Modules;

using Application.Services;
using Infrastructure.Photos;

public static class CloudinaryExtensions
{
    public static IServiceCollection AddCloudinary(this IServiceCollection services, IConfiguration config)
    {
        services.AddScoped<IPhotoService, PhotoService>();
        services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));

        return services;
    }
}
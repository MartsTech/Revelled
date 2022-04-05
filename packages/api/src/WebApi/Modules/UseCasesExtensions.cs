namespace WebApi.Modules;

using Application.UseCases.Photos.AddPhoto;
using MediatR;

public static class UseCasesExtensions
{
    public static IServiceCollection AddUseCases(this IServiceCollection services)
    {
        services.AddMediatR(typeof(AddPhotoUseCase.Handler).Assembly);

        return services;
    }
}
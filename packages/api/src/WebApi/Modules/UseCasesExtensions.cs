namespace WebApi.Modules;

using Application.UseCases.Events.CreateEvent;
using MediatR;

public static class UseCasesExtensions
{
    public static IServiceCollection AddUseCases(this IServiceCollection services)
    {
        services.AddMediatR(typeof(CreateEventUseCase.Handler).Assembly);

        return services;
    }
}
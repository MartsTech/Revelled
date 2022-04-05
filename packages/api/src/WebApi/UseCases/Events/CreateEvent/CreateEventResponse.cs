namespace WebApi.UseCases.Events.CreateEvent;

using Application.UseCases.Events;

public sealed class CreateEventResponse
{
    public CreateEventResponse(EventDto @event)
    {
        Event = @event;
    }

    public EventDto Event { get; }
}
namespace WebApi.UseCases.Events.CreateEvent;

using Application.UseCases.Events;

public class CreateEventResponse
{
    public CreateEventResponse(EventDto @event)
    {
        Event = @event;
    }

    public EventDto Event { get; }
}
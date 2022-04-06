namespace WebApi.UseCases.Events.UpdateEvent;

using Application.UseCases.Events;

public sealed class UpdateEventResponse
{
    public UpdateEventResponse(EventDto @event)
    {
        Event = @event;
    }

    public EventDto Event { get; }
}
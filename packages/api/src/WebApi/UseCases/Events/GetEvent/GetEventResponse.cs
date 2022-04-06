namespace WebApi.UseCases.Events.GetEvent;

using Application.UseCases.Events;

public sealed class GetEventResponse
{
    public GetEventResponse(EventDto @event)
    {
        Event = @event;
    }

    public EventDto Event { get; }
}

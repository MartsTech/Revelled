namespace WebApi.UseCases.Events.GetEvents;

using Application.UseCases.Events;

public sealed class GetEventsResponse
{
    public GetEventsResponse(List<EventDto> events)
    {
        Events = events;
    }

    public List<EventDto> Events { get; } = new();
}
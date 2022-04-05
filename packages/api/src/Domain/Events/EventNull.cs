using Domain.ValueObjects;

namespace Domain.Events;

public sealed class EventNull : IEvent
{
    public EventId EventId => new(Guid.Empty);

    public static EventNull Instance { get; } = new();
}
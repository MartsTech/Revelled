namespace Domain.Events;

using Domain.ValueObjects;

public interface IEvent
{
    public EventId EventId { get; }
}
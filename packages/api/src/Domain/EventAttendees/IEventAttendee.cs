namespace Domain.EventAttendees;

using Domain.ValueObjects;

public interface IEventAttendee
{
    public ProfileId ProfileId { get; }

    public EventId EventId { get; }
}
namespace Domain.EventAttendees;

using Domain.Events;
using Domain.Profiles;
using Domain.ValueObjects;

public class EventAttendee : IEventAttendee
{
    public EventAttendee(ProfileId profileId, EventId eventId, bool isHost)
    {
        ProfileId = profileId;
        EventId = eventId;
        IsHost = isHost;
    }

    public ProfileId ProfileId { get; }

    public Profile? Profile { get; }

    public EventId EventId { get; }

    public Event? Event { get; }

    public bool IsHost { get; }
}
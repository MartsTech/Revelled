namespace Domain.Events;

using Domain.EventAttendees;

public interface IEventRepository
{
    Task Add(Event @event, EventAttendee attendee);
}
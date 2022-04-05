namespace Domain.EventAttendees;

public sealed class EventAttendeesCollection : List<EventAttendee>
{
    public void Attend(EventAttendee attendee) 
    {
        Add(attendee);
    }
}
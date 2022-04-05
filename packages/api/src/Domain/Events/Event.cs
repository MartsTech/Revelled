namespace Domain.Events;

using Domain.ValueObjects;

public class Event : IEvent
{
    public Event(
        EventId eventId, string title, DateTime date,
        string description, string category, string city,
        string venue)
    {
        EventId = eventId;
        Title = title;
        Date = date;
        Description = description;
        Category = category;
        City = city;
        Venue = venue;
    }

    public EventId EventId { get; }

    public string Title { get; }

    public DateTime Date { get; }

    public string Description { get; }

    public string Category { get; }

    public string City { get; }

    public string Venue { get; }
}
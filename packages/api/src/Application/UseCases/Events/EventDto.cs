namespace Application.UseCases.Events;

using Domain.Events;

public sealed class EventDto
{
    public EventDto(Event @event)
    {
        Id = @event.EventId.Id;
        Title = @event.Title;
        Date = @event.Date;
        Description = @event.Description;
        Category = @event.Category;
        City = @event.City;
        Venue = @event.Venue;
    }

    public Guid Id { get; }

    public string Title { get; }

    public DateTime Date { get; }

    public string Description { get; }

    public string Category { get; }

    public string City { get; }

    public string Venue { get; }
}
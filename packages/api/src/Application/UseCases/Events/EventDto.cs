namespace Application.UseCases.Events;

using Domain.Events;
using Domain.ValueObjects;

public sealed class EventDto
{
    public EventDto(Event @event, ProfileId currentProfileId)
    {
        Id = @event.EventId.Id;
        Title = @event.Title;
        Date = @event.Date;
        Description = @event.Description;
        Category = @event.Category;
        City = @event.City;
        Venue = @event.Venue;
        IsCancelled = @event.IsCancelled;
        Attendees = @event.Attendees
            .Select(x => new EventAttendeeDto(x, currentProfileId))
            .ToList();
    }

    public Guid Id { get; }

    public string Title { get; }

    public DateTime Date { get; }

    public string Description { get; }

    public string Category { get; }

    public string City { get; }

    public string Venue { get; }

    public bool IsCancelled { get; }

    public ICollection<EventAttendeeDto> Attendees { get; }
}
namespace Persistence.Repositories.Events;

using Domain.EventAttendees;
using Domain.Events;

public sealed class EventRepository : IEventRepository
{
    private readonly DataContext _context;

    public EventRepository(DataContext context)
    {
        _context = context;
    }

    public async Task Add(Event @event, EventAttendee attendee)
    {
        await _context
            .Events
            .AddAsync(@event)
            .ConfigureAwait(false);

        await _context
            .EventAttendees
            .AddAsync(attendee)
            .ConfigureAwait(false);
    }
}
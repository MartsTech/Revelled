namespace Persistence.Repositories.Events;

using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Events;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;

public sealed class EventRepository : IEventRepository
{
    private readonly DataContext _context;

    public EventRepository(DataContext context)
    {
        _context = context;
    }

    public async Task Add(Event @event)
    {
        await _context
         .Events
         .AddAsync(@event)
         .ConfigureAwait(false);
    }

    public async Task Delete(EventId eventId)
    {
        await _context
            .Database
            .ExecuteSqlRawAsync("DELETE FROM Event WHERE EventId=@p0", eventId.Id)
            .ConfigureAwait(false);
    }

    public async Task Update(Event @event)
    {
        Event? oldEvent = await _context
            .Events
            .SingleOrDefaultAsync(e => e.EventId == @event.EventId)
            .ConfigureAwait(false);

        if (oldEvent != null)
        {
            _context.Entry(oldEvent).CurrentValues.SetValues(@event);
        }
    }

    public async Task<IEvent> GetEvent(EventId eventId)
    {
        Event? @event = await _context
            .Events
            .Where(e => e.EventId == eventId)
            .Select(e => e)
            .SingleOrDefaultAsync()
            .ConfigureAwait(false);

        if (@event is Event findEvent)
        {
            return @event;
        }

        return EventNull.Instance;
    }

    public async Task<IList<Event>> GetEvents()
    {
        List<Event> events = await _context
            .Events
            .ToListAsync()
            .ConfigureAwait(false);

        return events;
    }
}
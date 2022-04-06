namespace Persistence.Repositories.Events;

using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Events;
using Domain.ValueObjects;

public sealed class EventRepositoryFake : IEventRepository
{
    private readonly DataContextFake _context;

    public EventRepositoryFake(DataContextFake context)
    {
        _context = context;
    }

    public async Task Add(Event @event)
    {
        _context.Events.Add(@event);

        await Task.CompletedTask
            .ConfigureAwait(false);
    }

    public async Task Delete(EventId eventId)
    {
        Event? eventOld = _context
            .Events
            .SingleOrDefault(e => e.EventId.Equals(eventId));

        if (eventOld == null)
        {
            return;
        }

        _context
            .Events
            .Remove(eventOld);

        await Task.CompletedTask
            .ConfigureAwait(false);
    }

    public async Task Update(Event @event)
    {
        Event? eventOld = _context
            .Events
            .SingleOrDefault(e => e.EventId.Equals(@event.EventId));

        if (eventOld != null)
        {
            _context.Events.Remove(eventOld);
        }

        _context.Events.Add(@event);

        await Task.CompletedTask
           .ConfigureAwait(false);
    }

    public async Task<IEvent> GetEvent(EventId eventId)
    {
        Event? @event = _context
            .Events
            .SingleOrDefault(e => e.EventId.Equals(eventId));

        if (@event == null)
        {
            return EventNull.Instance;
        }

        return await Task.FromResult(@event)
            .ConfigureAwait(false);
    }

    public async Task<IList<Event>> GetEvents()
    {
        List<Event> events = _context
            .Events
            .ToList();

        return await Task.FromResult(events)
            .ConfigureAwait(false);
    }
}
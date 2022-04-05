namespace Persistence.Repositories.Events;

using System.Threading.Tasks;
using Domain.EventAttendees;
using Domain.Events;

public sealed class EventRepositoryFake : IEventRepository
{
    private readonly DataContextFake _context;

    public EventRepositoryFake(DataContextFake context)
    {
        _context = context;
    }

    public async Task Add(Event @event, EventAttendee attendee)
    {
        _context.Events.Add(@event);

        _context.EventAttendees.Add(attendee);

        await Task.CompletedTask
            .ConfigureAwait(false);
    }
}
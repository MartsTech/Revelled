namespace Persistence.Repositories.Events;

using Domain.Events;

public sealed class EventRepository : IEventRepository
{
    private readonly DataContext _context;

    public EventRepository(DataContext context)
    {
        _context = context;
    }
}
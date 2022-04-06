namespace Domain.Events;

using Domain.ValueObjects;

public interface IEventRepository
{
    Task Add(Event @event);

    Task Update(Event @event);

    Task Delete(EventId eventId);

    Task<IEvent> GetEvent(EventId eventId);

    Task<IList<Event>> GetEvents();
}
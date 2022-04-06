namespace Application.UseCases.Events.GetEvents;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain.Events;
using MediatR;

public sealed class GetEventsUseCase
{
    public class Query : IRequest<Result<IList<EventDto>>> 
    { 
    }

    public class Handler : IRequestHandler<Query, Result<IList<EventDto>>>
    {
        private readonly IEventRepository _eventRepository;

        public Handler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<Result<IList<EventDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            IList<EventDto> events = await GetEvents();

            return Result<IList<EventDto>>.Success(events);
        }

        private async Task<List<EventDto>> GetEvents()
        {
            IList<Event> events = await _eventRepository
              .GetEvents()
              .ConfigureAwait(false);

            List<EventDto> result = new(events.Count);

            foreach (Event @event in events)
            {
                result.Add(new EventDto(@event));
            }

            return result;
        }
    }
}
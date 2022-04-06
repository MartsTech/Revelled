namespace Application.UseCases.Events.GetEvent;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain.Events;
using Domain.ValueObjects;
using FluentValidation;
using MediatR;

public sealed class GetEventUseCase
{
    public class Query : IRequest<Result<EventDto>>
    {
        public Query(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; }
    }

    public class QueryValidator : AbstractValidator<Query>
    {
        public QueryValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    public class Handler : IRequestHandler<Query, Result<EventDto>>
    {
        private readonly IEventRepository _eventRepository;

        public Handler(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<Result<EventDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            EventDto? @event = await GetEvent(new EventId(request.Id));

            return @event != null
                ? Result<EventDto>.Success(@event)
                : Result<EventDto>.NotFound();
        }

        private async Task<EventDto?> GetEvent(EventId eventId)
        {
            IEvent @event = await _eventRepository
                .GetEvent(eventId)
                .ConfigureAwait(false);

            return @event is Event getEvent 
                ? new EventDto(getEvent) 
                : null;
        }
    }

}
namespace Application.UseCases.Events.UpdateEvent;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Services;
using Domain;
using Domain.Events;
using Domain.ValueObjects;
using FluentValidation;
using MediatR;

public sealed class UpdateEventUseCase
{
    public class Command : IRequest<Result<EventDto>>
    {
        public Command(Guid id, UpdateEventInput input)
        {
            Id = id;
            Input = input;
        }

        public Guid Id { get; }

        public UpdateEventInput Input { get; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Input).SetValidator(new UpdateEventInputValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<EventDto>>
    {
        private readonly IEntityFactory _entityFactory;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEventRepository _eventRepository;

        public Handler(
            IEntityFactory entityFactory,
            IUnitOfWork unitOfWork,
            IEventRepository eventRepository)
        {
            _entityFactory = entityFactory;
            _unitOfWork = unitOfWork;
            _eventRepository = eventRepository;
        }

        public async Task<Result<EventDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            IEvent @event = await _eventRepository
                .GetEvent(new EventId(request.Id))
                .ConfigureAwait(false);

            if (@event is not Event)
            {
                return Result<EventDto>.NotFound();
            }

            Event newEvent = _entityFactory.NewEvent(
                request.Input.Title,
                request.Input.Date,
                request.Input.Description,
                request.Input.Category,
                request.Input.City,
                request.Input.Venue,
                request.Id);

            bool success = await UpdateEvent(newEvent)
                .ConfigureAwait(false);

            return success
                ? Result<EventDto>.Success(new EventDto(newEvent))
                : Result<EventDto>.Failure("Failed to update the event.");
        }

        private async Task<bool> UpdateEvent(Event @event)
        {
            await _eventRepository.Update(@event)
                .ConfigureAwait(false);

            int changes = await _unitOfWork
                .Save()
                .ConfigureAwait(false);

            return changes > 0;
        }
    }
}
namespace Application.UseCases.Events.CreateEvent;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Services;
using Domain;
using Domain.Events;
using FluentValidation;
using MediatR;

public sealed class CreateEventUseCase
{
    public class Command : IRequest<Result<EventDto>>
    {
        public Command(CreateEventInput input)
        {
            Input = input;
        }

        public CreateEventInput Input { get; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Input).SetValidator(new CreateEventInputValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<EventDto>>
    {
        private readonly IEntityFactory _entityFactory;
        private readonly IEventRepository _eventRepository;
        private readonly IUnitOfWork _unitOfWork;

        public Handler(
            IEntityFactory entityFactory,
            IEventRepository eventRepository,
            IUnitOfWork unitOfWork)
        {
            _entityFactory = entityFactory;
            _eventRepository = eventRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<Result<EventDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            Event @event = _entityFactory.NewEvent(
                request.Input.Title,
                request.Input.Date,
                request.Input.Description,
                request.Input.Category,
                request.Input.City,
                request.Input.Venue);

            bool success = await CreateEvent(@event)
                .ConfigureAwait(false);

            return success
                ? Result<EventDto>.Success(new EventDto(@event))
                : Result<EventDto>.Failure("Failed to create the event.");
        }

        private async Task<bool> CreateEvent(Event @event)
        {
            await _eventRepository.Add(@event)
                .ConfigureAwait(false);

            int changes = await _unitOfWork
                .Save()
                .ConfigureAwait(false);

            return changes > 0;
        }
    }
}
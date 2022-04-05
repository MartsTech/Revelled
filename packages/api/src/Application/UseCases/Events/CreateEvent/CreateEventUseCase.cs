namespace Application.UseCases.Events.CreateEvent;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Services;
using Domain;
using Domain.EventAttendees;
using Domain.Events;
using Domain.Profiles;
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
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;
        private readonly IEventRepository _eventRepository;
        private readonly IProfileRepository _profileRepository;

        public Handler(
            IEntityFactory entityFactory,
            IUnitOfWork unitOfWork,
            IUserService userService,
            IEventRepository eventRepository,
            IProfileRepository profileRepository)
        {
            _entityFactory = entityFactory;
            _unitOfWork = unitOfWork;
            _userService = userService;
            _eventRepository = eventRepository;
            _profileRepository = profileRepository;
        }

        public async Task<Result<EventDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            string externalUserId = _userService
                .GetCurrentExternalUserId();

            IProfile profile = await _profileRepository
                .GetProfile(externalUserId)
                .ConfigureAwait(false);

            if (profile is not Profile findProfile)
            {
                return Result<EventDto>.NotFound();
            }

            Event @event = _entityFactory.NewEvent(
                request.Input.Title,
                request.Input.Date,
                request.Input.Description,
                request.Input.Category,
                request.Input.City,
                request.Input.Venue);

            EventAttendee attendee = _entityFactory.NewEventAttendee(
                findProfile.ProfileId, @event.EventId);

            bool success = await CreateEvent(@event, attendee)
                .ConfigureAwait(false);

            return success
                ? Result<EventDto>.Success(new EventDto(@event, profile.ProfileId))
                : Result<EventDto>.Failure("Failed to create the event.");
        }

        private async Task<bool> CreateEvent(Event @event, EventAttendee attendee)
        {
            @event.Attendees.Attend(attendee);

            await _eventRepository.Add(@event, attendee)
                .ConfigureAwait(false);

            int changes = await _unitOfWork
                .Save()
                .ConfigureAwait(false);

            return changes > 0;
        }
    }
}
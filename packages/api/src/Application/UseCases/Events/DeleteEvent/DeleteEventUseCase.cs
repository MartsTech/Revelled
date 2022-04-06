namespace Application.UseCases.Events.DeleteEvent;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Services;
using Domain.Events;
using Domain.ValueObjects;
using FluentValidation;
using MediatR;

public sealed class DeleteEventUseCase
{
    public class Command : IRequest<Result<Unit>>
    {
        public Command(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly IEventRepository _eventRepository;
        private readonly IUnitOfWork _unitOfWork;

        public Handler(
            IEventRepository eventRepository,
            IUnitOfWork unitOfWork)
        {
            _eventRepository = eventRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            IEvent @event = await _eventRepository
                .GetEvent(new EventId(request.Id))
                .ConfigureAwait(false);

            if (@event is not Event)
            {
                return Result<Unit>.NotFound();
            }

            bool success = await DeleteEvent(new EventId(request.Id))
                .ConfigureAwait(false);

            return success
                ? Result<Unit>.Success(Unit.Value)
                : Result<Unit>.Failure("Failed to delete the event.");
        }

        private async Task<bool> DeleteEvent(EventId eventId)
        {
            await _eventRepository.Delete(eventId)
                .ConfigureAwait(false);

            int changes = await _unitOfWork.Save()
                .ConfigureAwait(false);

            return changes == 0;
        }
    }
}
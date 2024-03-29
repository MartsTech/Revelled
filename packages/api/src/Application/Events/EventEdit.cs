﻿namespace Application.Events
{
    public class EventEdit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Event Event { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Event).SetValidator(new EventValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var eventArgs = await _context.Events.FindAsync(new object[] { request.Event.Id }, cancellationToken);

                if (eventArgs == null)
                {
                    return null;
                }

                _mapper.Map(request.Event, eventArgs);

                var success = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!success)
                {
                    return Result<Unit>.Failure("Failed to update event.");
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}

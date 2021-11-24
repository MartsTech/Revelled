namespace Application.Events
{
    public class EventDelete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var eventArgs = await _context.Events.FindAsync(new object[] { request.Id }, cancellationToken);

                if (eventArgs == null)
                {
                    return null;
                }

                _context.Remove(eventArgs);

                var success = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!success)
                {
                    return Result<Unit>.Failure("Failed to delete the event.");
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}

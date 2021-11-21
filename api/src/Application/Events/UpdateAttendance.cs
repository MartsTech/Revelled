namespace Application.Events
{
    public class UpdateAttendance
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var eventArgs = await _context.Events
                    .Include(e => e.Attendees)
                    .ThenInclude(a => a.AppUser)
                    .SingleOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (eventArgs == null) return null;

                var user = await _context.Users.FirstOrDefaultAsync(x =>
                    x.UserName == _userAccessor.GetUserName(), cancellationToken);

                if (user == null) return null;

                var hostUserName = eventArgs.Attendees.FirstOrDefault(x => x.IsHost)?.AppUser?.UserName;

                var attendance = eventArgs.Attendees.FirstOrDefault(x => x.AppUser.UserName == user.UserName);

                if (attendance != null && hostUserName == user.UserName)
                {
                    eventArgs.IsCancelled = !eventArgs.IsCancelled;
                }
                else if (attendance != null && hostUserName != user.UserName)
                {
                    eventArgs.Attendees.Remove(attendance);
                }
                else if (attendance == null)
                {
                    attendance = new EventAttendee
                    {
                        AppUser = user,
                        Event = eventArgs,
                        IsHost = false,
                    };
                    eventArgs.Attendees.Add(attendance);
                }

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    return Result<Unit>.Failure("A problem occured while updating your attendace.");
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}

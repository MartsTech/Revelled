namespace Infrastructure.Security
{
    public class IsEventHostRequirement : IAuthorizationRequirement
    {
    }

    public class IsEventHostRequirementHandler : AuthorizationHandler<IsEventHostRequirement>
    {
        private readonly DataContext _dbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public IsEventHostRequirementHandler(DataContext dbContext, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _httpContextAccessor = httpContextAccessor;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsEventHostRequirement requirement)
        {
            var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Task.CompletedTask;
            }

            var eventId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues
                .SingleOrDefault(x => x.Key == "id").Value?.ToString());

            var attendee = _dbContext.EventAttendees
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.AppUserId == userId && x.EventId == eventId)
                .Result;

            if (attendee == null)
            {
                return Task.CompletedTask;
            }

            if (attendee.IsHost)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}

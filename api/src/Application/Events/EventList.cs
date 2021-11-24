namespace Application.Events
{
    public class EventList
    {
        public class Query : IRequest<Result<PagedList<EventDto>>> 
        {
            public EventParams Params { get; set; }
        };

        public class Handler : IRequestHandler<Query, Result<PagedList<EventDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }

            public async Task<Result<PagedList<EventDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Events
                    .Where(d => d.StartDate >= request.Params.StartDate)
                    .OrderBy(d => d.StartDate)
                    .ProjectTo<EventDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .AsQueryable();

                if (request.Params.IsGoing && !request.Params.IsHost)
                {
                    query = query.Where(x => x.Attendees.Any(a => a.AppUser.UserName == _userAccessor.GetUsername()));
                }

                if (request.Params.IsHost && !request.Params.IsGoing)
                {
                    query = query.Where(x => x.HostUsername == _userAccessor.GetUsername());
                }

                return Result<PagedList<EventDto>>.Success(
                    await PagedList<EventDto>.CreateAsync(query, request.Params.PageNumber,
                        request.Params.PageSize, cancellationToken)
                );
            }
        }
    }
}

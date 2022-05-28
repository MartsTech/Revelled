namespace Application.Profiles
{
    public class ProfileListEvents
    {
        public class Query : IRequest<Result<List<ProfileEventDto>>>
        {
            public string Username { get; set; }
            public string Predicate { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<ProfileEventDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<ProfileEventDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.EventAttendees
                    .Where(u => u.User.UserName == request.Username)
                    .OrderBy(a => a.Event.StartDate)
                    .ProjectTo<ProfileEventDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();

                query = request.Predicate switch
                {
                    "past" => query.Where(a => a.StartDate <= DateTime.Now),
                    "hosting" => query.Where(a => a.HostUsername == request.Username),
                    _ => query.Where(a => a.StartDate >= DateTime.Now)
                };

                return Result<List<ProfileEventDto>>.Success(await query.ToListAsync(cancellationToken));
            }
        }
    }
}

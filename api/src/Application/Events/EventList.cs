namespace Application.Events
{
    public class EventList
    {
        public class Query : IRequest<Result<List<EventDto>>> { };

        public class Handler : IRequestHandler<Query, Result<List<EventDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<EventDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var events = await _context.Events
                    .ProjectTo<EventDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<EventDto>>.Success(events);
            }
        }
    }
}

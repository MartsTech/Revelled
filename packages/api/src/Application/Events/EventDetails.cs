namespace Application.Events
{
    public class EventDetails
    {
        public class Query : IRequest<Result<EventDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<EventDto>>
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

            public async Task<Result<EventDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var eventDto = await _context.Events
                   .ProjectTo<EventDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                   .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                return Result<EventDto>.Success(eventDto);
            }
        }
    }
}

﻿namespace Application.Events
{
    public class Details
    {
        public class Query : IRequest<Result<Event>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Event>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Event>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<Event>.Success(await _context.Events.FindAsync(new object[] { request.Id }, cancellationToken));
            }
        }
    }
}

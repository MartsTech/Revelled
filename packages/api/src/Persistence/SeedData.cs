namespace Persistence;

using Domain.Events;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;

public static class SeedData
{
    public static readonly string DefaultUserId = "df1525ce-1f1b-4e22-81fd-1065a35e4d5c";

    public static void Seed(ModelBuilder builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.Entity<Event>()
            .HasData(
                new Event(new EventId(Guid.NewGuid()), "Past Event 1", DateTime.Now.AddMonths(-2), "Event 2 months ago", "drinks", "London", "Pub"),
                new Event(new EventId(Guid.NewGuid()), "Past Event 2", DateTime.Now.AddMonths(-1), "Event 1 month ago", "culture", "Paris", "Louvre"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 1", DateTime.Now.AddMonths(1), "Event 1 month in the future", "culture", "London", "Natural History Museum"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 2", DateTime.Now.AddMonths(2), "Event 2 months in the future", "music", "London", "02 Arena"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 3", DateTime.Now.AddMonths(3), "Event 3 months in the future", "drinks", "London", "Another pub"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 4", DateTime.Now.AddMonths(4), "Event 4 months in the future", "drinks", "London", "Yet another pub"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 5", DateTime.Now.AddMonths(5), "Event 5 months in the future", "drinks", "London", "Just another pub"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 6", DateTime.Now.AddMonths(6), "Event 6 months in the future", "music", "London", "Roundhouse Camden"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 7", DateTime.Now.AddMonths(7), "Event 7 months in the future", "travel", "London", "Somewhere on the Thames"),
                new Event(new EventId(Guid.NewGuid()), "Future Event 8", DateTime.Now.AddMonths(8), "Event 8 months in the future", "film", "London", "Cinema"));
    }
}
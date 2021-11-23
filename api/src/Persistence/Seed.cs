namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (userManager.Users.Any() && context.Events.Any()) return;

            var users = new List<AppUser>
            {
                new AppUser
                {
                    DisplayName = "Bob",
                    UserName = "bob",
                    Email = "bob@test.com"
                },
                new AppUser
                {
                    DisplayName = "Jane",
                    UserName = "jane",
                    Email = "jane@test.com"
                },
                new AppUser
                {
                    DisplayName = "Tom",
                    UserName = "tom",
                    Email = "tom@test.com"
                },
            };

            foreach (var user in users)
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }

            var events = new List<Event>
            {
                new Event
                {
                    Title="Past Event 1",
                    Description = "Event 2 mouths ago",
                    StartDate = DateTime.Now.AddMonths(-4),
                    EndDate = DateTime.Now.AddMonths(-2),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            AppUser = users[0],
                            IsHost = true
                        }
                    }
                },
                new Event
                {
                    Title="Past Event 2",
                    Description = "Event 1 mouths ago",
                    StartDate = DateTime.Now.AddMonths(-2),
                    EndDate = DateTime.Now.AddMonths(-1),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            AppUser = users[0],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            AppUser = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 1",
                    Description = "Event 2 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(4),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            AppUser = users[2],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            AppUser = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 2",
                    Description = "Event 1 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(1),
                    EndDate = DateTime.Now.AddMonths(2),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            AppUser = users[2],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            AppUser = users[0],
                            IsHost = false
                        }
                    }
                },
            };

            await context.Events.AddRangeAsync(events);
            await context.SaveChangesAsync();
        }
    }
}

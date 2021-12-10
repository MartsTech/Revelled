namespace Persistence
{
    public static class DbInitializer
    {
        public static async Task Initialize(DataContext context, UserManager<User> userManager)
        {
            if (userManager.Users.Any() && context.Events.Any()) return;

            var users = new List<User>
            {
                new User
                {
                    DisplayName = "Bob",
                    UserName = "bob",
                    Email = "bob@test.com",
                    EmailConfirmed = true,
                },
                new User
                {
                    DisplayName = "Jane",
                    UserName = "jane",
                    Email = "jane@test.com"
                },
                new User
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
                    StartDate = DateTime.Now.AddMonths(-2),
                    EndDate = DateTime.Now.AddMonths(-1),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = true
                        }
                    }
                },
                new Event
                {
                    Title="Past Event 2",
                    Description = "Event 1 mouths ago",
                    StartDate = DateTime.Now.AddMonths(-1),
                    EndDate = DateTime.Now,
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 1",
                    Description = "Event 1 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(1),
                    EndDate = DateTime.Now.AddMonths(2),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[2],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 2",
                    Description = "Event 2 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(3),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[2],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 3",
                    Description = "Event 3 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(3),
                    EndDate = DateTime.Now.AddMonths(4),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 4",
                    Description = "Event 4 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(4),
                    EndDate = DateTime.Now.AddMonths(5),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = true
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 5",
                    Description = "Event 5 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(5),
                    EndDate = DateTime.Now.AddMonths(6),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 6",
                    Description = "Event 6 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(6),
                    EndDate = DateTime.Now.AddMonths(7),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[2],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[1],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 7",
                    Description = "Event 7 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(7),
                    EndDate = DateTime.Now.AddMonths(8),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[0],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[2],
                            IsHost = false
                        }
                    }
                },
                new Event
                {
                    Title="Future Event 8",
                    Description = "Event 8 mouths in the future",
                    StartDate = DateTime.Now.AddMonths(8),
                    EndDate = DateTime.Now.AddMonths(9),
                    Attendees = new List<EventAttendee>
                    {
                        new EventAttendee
                        {
                            User = users[2],
                            IsHost = true
                        },
                        new EventAttendee
                        {
                            User = users[1],
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

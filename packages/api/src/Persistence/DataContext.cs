namespace Persistence;

using Domain.Comments;
using Domain.EventAttendees;
using Domain.Events;
using Domain.Photos;
using Domain.ProfileFollowings;
using Domain.Profiles;
using Microsoft.EntityFrameworkCore;

public sealed class DataContext : DbContext
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public DataContext(DbContextOptions options) : base(options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    {
    }

    public DbSet<Profile> Profiles { get; }

    public DbSet<ProfileFollowing> ProfileFollowings { get; }

    public DbSet<Event> Events { get; }

    public DbSet<EventAttendee> EventAttendees { get; }

    public DbSet<Photo> Photos { get; }

    public DbSet<Comment> Comments { get; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        if (modelBuilder is null)
        {
            throw new ArgumentNullException(nameof(modelBuilder));
        }

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
    }
}
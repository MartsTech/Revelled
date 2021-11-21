namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; }
        public DbSet<EventAttendee> EventAttendees { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<EventAttendee>(x => x.HasKey(a => new { a.AppUserId, a.EventId }));

            builder.Entity<EventAttendee>()
                .HasOne(a => a.AppUser)
                .WithMany(u => u.Events)
                .HasForeignKey(a => a.AppUserId);

            builder.Entity<EventAttendee>()
                .HasOne(a => a.Event)
                .WithMany(e => e.Attendees)
                .HasForeignKey(a => a.EventId);
        }
    }
}

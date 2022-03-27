namespace Persistence.Configurations;

using Domain.EventAttendees;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class EventAttendeeConfiguration : IEntityTypeConfiguration<EventAttendee>
{
    public void Configure(EntityTypeBuilder<EventAttendee> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("EventAttendee");

        builder.HasKey(x => new { x.ProfileId, x.EventId });

        builder.Property(x => x.IsHost)
            .IsRequired();

        builder.HasOne(p => p.Profile)
            .WithMany(a => a.Events)
            .HasForeignKey(p => p.ProfileId);

        builder.HasOne(e => e.Event)
            .WithMany(a => a.Attendees)
            .HasForeignKey(e => e.EventId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
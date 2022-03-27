namespace Persistence.Configurations;

using Domain.Events;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class EventConfiguration : IEntityTypeConfiguration<Event>
{
    public void Configure(EntityTypeBuilder<Event> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("Event");

        builder.Property(x => x.EventId)
            .HasConversion(
                v => v.Id,
                v => new EventId(v))
            .IsRequired();

        builder.Property(x => x.Title)
            .HasMaxLength(70)
            .IsRequired();

        builder.Property(x => x.Date)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(256)
            .IsRequired();

        builder.Property(x => x.Category)
            .HasMaxLength(30)
            .IsRequired();

        builder.Property(x => x.City)
            .HasMaxLength(30)
            .IsRequired();

        builder.Property(x => x.Venue)
           .HasMaxLength(30)
           .IsRequired();

        builder.Property(x => x.IsCancelled)
            .IsRequired();
    }
}
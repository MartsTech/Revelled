namespace Persistence.Configurations;

using Domain.Photos;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class PhotoConfiguration : IEntityTypeConfiguration<Photo>
{
    public void Configure(EntityTypeBuilder<Photo> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("Photo");

        builder.Property(b => b.PhotoId)
            .HasConversion(
                v => v.Id,
                v => new PhotoId(v))
            .IsRequired();

        builder.Property(x => x.Url)
            .HasMaxLength(256)
            .IsRequired();

        builder.HasOne(x => x.Profile)
            .WithMany(p => p.Photos)
            .HasForeignKey(x => x.ProfileId);

        builder.Property(x => x.IsMain)
            .IsRequired();
    }
}
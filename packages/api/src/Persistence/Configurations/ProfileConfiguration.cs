namespace Persistence.Configurations;

using Domain.Profiles;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class ProfileConfiguration : IEntityTypeConfiguration<Profile>
{
    public void Configure(EntityTypeBuilder<Profile> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("Profile");

        builder.Property(x => x.ProfileId)
            .HasConversion(
                v => v.Id,
                v => new ProfileId(v))
            .IsRequired();

        builder.Property(x => x.ExternalUserId)
           .UsePropertyAccessMode(PropertyAccessMode.FieldDuringConstruction);

        builder.Property(x => x.DisplayName)
            .HasMaxLength(70)
            .IsRequired();

        builder.Property(x => x.Bio)
            .HasMaxLength(600)
            .IsRequired();
    }
}
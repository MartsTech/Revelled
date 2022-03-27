namespace Persistence.Configurations;

using Domain.ProfileFollowings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class ProfileFollowingConfiguration : IEntityTypeConfiguration<ProfileFollowing>
{
    public void Configure(EntityTypeBuilder<ProfileFollowing> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("ProfileFollowing");

        builder.HasKey(k => new { k.ObserverId, k.TargetId });

        builder.HasOne(o => o.Observer)
            .WithMany(f => f.Followings)
            .HasForeignKey(o => o.ObserverId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(o => o.Target)
            .WithMany(f => f.Followers)
            .HasForeignKey(o => o.TargetId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
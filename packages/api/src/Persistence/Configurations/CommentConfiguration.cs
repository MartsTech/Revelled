namespace Persistence.Configurations;

using Domain.Comments;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public sealed class CommentConfiguration : IEntityTypeConfiguration<Comment>
{
    public void Configure(EntityTypeBuilder<Comment> builder)
    {
        if (builder == null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        builder.ToTable("Comment");

        builder.Property(x => x.CommentId)
            .HasConversion(
                v => v.Id,
                v => new CommentId(v))
            .ValueGeneratedOnAdd();

        builder.Property(x => x.Body)
            .HasMaxLength(600)
            .IsRequired();

        builder.Property(x => x.CreatedAt)
            .IsRequired();

        builder.HasOne(e => e.Event)
            .WithMany(c => c.Comments)
            .HasForeignKey(e => e.EventId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(p => p.Profile)
            .WithMany(c => c.Comments)
            .HasForeignKey(p => p.ProfileId);
    }
}
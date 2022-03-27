namespace Domain.ProfileFollowings;

using Domain.ValueObjects;

public interface IProfileFollowing
{
    public ProfileId ObserverId { get; }

    public ProfileId TargetId { get; }
}
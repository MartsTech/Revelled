namespace Domain.ProfileFollowings;

using Domain.Profiles;
using Domain.ValueObjects;

public class ProfileFollowing : IProfileFollowing
{
    public ProfileFollowing(ProfileId observerId, ProfileId targetId)
    {
        ObserverId = observerId;
        TargetId = targetId;
    }

    public ProfileId ObserverId { get; }

    public Profile? Observer { get; }

    public ProfileId TargetId { get; }

    public Profile? Target { get; }
}
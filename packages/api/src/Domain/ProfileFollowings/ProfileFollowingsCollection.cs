namespace Domain.ProfileFollowings;

using Domain.ValueObjects;

public sealed class ProfileFollowingsCollection : List<ProfileFollowing>
{
    public bool HasFollowing(ProfileId profileId)
    {
        return this.Any(x => x.Observer?.ProfileId == profileId);
    }
}
namespace Domain.Profiles;

using Domain.Comments;
using Domain.EventAttendees;
using Domain.Photos;
using Domain.ProfileFollowings;
using Domain.ValueObjects;

public class Profile : IProfile
{
    public Profile(ProfileId profileId, string externalUserId, string displayName)
    {
        ProfileId = profileId;
        ExternalUserId = externalUserId;
        DisplayName = displayName;
    }

    public ProfileId ProfileId { get; }

    public string ExternalUserId { get; }

    public string DisplayName { get; }

    public string Bio { get; } = "";

    public EventAttendeesCollection Events { get; } = new();

    public PhotosCollection Photos { get; } = new();

    public CommentsCollection Comments { get; } = new();

    public ProfileFollowingsCollection Followings { get; } = new();

    public ProfileFollowingsCollection Followers { get; } = new();
}
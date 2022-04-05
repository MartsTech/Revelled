namespace Application.UseCases.Events;

using Domain.EventAttendees;
using Domain.ValueObjects;

public sealed class EventAttendeeDto
{
    public EventAttendeeDto(EventAttendee attendee, ProfileId currentProfileId)
    {
        DisplayName = attendee.Profile!.DisplayName;
        Bio = attendee.Profile.Bio;
        Image = attendee.Profile.Photos.GetMainPhoto()?.Url ?? "";
        FollowersCount = attendee.Profile.Followers.Count;
        FollowingCount = attendee.Profile.Followings.Count;
        Following = attendee.Profile.Followers.HasFollowing(currentProfileId);
    }

    public string DisplayName { get; }

    public string Bio { get; }

    public string Image { get; }

    public bool Following { get; }

    public int FollowersCount { get; }

    public int FollowingCount { get; }
}
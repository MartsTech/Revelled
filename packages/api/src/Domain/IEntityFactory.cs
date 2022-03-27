namespace Domain;

using Domain.Comments;
using Domain.EventAttendees;
using Domain.Events;
using Domain.Photos;
using Domain.ProfileFollowings;
using Domain.Profiles;
using Domain.ValueObjects;

public interface IEntityFactory
{
    Profile NewProfile(
        string externalUserId, string displayName);

    ProfileFollowing NewProfileFollowing(
        ProfileId observerId, ProfileId targetId);

    Event NewEvent(
        string title, DateTime date, string description,
        string category, string city, string venue);

    EventAttendee NewEventAttendee(
        ProfileId profileId, EventId eventId, bool isHost = false);

    Photo NewPhoto(
        string id, string url, ProfileId profileId, 
        bool isMain = false);

    Comment NewComment(
        string body, ProfileId profileId, EventId eventId);
}
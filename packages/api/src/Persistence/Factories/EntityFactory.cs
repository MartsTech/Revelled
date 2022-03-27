namespace Persistence.Factories;

using System;
using Domain;
using Domain.Comments;
using Domain.EventAttendees;
using Domain.Events;
using Domain.Photos;
using Domain.ProfileFollowings;
using Domain.Profiles;
using Domain.ValueObjects;

public sealed class EntityFactory : IEntityFactory
{
    public Profile NewProfile(
        string externalUserId, string displayName)
    {
        return new Profile(
            new ProfileId(Guid.NewGuid()), externalUserId,
            displayName);
    }

    public ProfileFollowing NewProfileFollowing(
        ProfileId observerId, ProfileId targetId)
    {
        return new ProfileFollowing(observerId, targetId);
    }

    public Event NewEvent(
        string title, DateTime date, string description,
        string category, string city, string venue)
    {
        return new Event(
            new EventId(Guid.NewGuid()), title, date,
            description, category, city, venue);
    }

    public EventAttendee NewEventAttendee(
        ProfileId profileId, EventId eventId, bool isHost = false)
    {
        return new EventAttendee(profileId, eventId, isHost);
    }

    public Comment NewComment(
        string body, ProfileId profileId, EventId eventId)
    {
        return new Comment(body, profileId, eventId);
    }

    public Photo NewPhoto(
        string id, string url, ProfileId profileId, 
        bool isMain = false)
    {
        return new Photo(
            new PhotoId(id), url, profileId, isMain);
    }
}
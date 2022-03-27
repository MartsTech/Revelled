namespace Persistence;

using System.Collections.ObjectModel;
using Domain.Comments;
using Domain.EventAttendees;
using Domain.Events;
using Domain.Photos;
using Domain.ProfileFollowings;
using Domain.Profiles;

public sealed class DataContextFake
{
    public Collection<Profile> Profiles { get; } = new();

    public Collection<ProfileFollowing> ProfileFollowings { get; } = new();

    public Collection<Event> Events { get; } = new();

    public Collection<EventAttendee> EventAttendees { get; } = new();

    public Collection<Photo> Photos { get; } = new();

    public Collection<Comment> Comments { get; } = new();
}
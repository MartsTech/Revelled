namespace Domain.Comments;

using Domain.Events;
using Domain.Profiles;
using Domain.ValueObjects;

public class Comment : IComment
{
    public Comment(string body, ProfileId profileId, EventId eventId)
    {
        Body = body;
        ProfileId = profileId;
        EventId = eventId;
    }

    // Auto Increment
    public CommentId CommentId { get; }

    public string Body { get; }

    public DateTime CreatedAt { get; } = DateTime.UtcNow;

    public ProfileId ProfileId { get; }

    public Profile? Profile { get; }

    public EventId EventId { get; }

    public Event? Event { get; }
}
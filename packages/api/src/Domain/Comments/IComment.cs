namespace Domain.Comments;

using Domain.ValueObjects;

public interface IComment
{
    CommentId CommentId { get; }

    ProfileId ProfileId { get; }

    EventId EventId { get; }
}
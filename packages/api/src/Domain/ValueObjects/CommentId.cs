namespace Domain.ValueObjects;

public readonly struct CommentId : IEquatable<CommentId>
{
    public int Id { get; }

    public CommentId(int id)
    {
        Id = id;
    }

    public bool Equals(CommentId other)
    {
        return Id == other.Id;
    }

    public override bool Equals(object? obj)
    {
        return obj is CommentId o && Equals(o);
    }

    public static bool operator ==(CommentId left, CommentId right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(CommentId left, CommentId right)
    {
        return !left.Equals(right);
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Id);
    }

    public override string ToString()
    {
        return Id.ToString();
    }
}
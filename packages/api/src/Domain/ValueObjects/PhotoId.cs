namespace Domain.ValueObjects;

public readonly struct PhotoId : IEquatable<PhotoId>
{
    public string Id { get; }

    public PhotoId(string id)
    {
        Id = id;
    }

    public bool Equals(PhotoId other)
    {
        return Id == other.Id;
    }

    public override bool Equals(object? obj)
    {
        return obj is PhotoId o && Equals(o);
    }

    public static bool operator ==(PhotoId left, PhotoId right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(PhotoId left, PhotoId right)
    {
        return !left.Equals(right);
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Id);
    }

    public override string ToString()
    {
        return Id;
    }
}
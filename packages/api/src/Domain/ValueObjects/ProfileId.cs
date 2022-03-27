namespace Domain.ValueObjects;

public readonly struct ProfileId : IEquatable<ProfileId>
{
    public Guid Id { get; }

    public ProfileId(Guid id)
    {
        Id = id;
    }

    public bool Equals(ProfileId other)
    {
        return Id == other.Id;
    }

    public override bool Equals(object? obj)
    {
        return obj is ProfileId o && Equals(o);
    }

    public static bool operator ==(ProfileId left, ProfileId right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(ProfileId left, ProfileId right)
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
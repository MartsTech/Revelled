namespace Domain.ValueObjects;

public readonly struct EventId : IEquatable<EventId>
{
    public Guid Id { get; }

    public EventId(Guid id)
    {
        Id = id;
    }

    public bool Equals(EventId other)
    {
        return Id == other.Id;
    }

    public override bool Equals(object? obj)
    {
        return obj is EventId o && Equals(o);
    }

    public static bool operator ==(EventId left, EventId right)
    {
        return left.Equals(right);
    }

    public static bool operator !=(EventId left, EventId right)
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
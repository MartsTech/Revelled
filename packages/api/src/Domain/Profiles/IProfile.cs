namespace Domain.Profiles;

using Domain.ValueObjects;

public interface IProfile
{
    public ProfileId ProfileId { get; }
}
namespace Domain.Profiles;

using Domain.ValueObjects;

public sealed class ProfileNull : IProfile
{
    public ProfileId ProfileId => new(Guid.Empty);

    public static ProfileNull Instance { get; } = new();
}
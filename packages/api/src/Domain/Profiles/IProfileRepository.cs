namespace Domain.Profiles;

public interface IProfileRepository
{
    Task<IProfile> GetProfile(string externalUserId);
}
namespace Persistence.Repositories.Profiles;

using System.Threading.Tasks;
using Domain.Profiles;

public sealed class ProfileRepositoryFake : IProfileRepository
{
    private readonly DataContextFake _context;

    public ProfileRepositoryFake(DataContextFake context)
    {
        _context = context;
    }

    public async Task<IProfile> GetProfile(string externalUserId)
    {
        Profile? profile = _context
           .Profiles
           .SingleOrDefault(e => e.ExternalUserId == externalUserId);

        if (profile == null)
        {
            return ProfileNull.Instance;
        }

        return await Task.FromResult(profile)
            .ConfigureAwait(false);
    }
}
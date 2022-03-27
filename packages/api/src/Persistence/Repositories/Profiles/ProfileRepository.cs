namespace Persistence.Repositories.Profiles;

using System.Threading.Tasks;
using Domain.Profiles;
using Microsoft.EntityFrameworkCore;

public sealed class ProfileRepository : IProfileRepository
{
    private readonly DataContext _context;

    public ProfileRepository(DataContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task<IProfile> GetProfile(string externalUserId)
    {
        Profile? profile = await _context
            .Profiles
            .Where(e => e.ExternalUserId == externalUserId)
            .Select(e => e)
            .SingleOrDefaultAsync()
            .ConfigureAwait(false);

        if (profile is Profile findProfile)
        {
            await LoadPhotos(findProfile)
                .ConfigureAwait(false);

            return profile;
        };

        return ProfileNull.Instance;
    }

    private async Task LoadPhotos(Profile profile)
    {
        await _context
           .Photos
           .Where(e => e.ProfileId.Equals(profile.ProfileId))
           .ToListAsync()
           .ConfigureAwait(false);
    }
}
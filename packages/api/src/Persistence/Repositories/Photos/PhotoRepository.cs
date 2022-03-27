namespace Persistence.Repositories.Photos;

using System.Threading.Tasks;
using Domain.Photos;

public sealed class PhotoRepository : IPhotoRepository
{
    private readonly DataContext _context;

    public PhotoRepository(DataContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task AddPhoto(Photo photo)
    {
        await _context
            .Photos
            .AddAsync(photo)
            .ConfigureAwait(false);
    }
}
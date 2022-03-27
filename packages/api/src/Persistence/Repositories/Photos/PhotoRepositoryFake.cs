namespace Persistence.Repositories.Photos;

using Domain.Photos;

public sealed class PhotoRepositoryFake : IPhotoRepository
{
    private readonly DataContextFake _context;

    public PhotoRepositoryFake(DataContextFake context)
    {
        _context = context;
    }

    public async Task AddPhoto(Photo photo)
    {
        _context.Photos.Add(photo);

        await Task.CompletedTask
            .ConfigureAwait(false);
    }
}
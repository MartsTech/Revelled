namespace Domain.Photos;

using Domain.Profiles;

public interface IPhotoRepository
{
    Task AddPhoto(Photo photo);
}
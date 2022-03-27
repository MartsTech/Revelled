namespace Domain.Photos;

public sealed class PhotosCollection : List<Photo>
{
    public bool HasMainPhoto()
    {
        return this.Any(x => x.IsMain);
    }
}
namespace Domain.Photos;

public sealed class PhotosCollection : List<Photo>
{
    public bool HasMainPhoto()
    {
        return this.Any(x => x.IsMain);
    }

    public Photo? GetMainPhoto()
    {
        return this.FirstOrDefault(x => x.IsMain);
    }
}
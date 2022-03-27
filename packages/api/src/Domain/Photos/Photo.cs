namespace Domain.Photos;

using Domain.Profiles;
using Domain.ValueObjects;

public class Photo : IPhoto
{
    public Photo(PhotoId photoId, string url, ProfileId profileId, bool isMain)
    {
        PhotoId = photoId;
        Url = url;
        ProfileId = profileId;
        IsMain = isMain;
    }

    public PhotoId PhotoId { get; }

    public string Url { get; }

    public ProfileId ProfileId { get; }

    public Profile? Profile { get; }

    public bool IsMain { get; }
}
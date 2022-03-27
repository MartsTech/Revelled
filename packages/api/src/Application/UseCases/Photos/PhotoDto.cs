namespace Application.UseCases.Photos;

using Domain.Photos;

public sealed class PhotoDto
{
    public PhotoDto(Photo photo)
    {
        Id = photo.PhotoId.Id;
        Url = photo.Url;
        IsMain = photo.IsMain;
    }

    public string Id { get; }

    public string Url { get; }

    public bool IsMain { get; }
}
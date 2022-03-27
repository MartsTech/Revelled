namespace Application.UseCases.Photos;

public sealed class PhotoUploadResult
{
    public PhotoUploadResult(string publicId, string url)
    {
        PublicId = publicId;
        Url = url;
    }

    public string PublicId { get; }

    public string Url { get; }
}
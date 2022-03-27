namespace Infrastructure.Photos;

public sealed class CloudinarySettings
{
    public CloudinarySettings(
        string cloudName, string apiKey, string apiSecret)
    {
        CloudName = cloudName;
        ApiKey = apiKey;
        ApiSecret = apiSecret;
    }

    public string CloudName { get; }

    public string ApiKey { get; }

    public string ApiSecret { get; }
}
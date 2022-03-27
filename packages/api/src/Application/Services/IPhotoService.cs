namespace Application.Services;

using Application.UseCases.Photos;
using Microsoft.AspNetCore.Http;

public interface IPhotoService
{
    Task<PhotoUploadResult?> AddPhoto(IFormFile file);

    Task<string?> DeletePhoto(string publicId);
}
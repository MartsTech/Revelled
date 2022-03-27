namespace Application.UseCases.Photos.AddPhoto;

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

public sealed class AddPhotoInput
{
    [Required]
    public IFormFile? File { get; set; }
}
namespace Application.UseCases.Photos.AddPhoto;

using FluentValidation;

public sealed class AddPhotoInputValidator : AbstractValidator<AddPhotoInput>
{
    public AddPhotoInputValidator()
    {
        RuleFor(x => x.File).NotNull();
    }
}
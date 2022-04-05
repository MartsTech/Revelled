namespace Application.UseCases.Events.CreateEvent;

using FluentValidation;

public sealed class CreateEventInputValidator : AbstractValidator<CreateEventInput>
{
    public CreateEventInputValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(70);
        RuleFor(x => x.Description)
            .NotEmpty()
            .MaximumLength(256);
        RuleFor(x => x.Date)
            .NotEmpty();
        RuleFor(x => x.Category)
            .NotEmpty()
            .MaximumLength(30);
        RuleFor(x => x.City)
            .NotEmpty()
            .MaximumLength(30);
        RuleFor(x => x.Venue)
            .NotEmpty()
            .MinimumLength(30);
    }
}
namespace Application.UseCases.Events.UpdateEvent;

using FluentValidation;

public sealed class UpdateEventInputValidator : AbstractValidator<UpdateEventInput>
{
    public UpdateEventInputValidator()
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
            .MaximumLength(30);
    }
}
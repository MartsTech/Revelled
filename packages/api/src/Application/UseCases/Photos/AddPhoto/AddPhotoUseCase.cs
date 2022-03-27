namespace Application.UseCases.Photos.AddPhoto;

using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Services;
using Domain;
using Domain.Photos;
using Domain.Profiles;
using FluentValidation;
using MediatR;

public sealed class AddPhotoUseCase
{
    public class Command : IRequest<Result<PhotoDto>>
    {
        public Command(AddPhotoInput input)
        {
            Input = input;
        }

        public AddPhotoInput Input { get; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.Input).SetValidator(new AddPhotoInputValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<PhotoDto>>
    {
        private readonly IEntityFactory _entityFactory;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;
        private readonly IPhotoService _photoService;
        private readonly IProfileRepository _profileRepository;
        private readonly IPhotoRepository _photoRepository;

        public Handler(
            IEntityFactory entityFactory,
            IUnitOfWork unitOfWork,
            IUserService userService,
            IPhotoService photoService,
            IProfileRepository profileRepository,
            IPhotoRepository photoRepository)
        {
            _entityFactory = entityFactory;
            _unitOfWork = unitOfWork;
            _userService = userService;
            _photoService = photoService;
            _profileRepository = profileRepository;
            _photoRepository = photoRepository;
        }

        public async Task<Result<PhotoDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            string externalUserId = _userService
                .GetCurrentExternalUserId();

            IProfile profile = await _profileRepository
                .GetProfile(externalUserId)
                .ConfigureAwait(false);

            if (profile is not Profile findProfile)
            {
                return Result<PhotoDto>.NotFound();
            }

            var photoUploadResult = await _photoService
                .AddPhoto(request.Input.File!)
                .ConfigureAwait(false);

            if (photoUploadResult == null)
            {
                return Result<PhotoDto>.NotFound();
            }

            Photo photo = _entityFactory.NewPhoto(
                photoUploadResult.PublicId,
                photoUploadResult.Url,
                profile.ProfileId);

            bool success = await AddPhoto(photo, findProfile)
                .ConfigureAwait(false);

            return success
                ? Result<PhotoDto>.Success(new PhotoDto(photo))
                : Result<PhotoDto>.Failure("Failed to add the photo.");
        }

        private async Task<bool> AddPhoto(Photo photo, Profile profile)
        {
            if (!profile.Photos.HasMainPhoto())
            {
                photo.SetMain(true);
            }

            await _photoRepository.AddPhoto(photo)
                .ConfigureAwait(false);

            int changes = await _unitOfWork
                .Save()
                .ConfigureAwait(false);

            return changes > 0;
        }
    }
}
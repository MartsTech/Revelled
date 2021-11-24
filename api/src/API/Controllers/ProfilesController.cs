namespace API.Controllers
{
    public class ProfilesController : BaseApiController
    {
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new ProfileDetails.Query { Username = username }));
        }

        [HttpPut]
        public async Task<IActionResult> EditProfile(ProfileEdit.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }
    }
}

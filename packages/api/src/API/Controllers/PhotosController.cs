﻿namespace API.Controllers
{
    public class PhotosController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> AddPhoto([FromForm] PhotoAdd.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto(string id)
        {
            return HandleResult(await Mediator.Send(new PhotoDelete.Command { Id = id }));
        }

        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto(string id)
        {
            return HandleResult(await Mediator.Send(new PhotoSetMain.Command { Id = id }));
        }
    }
}

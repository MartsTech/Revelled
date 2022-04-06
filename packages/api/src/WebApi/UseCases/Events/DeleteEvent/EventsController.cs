namespace WebApi.UseCases.Events.DeleteEvent;

using System.ComponentModel.DataAnnotations;
using Application.UseCases.Events.DeleteEvent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;
using WebApi.Modules.Common.FeatureFlags;

[FeatureGate(CustomFeature.DeleteEvent)]
public sealed class EventsController : BaseApiController
{
    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<IActionResult> DeleteEvent(
        [FromRoute][Required] Guid id)
    {
        return HandleResult(await Mediator.Send(new DeleteEventUseCase.Command(id)));
    }
}
namespace WebApi.UseCases.Events.UpdateEvent;

using System.ComponentModel.DataAnnotations;
using Application.UseCases.Events.UpdateEvent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;
using WebApi.Modules.Common.FeatureFlags;

[FeatureGate(CustomFeature.UpdateEvent)]
public sealed class EventsController : BaseApiController
{
    [HttpPut("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UpdateEventResponse))]
    public async Task<IActionResult> UpdateEvent(
        [FromRoute][Required] Guid id,
        [FromForm][Required] UpdateEventInput input)
    {
        return HandleResult(await Mediator.Send(new UpdateEventUseCase.Command(id, input)));
    }
}
namespace WebApi.UseCases.Events.GetEvent;

using System.ComponentModel.DataAnnotations;
using Application.UseCases.Events.GetEvent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;
using WebApi.Modules.Common.FeatureFlags;

[FeatureGate(CustomFeature.GetEvent)]
public sealed class EventsController : BaseApiController
{
    [HttpGet("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GetEventResponse))]
    public async Task<IActionResult> GetEvent(
        [FromRoute][Required] Guid id)
    {
        return HandleResult(await Mediator.Send(new GetEventUseCase.Query(id)));
    }
}
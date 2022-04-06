namespace WebApi.UseCases.Events.CreateEvent;

using System.ComponentModel.DataAnnotations;
using Application.UseCases.Events.CreateEvent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;
using WebApi.Modules.Common.FeatureFlags;

[FeatureGate(CustomFeature.CreateEvent)]
public sealed class EventsController : BaseApiController
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(CreateEventResponse))]
    [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(CreateEventResponse))]
    public async Task<IActionResult> CreateEvent(
        [FromForm][Required] CreateEventInput input)
    {
        return HandleResult(await Mediator.Send(new CreateEventUseCase.Command(input)));
    }
}
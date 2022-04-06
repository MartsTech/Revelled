namespace WebApi.UseCases.Events.GetEvents;

using Application.UseCases.Events.GetEvents;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;
using WebApi.Modules.Common.FeatureFlags;

[FeatureGate(CustomFeature.GetEvents)]
public sealed class EventsController : BaseApiController
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GetEventsResponse))]
    public async Task<IActionResult> GetEvents()
    {
        return HandleResult(await Mediator.Send(new GetEventsUseCase.Query()));
    }
}
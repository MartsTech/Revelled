namespace API.Controllers
{
    public class EventsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetEvents([FromQuery] EventParams eventParams)
        {
            return HandlePagedResult(await Mediator.Send(new EventList.Query { Params = eventParams }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvent(Guid id)
        {
            return HandleResult(await Mediator.Send(new EventDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent(Event eventArgs)
        {
            return HandleResult(await Mediator.Send(new EventCreate.Command { Event = eventArgs }));
        }

        [Authorize(Policy = "IsEventHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditEvent(Guid id, Event eventArgs)
        {
            eventArgs.Id = id;
            return HandleResult(await Mediator.Send(new EventEdit.Command { Event = eventArgs }));
        }

        [Authorize(Policy = "IsEventHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(Guid id)
        {
            return HandleResult(await Mediator.Send(new EventDelete.Command { Id = id }));
        }

        [HttpPost("{id}/attend")]
        public async Task<IActionResult> AttendEvent(Guid id)
        {
            return HandleResult(await Mediator.Send(new EventUpdateAttendance.Command { Id = id }));
        }
    }
}
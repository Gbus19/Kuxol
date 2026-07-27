using System.Security.Claims;
using Kuxol.Api.DTOs;
using Kuxol.Api.Handlers.Events;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Kuxol.Api.Controllers;

[ApiController]
[Route("api/events")]
[Authorize]
public class EventsController : ControllerBase
{
    private readonly CreateEventHandler _createHandler;
    private readonly GetUserEventsHandler _getUserEventsHandler;
    private readonly GetEventHandler _getEventHandler;
    private readonly UpdateEventHandler _updateHandler;
    private readonly DeleteEventHandler _deleteHandler;

    public EventsController(
        CreateEventHandler createHandler,
        GetUserEventsHandler getUserEventsHandler,
        GetEventHandler getEventHandler,
        UpdateEventHandler updateHandler,
        DeleteEventHandler deleteHandler)
    {
        _createHandler = createHandler;
        _getUserEventsHandler = getUserEventsHandler;
        _getEventHandler = getEventHandler;
        _updateHandler = updateHandler;
        _deleteHandler = deleteHandler;
    }

    private Guid GetUserId()
    {
        var id = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrWhiteSpace(id))
            throw new UnauthorizedAccessException();

        return Guid.Parse(id);
    }

    [HttpPost]
    public async Task<ActionResult<EventResponse>> Create(
        CreateEventRequest request)
    {
        var result = await _createHandler.HandleAsync(
            GetUserId(),
            request);

        return Ok(result);
    }

    [HttpGet]
    public async Task<ActionResult<List<EventResponse>>> GetMine()
    {
        var result = await _getUserEventsHandler.HandleAsync(
            GetUserId());

        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<EventResponse>> Get(Guid id)
    {
        var result = await _getEventHandler.HandleAsync(
            id,
            GetUserId());

        if (result == null)
            return NotFound();

        return Ok(result);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<EventResponse>> Update(
        Guid id,
        UpdateEventRequest request)
    {
        var result = await _updateHandler.HandleAsync(
            id,
            GetUserId(),
            request);

        if (result == null)
            return NotFound();

        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var deleted = await _deleteHandler.HandleAsync(
            id,
            GetUserId());

        if (!deleted)
            return NotFound();

        return NoContent();
    }
}
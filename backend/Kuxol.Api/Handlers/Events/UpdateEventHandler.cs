using Kuxol.Api.DTOs;
using Kuxol.Api.Repositories;

namespace Kuxol.Api.Handlers.Events;

public class UpdateEventHandler
{
    private readonly EventRepository _repository;

    public UpdateEventHandler(EventRepository repository)
    {
        _repository = repository;
    }

    public async Task<EventResponse?> HandleAsync(
        Guid id,
        Guid userId,
        UpdateEventRequest request)
    {
        var ev = await _repository.GetByIdAsync(id);

        if (ev == null)
            return null;

        if (ev.UserId != userId)
            return null;

        ev.Name = request.Name;
        ev.Description = request.Description;
        ev.Type = request.Type;
        ev.StartDate = request.StartDate;
        ev.EndDate = request.EndDate;
        ev.Venue = request.Venue;
        ev.Status = request.Status;
        ev.UpdatedAt = DateTime.UtcNow;

        _repository.Update(ev);
        await _repository.SaveChangesAsync();

        return new EventResponse
        {
            Id = ev.Id,
            Name = ev.Name,
            Slug = ev.Slug,
            Description = ev.Description,
            Type = ev.Type,
            StartDate = ev.StartDate,
            EndDate = ev.EndDate,
            Venue = ev.Venue,
            Status = ev.Status,
            CreatedAt = ev.CreatedAt
        };
    }
}
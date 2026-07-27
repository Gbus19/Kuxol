using Kuxol.Api.DTOs;
using Kuxol.Api.Repositories;

namespace Kuxol.Api.Handlers.Events;

public class GetEventHandler
{
    private readonly EventRepository _repository;

    public GetEventHandler(EventRepository repository)
    {
        _repository = repository;
    }

    public async Task<EventResponse?> HandleAsync(Guid id, Guid userId)
    {
        var ev = await _repository.GetByIdAsync(id);

        if (ev == null)
            return null;

        if (ev.UserId != userId)
            return null;

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
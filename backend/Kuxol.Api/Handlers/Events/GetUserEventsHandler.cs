using Kuxol.Api.DTOs;
using Kuxol.Api.Repositories;

namespace Kuxol.Api.Handlers.Events;

public class GetUserEventsHandler
{
    private readonly EventRepository _repository;

    public GetUserEventsHandler(EventRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<EventResponse>> HandleAsync(Guid userId)
    {
        var events = await _repository.GetByUserAsync(userId);

        return events.Select(x => new EventResponse
        {
            Id = x.Id,
            Name = x.Name,
            Slug = x.Slug,
            Description = x.Description,
            Type = x.Type,
            StartDate = x.StartDate,
            EndDate = x.EndDate,
            Venue = x.Venue,
            Status = x.Status,
            CreatedAt = x.CreatedAt
        }).ToList();
    }
}
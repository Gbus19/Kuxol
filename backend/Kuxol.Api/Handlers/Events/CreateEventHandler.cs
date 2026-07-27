using System.Text.RegularExpressions;
using Kuxol.Api.DTOs;
using Kuxol.Api.Repositories;
using Kuxol.Domain.Entities;
using Kuxol.Domain.Enums;

namespace Kuxol.Api.Handlers.Events;

public class CreateEventHandler
{
    private readonly EventRepository _repository;

    public CreateEventHandler(EventRepository repository)
    {
        _repository = repository;
    }

    public async Task<EventResponse> HandleAsync(
        Guid userId,
        CreateEventRequest request)
    {
        if (request.StartDate > request.EndDate)
            throw new Exception("La fecha de inicio no puede ser mayor que la fecha final.");

        var slug = await GenerateUniqueSlug(request.Name);

        var entity = new Event
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Name = request.Name.Trim(),
            Slug = slug,
            Description = request.Description,
            Type = request.Type,
            StartDate = request.StartDate,
            EndDate = request.EndDate,
            Venue = request.Venue,
            Status = EventStatus.Draft,
            CreatedAt = DateTime.UtcNow
        };

        await _repository.AddAsync(entity);
        await _repository.SaveChangesAsync();

        return new EventResponse
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug,
            Description = entity.Description,
            Type = entity.Type,
            StartDate = entity.StartDate,
            EndDate = entity.EndDate,
            Venue = entity.Venue,
            Status = entity.Status,
            CreatedAt = entity.CreatedAt
        };
    }

    private async Task<string> GenerateUniqueSlug(string name)
    {
        var slug = name.Trim().ToLowerInvariant();

        slug = Regex.Replace(slug, @"[^a-z0-9\s-]", "");

        slug = Regex.Replace(slug, @"\s+", "-");

        slug = Regex.Replace(slug, "-+", "-");

        var original = slug;

        var counter = 1;

        while (await _repository.GetBySlugAsync(slug) != null)
        {
            slug = $"{original}-{counter}";
            counter++;
        }

        return slug;
    }
}
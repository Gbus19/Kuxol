using Kuxol.Domain.Enums;

namespace Kuxol.Api.DTOs;

public class EventResponse
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string? Description { get; set; }

    public EventType Type { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public string? Venue { get; set; }

    public EventStatus Status { get; set; }

    public DateTime CreatedAt { get; set; }
}
using System.ComponentModel.DataAnnotations;
using Kuxol.Domain.Enums;

namespace Kuxol.Api.DTOs;

public class CreateEventRequest
{
    [Required]
    [MaxLength(150)]
    public string Name { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    [Required]
    public EventType Type { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [MaxLength(200)]
    public string? Venue { get; set; }
}
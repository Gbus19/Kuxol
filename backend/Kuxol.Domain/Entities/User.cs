using System.Collections.Generic;

namespace Kuxol.Domain.Entities;

public class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; } = "";

    public string LastName { get; set; } = "";

    public string Email { get; set; } = "";

    public string PasswordHash { get; set; } = "";

    public bool EmailVerified { get; set; }

    public string? VerificationToken { get; set; }

    public string? ResetPasswordToken { get; set; }

    public DateTime? ResetPasswordExpires { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? LastLogin { get; set; }
    public string? RefreshToken { get; set; }

public DateTime? RefreshTokenExpiresAt { get; set; }



public string? EmailVerificationToken { get; set; }

public string? PasswordResetToken { get; set; }

public DateTime? PasswordResetExpiresAt { get; set; }
public ICollection<Event> Events { get; set; } = new List<Event>();

}
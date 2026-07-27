using Kuxol.Domain.Entities;

namespace Kuxol.Domain.Interfaces;

public interface IUserRepository
{
    Task<User?> GetByIdAsync(Guid id);

    Task<User?> GetByEmailAsync(string email);

    Task<User?> GetByRefreshTokenAsync(string refreshToken);

    Task<User?> GetByVerificationTokenAsync(string token);

    Task<bool> ExistsAsync(string email);

    Task AddAsync(User user);

    Task UpdateAsync(User user);

    Task SaveChangesAsync();
    Task<User?> GetByPasswordResetTokenAsync(string token);
}
using Kuxol.Domain.Entities;
using Kuxol.Domain.Interfaces;
using Kuxol.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Kuxol.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly KuxolDbContext _context;

    public UserRepository(KuxolDbContext context)
    {
        _context = context;
    }

    public async Task<User?> GetByIdAsync(Guid id)
    {
        return await _context.Users
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users
            .FirstOrDefaultAsync(x => x.Email == email);
    }

    public async Task<User?> GetByRefreshTokenAsync(string refreshToken)
    {
        return await _context.Users
            .FirstOrDefaultAsync(x => x.RefreshToken == refreshToken);
    }

    public async Task<User?> GetByVerificationTokenAsync(string token)
    {
        return await _context.Users
            .FirstOrDefaultAsync(x => x.EmailVerificationToken == token);
    }

    public async Task<bool> ExistsAsync(string email)
    {
        return await _context.Users
            .AnyAsync(x => x.Email == email);
    }

    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
    }

    public Task UpdateAsync(User user)
    {
        _context.Users.Update(user);

        return Task.CompletedTask;
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }

public async Task<User?> GetByPasswordResetTokenAsync(string token)
{
    return await _context.Users
        .FirstOrDefaultAsync(x => x.PasswordResetToken == token);
}

}
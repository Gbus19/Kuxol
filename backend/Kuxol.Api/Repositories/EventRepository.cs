using Kuxol.Domain.Entities;
using Kuxol.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Kuxol.Api.Repositories;

public class EventRepository
{
    private readonly KuxolDbContext _context;

    public EventRepository(KuxolDbContext context)
    {
        _context = context;
    }

    public async Task<List<Event>> GetByUserAsync(Guid userId)
    {
        return await _context.Events
            .Where(x => x.UserId == userId)
            .OrderByDescending(x => x.StartDate)
            .ToListAsync();
    }

    public async Task<Event?> GetByIdAsync(Guid id)
    {
        return await _context.Events
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Event?> GetBySlugAsync(string slug)
    {
        return await _context.Events
            .FirstOrDefaultAsync(x => x.Slug == slug);
    }

    public async Task AddAsync(Event entity)
    {
        await _context.Events.AddAsync(entity);
    }

    public void Update(Event entity)
    {
        _context.Events.Update(entity);
    }

    public void Delete(Event entity)
    {
        _context.Events.Remove(entity);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
using Kuxol.Api.Repositories;

namespace Kuxol.Api.Handlers.Events;

public class DeleteEventHandler
{
    private readonly EventRepository _repository;

    public DeleteEventHandler(EventRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> HandleAsync(Guid id, Guid userId)
    {
        var ev = await _repository.GetByIdAsync(id);

        if (ev == null)
            return false;

        if (ev.UserId != userId)
            return false;

        _repository.Delete(ev);
        await _repository.SaveChangesAsync();

        return true;
    }
}
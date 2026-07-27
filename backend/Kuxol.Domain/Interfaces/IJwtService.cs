
using Kuxol.Domain.Entities;

namespace Kuxol.Domain.Interfaces;

public interface IJwtService
{
    string GenerateToken(User user);
}
using Kuxol.Application.Auth.Dtos;
using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Auth.Me;

public class MeHandler
{
    private readonly IUserRepository _userRepository;

    public MeHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<MeResponse> HandleAsync(Guid userId)
    {
        var user = await _userRepository.GetByIdAsync(userId);

        if (user is null)
        {
            return new MeResponse
            {
                Success = false,
                Message = "Usuario no encontrado."
            };
        }

        return new MeResponse
        {
            Success = true,
            Message = "Usuario obtenido correctamente.",

            User = new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Plan = "Free"
            }
        };
    }
}
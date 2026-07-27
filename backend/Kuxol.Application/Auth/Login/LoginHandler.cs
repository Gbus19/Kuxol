using System.Security.Cryptography;
using Kuxol.Application.Auth.Dtos;
using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.Login;

public class LoginHandler
{
    private readonly IUserRepository _repository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtService _jwtService;

    public LoginHandler(
        IUserRepository repository,
        IPasswordHasher passwordHasher,
        IJwtService jwtService)
    {
        _repository = repository;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
    }

    public async Task<LoginResponse> Handle(LoginRequest request)
    {
        var user = await _repository.GetByEmailAsync(request.Email);

        if (user == null)
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Correo o contraseña incorrectos."
            };
        }

        var valid = _passwordHasher.Verify(
            request.Password,
            user.PasswordHash);

        if (!valid)
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Correo o contraseña incorrectos."
            };
        }

        // =====================================================
        // TEMPORAL
        // La verificación de correo está deshabilitada mientras
        // terminamos la integración con Amazon SES.
        // Cuando SES esté funcionando, simplemente descomenta
        // este bloque.
        // =====================================================
        //
        // if (!user.EmailVerified)
        // {
        //     return new LoginResponse
        //     {
        //         Success = false,
        //         Message = "Debes verificar tu correo electrónico antes de iniciar sesión."
        //     };
        // }

        user.LastLogin = DateTime.UtcNow;

        user.RefreshToken = GenerateRefreshToken();

        user.RefreshTokenExpiresAt =
            DateTime.UtcNow.AddDays(30);

        await _repository.UpdateAsync(user);

        await _repository.SaveChangesAsync();

        return new LoginResponse
        {
            Success = true,
            Message = "Inicio de sesión correcto.",

            Token = _jwtService.GenerateToken(user),

            RefreshToken = user.RefreshToken,

            User = new UserDto
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,

                // Temporal hasta implementar planes de suscripción.
                Plan = "Free"
            }
        };
    }

    private static string GenerateRefreshToken()
    {
        return Convert.ToBase64String(
            RandomNumberGenerator.GetBytes(64));
    }
}
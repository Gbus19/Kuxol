using System.Security.Cryptography;
using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.RefreshToken;

public class RefreshTokenHandler
{
    private readonly IUserRepository _repository;
    private readonly IJwtService _jwtService;

    public RefreshTokenHandler(
        IUserRepository repository,
        IJwtService jwtService)
    {
        _repository = repository;
        _jwtService = jwtService;
    }

    public async Task<RefreshTokenResponse> Handle(
        RefreshTokenRequest request)
    {
        var user =
            await _repository.GetByRefreshTokenAsync(
                request.RefreshToken);

        if (user == null)
        {
            return new RefreshTokenResponse
            {
                Success = false,
                Message = "Refresh Token inválido."
            };
        }

        if (user.RefreshTokenExpiresAt < DateTime.UtcNow)
        {
            return new RefreshTokenResponse
            {
                Success = false,
                Message = "Refresh Token expirado."
            };
        }

        user.RefreshToken = GenerateRefreshToken();

        user.RefreshTokenExpiresAt =
            DateTime.UtcNow.AddDays(30);

        await _repository.UpdateAsync(user);

        await _repository.SaveChangesAsync();

        return new RefreshTokenResponse
        {
            Success = true,
            Message = "Token actualizado.",

            Token = _jwtService.GenerateToken(user),

            RefreshToken = user.RefreshToken
        };
    }

    private static string GenerateRefreshToken()
    {
        return Convert.ToBase64String(
            RandomNumberGenerator.GetBytes(64));
    }
}
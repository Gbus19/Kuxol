using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.ResetPassword;

public class ResetPasswordHandler
{
    private readonly IUserRepository _repository;
    private readonly IPasswordHasher _passwordHasher;

    public ResetPasswordHandler(
        IUserRepository repository,
        IPasswordHasher passwordHasher)
    {
        _repository = repository;
        _passwordHasher = passwordHasher;
    }

    public async Task<ResetPasswordResponse> Handle(
        ResetPasswordRequest request)
    {
        var user =
            await _repository.GetByPasswordResetTokenAsync(
                request.Token);

        if (user == null)
        {
            return new ResetPasswordResponse
            {
                Success = false,
                Message = "Token inválido."
            };
        }

        if (user.PasswordResetExpiresAt < DateTime.UtcNow)
        {
            return new ResetPasswordResponse
            {
                Success = false,
                Message = "El enlace ha expirado."
            };
        }

        user.PasswordHash =
            _passwordHasher.Hash(request.Password);

        user.PasswordResetToken = null;

        user.PasswordResetExpiresAt = null;

        user.UpdatedAt = DateTime.UtcNow;

        await _repository.UpdateAsync(user);

        await _repository.SaveChangesAsync();

        return new ResetPasswordResponse
        {
            Success = true,
            Message = "Contraseña actualizada correctamente."
        };
    }
}
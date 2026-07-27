using System.Security.Cryptography;
using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.ForgotPassword;

public class ForgotPasswordHandler
{
    private readonly IUserRepository _repository;
    private readonly IEmailService _emailService;

    public ForgotPasswordHandler(
        IUserRepository repository,
        IEmailService emailService)
    {
        _repository = repository;
        _emailService = emailService;
    }

    public async Task<ForgotPasswordResponse> Handle(
        ForgotPasswordRequest request)
    {
        var user = await _repository.GetByEmailAsync(request.Email);

        if (user == null)
        {
            return new ForgotPasswordResponse
            {
                Success = true,
                Message = "Si el correo existe, recibirás instrucciones para restablecer tu contraseña."
            };
        }

        user.PasswordResetToken = GenerateToken();

        user.PasswordResetExpiresAt =
            DateTime.UtcNow.AddHours(1);

        await _repository.UpdateAsync(user);

        await _repository.SaveChangesAsync();

        await _emailService.SendPasswordResetEmailAsync(
            user.Email,
            user.FirstName,
            user.PasswordResetToken);

        return new ForgotPasswordResponse
        {
            Success = true,
            Message = "Si el correo existe, recibirás instrucciones para restablecer tu contraseña."
        };
    }

    private static string GenerateToken()
    {
        return Convert.ToBase64String(
            RandomNumberGenerator.GetBytes(64));
    }
}
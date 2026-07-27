using System.Security.Cryptography;
using Kuxol.Domain.Entities;
using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.Register;

public class RegisterHandler
{
    private readonly IUserRepository _repository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IEmailService _emailService;

    public RegisterHandler(
        IUserRepository repository,
        IPasswordHasher passwordHasher,
        IEmailService emailService)
    {
        _repository = repository;
        _passwordHasher = passwordHasher;
        _emailService = emailService;
    }

    public async Task<RegisterResponse> Handle(RegisterRequest request)
    {
        var exists = await _repository.GetByEmailAsync(request.Email);

        if (exists != null)
        {
            return new RegisterResponse
            {
                Success = false,
                Message = "El correo ya está registrado."
            };
        }

        var verificationToken =
            Convert.ToBase64String(
                RandomNumberGenerator.GetBytes(64));

        var user = new User
        {
            Id = Guid.NewGuid(),

            FirstName = request.FirstName,

            LastName = request.LastName,

            Email = request.Email,

            PasswordHash = _passwordHasher.Hash(request.Password),

            EmailVerified = false,

            EmailVerificationToken = verificationToken,

            IsActive = true,

            CreatedAt = DateTime.UtcNow,

            UpdatedAt = DateTime.UtcNow
        };

        await _repository.AddAsync(user);

        await _repository.SaveChangesAsync();

       // await _emailService.SendVerificationEmailAsync(
//     user.Email,
//     user.FirstName,
//     verificationToken);

        return new RegisterResponse
        {
            Success = true,
            Message = "Usuario registrado correctamente. Revisa tu correo para verificar tu cuenta."
        };
    }
}
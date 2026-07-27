using Kuxol.Domain.Interfaces;

namespace Kuxol.Application.Features.Auth.VerifyEmail;

public class VerifyEmailHandler
{
    private readonly IUserRepository _repository;

    public VerifyEmailHandler(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<VerifyEmailResponse> Handle(
        VerifyEmailRequest request)
    {
        var user =
            await _repository.GetByVerificationTokenAsync(request.Token);

        if (user == null)
        {
            return new VerifyEmailResponse
            {
                Success = false,
                Message = "Token inválido."
            };
        }

        user.EmailVerified = true;
        user.EmailVerificationToken = null;

        await _repository.UpdateAsync(user);
        await _repository.SaveChangesAsync();

        return new VerifyEmailResponse
        {
            Success = true,
            Message = "Correo verificado correctamente."
        };
    }
}
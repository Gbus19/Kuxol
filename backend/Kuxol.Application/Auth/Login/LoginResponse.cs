using Kuxol.Application.Auth.Dtos;

namespace Kuxol.Application.Features.Auth.Login;

public class LoginResponse
{
    public bool Success { get; set; }

    public string Message { get; set; } = "";

    public string Token { get; set; } = "";

    public string RefreshToken { get; set; } = "";

    public UserDto User { get; set; } = new();
}
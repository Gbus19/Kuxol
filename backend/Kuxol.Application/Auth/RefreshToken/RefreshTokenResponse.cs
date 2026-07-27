namespace Kuxol.Application.Features.Auth.RefreshToken;

public class RefreshTokenResponse
{
    public bool Success { get; set; }

    public string Message { get; set; } = "";

    public string Token { get; set; } = "";

    public string RefreshToken { get; set; } = "";
}
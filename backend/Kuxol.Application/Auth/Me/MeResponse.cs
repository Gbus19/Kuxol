using Kuxol.Application.Auth.Dtos;

namespace Kuxol.Application.Auth.Me;

public class MeResponse
{
    public bool Success { get; set; }

    public string Message { get; set; } = "";

    public UserDto User { get; set; } = new();
}
namespace Kuxol.Application.Features.Auth.Login;

public class LoginUserDto
{
    public Guid Id { get; set; }

    public string FirstName { get; set; } = "";

    public string LastName { get; set; } = "";

    public string Email { get; set; } = "";

    public string Plan { get; set; } = "Free";
}
using Kuxol.Domain.Settings;
using Kuxol.Domain.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Kuxol.Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly EmailSettings _settings;

    public EmailService(
        IOptions<EmailSettings> options)
    {
        _settings = options.Value;
    }

    public async Task SendVerificationEmailAsync(
        string email,
        string firstName,
        string token)
    {
        var verifyUrl =
            $"https://kuxol.com/api/auth/verify?token={token}";

        var message = new MimeMessage();

        message.From.Add(
            new MailboxAddress(
                _settings.Name,
                _settings.Email));

        message.To.Add(
            new MailboxAddress(
                firstName,
                email));

        message.Subject = "Verifica tu cuenta de Kuxol";

        message.Body = new TextPart("html")
        {
            Text = $@"
<!DOCTYPE html>

<html>

<body style='font-family:Arial;padding:40px;'>

<h2>Bienvenido a Kuxol</h2>

<p>Hola <b>{firstName}</b>.</p>

<p>Gracias por registrarte.</p>

<p>
Haz clic en el botón para verificar tu cuenta.
</p>

<p>

<a href='{verifyUrl}'
style='background:#6C63FF;
padding:14px 28px;
color:white;
text-decoration:none;
border-radius:8px;'>

Verificar correo

</a>

</p>

<p>
Si tú no creaste esta cuenta simplemente ignora este correo.
</p>

</body>

</html>"
        };

        using var smtp = new SmtpClient();

        await smtp.ConnectAsync(
            _settings.Host,
            _settings.Port,
            _settings.UseSSL
                ? SecureSocketOptions.StartTls
                : SecureSocketOptions.None);

        await smtp.AuthenticateAsync(
            _settings.Email,
            _settings.Password);

        await smtp.SendAsync(message);

        await smtp.DisconnectAsync(true);
    }


public async Task SendPasswordResetEmailAsync(
    string email,
    string firstName,
    string token)
{
    var resetUrl =
        $"https://kuxol.com/reset-password?token={token}";

    var message = new MimeMessage();

    message.From.Add(
        new MailboxAddress(
            _settings.Name,
            _settings.Email));

    message.To.Add(
        new MailboxAddress(
            firstName,
            email));

    message.Subject = "Restablece tu contraseña";

    message.Body = new TextPart("html")
    {
        Text = $@"
<!DOCTYPE html>

<html>

<body style='font-family:Arial;padding:40px;'>

<h2>Restablecer contraseña</h2>

<p>Hola <b>{firstName}</b>.</p>

<p>
Recibimos una solicitud para cambiar tu contraseña.
</p>

<p>

<a href='{resetUrl}'
style='background:#6C63FF;
padding:14px 28px;
color:white;
text-decoration:none;
border-radius:8px;'>

Restablecer contraseña

</a>

</p>

<p>
Este enlace expirará en 1 hora.
</p>

<p>
Si tú no realizaste esta solicitud simplemente ignora este correo.
</p>

</body>

</html>"
    };

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _settings.Host,
        _settings.Port,
        _settings.UseSSL
            ? SecureSocketOptions.StartTls
            : SecureSocketOptions.None);

    await smtp.AuthenticateAsync(
        _settings.Email,
        _settings.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}

}
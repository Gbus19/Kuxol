using Microsoft.AspNetCore.Mvc;

namespace Kuxol.Api.Controllers;

[ApiController]
[Route("api/health")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            success = true,
            message = "Kuxol API funcionando correctamente",
            version = "1.0.0"
        });
    }
}
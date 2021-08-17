using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Models.Auth;
using Core.Services.Contracts;
using Kadzura.Web.Extensions;

namespace Host.Controllers
{
    /// <summary>
    /// </summary>
    [Route("api/v{version:apiVersion}/auth")]
    [ApiVersion("1")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(AuthResponseDto), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        [AllowAnonymous]
        public async Task<ActionResult> Login([FromBody] AuthRequestDto requestDto)
        {
            return Ok(await _authService.Login(requestDto));
        }
    }
}

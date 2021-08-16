using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Kadzura.Auth.Extensions;
using Kadzura.Extensions.Filtration.Models;
using Common.Exceptions;
using Core.Models;
using Core.Models.Auth;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Web.Extensions;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Host.Controllers
{
    /// <summary>
    /// </summary>
    [Route("api/v{version:apiVersion}/Auth")]
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

        [HttpPost]
        [ProducesResponseType(typeof(AuthResponseDto), StatusCodes.Status200OK)]
        [ApiVersionRange(1)]
        [AllowAnonymous]
        public async Task<ActionResult> Login([FromBody] AuthRequestDto requestDto)
        {
            return Ok(await _authService.Login(requestDto));
        }
    }
}

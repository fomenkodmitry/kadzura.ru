using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Common.Configuration;
using Core.Helpers;
using Core.Models.Auth;
using Core.Services.Contracts;
using Database.Repository.Contracts;
using Kadzura.Auth.Extensions;
using Kadzura.Common.Exceptions;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Core.Services
{
    public class AuthService : IAuthService
    {
        private readonly IOptions<AuthConfigBase> _authConfig;
        private readonly IOptions<UserAdminConfig> _userAdminConfig;
        public AuthService(IOptions<AuthConfigBase> options, IOptions<UserAdminConfig> userAdminConfig)
        {
            _authConfig = options;
            _userAdminConfig = userAdminConfig;
        }

        public async Task<AuthResponseDto> Login(AuthRequestDto data)
        {
            var admin = (data.Login == _userAdminConfig.Value.Login && CryptoHelper.GetMd5Hash(data.Password) == _userAdminConfig.Value.Password);
            if (!admin)
                throw new AuthorizationException("Неверный логин или пароль");

            return new AuthResponseDto()
            {
                AuthToken = GenerateToken(data.Login, _authConfig.Value.Secret)
            };
        }
        
        private string GenerateToken(string userId, string secretKey)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, userId),
                }),
                Expires = DateTime.UtcNow.AddDays(365),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };


            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }
    }
}
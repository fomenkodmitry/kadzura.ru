using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Core.Helpers;
using Core.Models;
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
        private readonly IOptions<AuthConfigBase> _options;
        private readonly IAdminRepository _adminRepository;
        public AuthService(IOptions<AuthConfigBase> options, IAdminRepository adminRepository)
        {
            _options = options;
            _adminRepository = adminRepository;
        }

        public async Task<AuthResponseDto> Login(AuthRequestDto data)
        {
            var admin = await _adminRepository.GetByLoginPassword(data.Login, CryptoHelper.GetMd5Hash(data.Password));
            if (admin == null)
                throw new AuthorizationException("Неверный логин или пароль");

            return new AuthResponseDto()
            {
                AuthToken = GenerateToken(admin.AdminGuid, _options.Value.Secret)
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
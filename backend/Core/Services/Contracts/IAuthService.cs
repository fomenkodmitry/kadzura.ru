using System.Threading.Tasks;
using Core.Models.Auth;

namespace Core.Services.Contracts
{
    public interface IAuthService
    {
        Task<AuthResponseDto> Login(AuthRequestDto data);
    }
}
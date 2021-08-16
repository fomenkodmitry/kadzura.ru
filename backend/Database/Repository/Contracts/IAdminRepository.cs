using System.Threading.Tasks;
using Database.Models;

namespace Database.Repository.Contracts
{
    public interface IAdminRepository
    {
        Task<AdminModel> GetByLoginPassword(string login, string password);
    }
}
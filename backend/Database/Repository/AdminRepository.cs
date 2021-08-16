using System.Threading.Tasks;
using Database.Models;
using Database.Repository.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Database.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly Context _context;

        public AdminRepository(Context context)
        {
            _context = context;
        }

        public async Task<AdminModel> GetByLoginPassword(string login, string password)
        {
            return await _context.Admins.FirstOrDefaultAsync(p => p.Login == login && p.Password == password);
        }
    }
}
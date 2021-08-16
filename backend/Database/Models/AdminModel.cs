using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class AdminModel : EntityBase
    {
        public string AdminGuid { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
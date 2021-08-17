using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class AdminModel : EntityBaseModel
    {
        public string AdminGuid { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
using System;
using System.ComponentModel.DataAnnotations;
using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class EntityBaseModel
    {
        [Key]
        [Filters("id", FilterOperationsType.String)]
        public int Id { get; set; }

        public DateTimeOffset DateCreation { get; set; } = DateTimeOffset.UtcNow;
    }
}

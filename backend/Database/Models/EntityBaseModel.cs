using System;
using System.ComponentModel.DataAnnotations;
using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class EntityBaseModel
    {
        [Key]
        [Filters("id",FilterTypes.Numeric)]
        public int Id { get; set; }

        public DateTimeOffset DateCreation { get; set; } = DateTimeOffset.UtcNow;
    }
}

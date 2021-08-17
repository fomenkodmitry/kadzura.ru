using System;
using System.ComponentModel.DataAnnotations;

namespace Database.Models
{
    public class EntityBaseModel
    {
        [Key]
        public int Id { get; set; }

        public DateTimeOffset DateCreation { get; set; } = DateTimeOffset.UtcNow;
    }
}

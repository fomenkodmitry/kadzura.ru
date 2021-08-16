using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Database.Models
{
    public class EntityBase
    {
        [Key]
        public int Id { get; set; }

        public DateTimeOffset DateCreation { get; set; } = DateTimeOffset.UtcNow;
    }
}

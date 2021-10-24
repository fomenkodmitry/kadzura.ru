using System.Collections.Generic;
using Kadzura.Database.Filtration.Attributes;
using Kadzura.Database.Filtration.Enums;

namespace Database.Models
{
    public class ArticleModel : EntityBaseModel
    {
        [Filters("title", FilterTypes.String)]
        public string Title { get; set; }
        
        [Filters("text", FilterTypes.String)]
        public string Text { get; set; }

        [Filters("tags")]
        public ICollection<ArticleToTagsModel> Tags { get; set; }
    }
}
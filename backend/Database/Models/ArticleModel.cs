using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class ArticleModel : EntityBaseModel
    {
        public string Title { get; set; }
        public string Text { get; set; }

        [Filters("fulltext", FilterTypes.String)]
        public string FullText { get; set; }
        
        [Filters("tags")]
        public ICollection<ArticleToTagsModel> Tags { get; set; }
    }
}
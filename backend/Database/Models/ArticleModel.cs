using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class ArticleModel : EntityBaseModel
    {
        public string Title { get; set; }
        public string Text { get; set; }

        [Filters("fulltext", FilterOperationsType.String)]
        public string FullText { get; set; }
        public ICollection<ArticleToTagsModel> Tags { get; set; }
    }
}
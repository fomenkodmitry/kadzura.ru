using System.Collections.Generic;

namespace Database.Models
{
    public class ArticleModel : EntityBaseModel
    {
        public string Title { get; set; }
        public string Text { get; set; }

        public ICollection<ArticleToTagsModel> Tags { get; set; }
    }
}
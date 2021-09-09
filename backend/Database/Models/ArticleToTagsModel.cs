using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class ArticleToTagsModel
    {
        public int ArticleId { get; set; }
        public ArticleModel Article { get; set; }
        [Filters("tagId", FilterOperationsType.Numeric)]
        public int TagId { get; set; }
        public TagModel Tag { get; set; }
    }
}
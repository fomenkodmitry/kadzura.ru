using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class ArticleToTagsModel
    {
        public int ArticleId { get; set; }
        public ArticleModel Article { get; set; }
        [Filters("tagId", FilterTypes.Numeric)]
        public int TagId { get; set; }
        public TagModel Tag { get; set; }
    }
}
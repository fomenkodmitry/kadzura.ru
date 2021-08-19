namespace Database.Models
{
    public class ArticleToTagsModel
    {
        public int ArticleId { get; set; }
        public ArticleModel Article { get; set; }
        public int TagId { get; set; }
        public TagModel Tag { get; set; }
    }
}
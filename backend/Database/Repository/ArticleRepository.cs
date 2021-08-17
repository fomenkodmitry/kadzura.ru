using Database.Models;
using Database.Repository.Contracts;

namespace Database.Repository
{
    public class ArticleRepository : BaseRepository<ArticleModel>, IArticleRepository
    {
        public ArticleRepository(Context context) : base(context)
        {
        }
    }
}
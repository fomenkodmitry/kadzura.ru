using System.Linq;
using System.Threading.Tasks;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Extensions.Filtration.EntityFramework;
using Kadzura.Extensions.Pagination.EntityFramework;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Queries.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Database.Repository
{
    public class ArticleRepository : BaseRepository<ArticleModel>, IArticleRepository
    {
        public ArticleRepository(Context context) : base(context)
        {
        }
        
        public override async Task<PagedData<ArticleModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
        {
            var entity = _context.Set<ArticleModel>();
            var result = await entity
                .Include(p => p.Tags)
                    .ThenInclude(p => p.Tag)
                .Filter(filteredQuery)
                .OrderByDescending(p => p.Id)
                .ToPagedDataAsync(pagedQuery);
            
            return result;
        }
    }
}
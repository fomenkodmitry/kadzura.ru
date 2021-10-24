using System.Linq;
using System.Threading.Tasks;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Database.Filtration.EntityFramework;
using Kadzura.Database.Pagination.EntityFramework;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;

namespace Database.Repository
{
    public abstract class BaseRepository<TModel> : IBaseRepository<TModel> 
        where TModel : EntityBaseModel
    {
        protected readonly Context _context;

        protected BaseRepository(Context context)
        {
            _context = context;
        }

        public virtual async Task<PagedData<TModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
        {
            var entity = _context.Set<TModel>();
            var result = await entity
                .Filter(filteredQuery)
                .OrderByDescending(p => p.Id)
                .ToPagedDataAsync(pagedQuery);
            
            return result;
        }

        public async Task Create(TModel model)
        {
            _context.Set<TModel>().Add(model);
            await _context.SaveChangesAsync();
        }
    }
}
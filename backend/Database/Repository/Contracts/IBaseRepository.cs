using System.Threading.Tasks;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;

namespace Database.Repository.Contracts
{
    public interface IBaseRepository<TModel>
    {
        Task<PagedData<TModel>> GetList(IPagedQuery pagedQuery, string filteredQuery);
        Task Create(TModel model);
    }
}
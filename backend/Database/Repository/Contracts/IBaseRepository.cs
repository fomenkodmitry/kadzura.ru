using System.Threading.Tasks;
using Kadzura.Extensions.Filtration.Models.Contracts;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;

namespace Database.Repository.Contracts
{
    public interface IBaseRepository<TModel>
    {
        Task<PagedData<TModel>> GetList(IPagedQuery pagedQuery, IFilteredQuery filteredQuery);
        Task Create(TModel model);
    }
}
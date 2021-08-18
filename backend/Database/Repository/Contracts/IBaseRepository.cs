using System.Collections.Generic;
using System.Threading.Tasks;
using Kadzura.Extensions.Filtration.Models;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;

namespace Database.Repository.Contracts
{
    public interface IBaseRepository<TModel>
    {
        Task<PagedData<TModel>> GetList(IPagedQuery pagedQuery, IReadOnlyCollection<FilterContainer> filteredQuery);
        Task Create(TModel model);
    }
}
using System.Threading.Tasks;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Queries.Contracts;

namespace Core.Services.Contracts
{
    public interface IBaseCrudService<TModel, TDto>
    {
        Task<PagedData<TDto>> GetList(IPagedQuery pagedQuery, string filteredQuery);
        Task<TDto> Create(TModel model);
    }
}
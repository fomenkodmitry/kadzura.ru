using System;
using System.Threading.Tasks;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;

namespace Core.Services.Contracts
{
    public interface IBaseCrudService<TModel, TDto>
    {
        Task<PagedData<TDto>> GetList(IPagedQuery pagedQuery, string filteredQuery);
        Task<TDto> Create(TModel model);
        Task Delete(int id);
    }
}
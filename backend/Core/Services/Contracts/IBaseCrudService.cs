﻿using System.Threading.Tasks;
using Kadzura.Extensions.Filtration.Models.Contracts;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;

namespace Core.Services.Contracts
{
    public interface IBaseCrudService<TModel, TDto>
    {
        Task<PagedData<TDto>> GetList(IPagedQuery pagedQuery, IFilteredQuery filteredQuery);
        Task<TDto> Create(TModel model);
    }
}
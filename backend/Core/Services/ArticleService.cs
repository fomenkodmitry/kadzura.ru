﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Extensions.Filtration.Models;
using Kadzura.Extensions.Filtration.Models.Contracts;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;

namespace Core.Services
{
    public class ArticleService : IArticleService
    {
        private readonly IArticleRepository _articleRepository;

        public ArticleService(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        public async Task<PagedData<ArticleModel>> GetList(IPagedQuery pagedQuery, IReadOnlyCollection<FilterContainer> filteredQuery)
        {
            return await _articleRepository.GetList(pagedQuery, filteredQuery);
        }

        public async Task<ArticleModel> Create(ArticleModel model)
        {
            await _articleRepository.Create(model);
            return model;
        }
    }
}
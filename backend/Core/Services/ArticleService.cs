using System.Threading.Tasks;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;

namespace Core.Services
{
    public class ArticleService : IArticleService
    {
        private readonly IArticleRepository _articleRepository;

        public ArticleService(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        public async Task<PagedData<ArticleModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
        {
            return await _articleRepository.GetList(pagedQuery, filteredQuery);
        }

        public async Task<ArticleModel> Create(ArticleModel model)
        {
            await _articleRepository.Create(model);
            return model;
        }

        public async Task Delete(int id)
        {
            await _articleRepository.Delete(id);
        }
    }
}
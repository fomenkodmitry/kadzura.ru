using Database.Models;

namespace Core.Services.Contracts
{
    public interface IArticleService : IBaseCrudService<ArticleModel, ArticleModel>
    {
    }
}
using System.Threading.Tasks;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Queries.Contracts;

namespace Core.Services
{
    public class TagService : ITagService
    {
        private readonly ITagRepository _tagRepository;

        public TagService(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        public async Task<PagedData<TagModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
        {
            return await _tagRepository.GetList(pagedQuery, filteredQuery);
        }

        public async Task<TagModel> Create(TagModel model)
        {
            await _tagRepository.Create(model);
            return model;
        }
    }
}
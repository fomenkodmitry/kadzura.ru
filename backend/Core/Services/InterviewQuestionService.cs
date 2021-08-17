using System.Threading.Tasks;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Extensions.Filtration.Models.Contracts;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;

namespace Core.Services
{
    public class InterviewQuestionService : IInterviewQuestionService
    {
        private readonly IInterviewQuestionRepository _interviewQuestionRepository;

        public InterviewQuestionService(IInterviewQuestionRepository interviewQuestionRepository)
        {
            _interviewQuestionRepository = interviewQuestionRepository;
        }

        public async Task<PagedData<InterviewQuestionModel>> GetList(IPagedQuery pagedQuery, IFilteredQuery filteredQuery)
        {
            return await _interviewQuestionRepository.GetList(pagedQuery, filteredQuery);
        }

        public async Task<InterviewQuestionModel> Create(InterviewQuestionModel model)
        {
            await _interviewQuestionRepository.Create(model);
            return model;
        }
    }
}
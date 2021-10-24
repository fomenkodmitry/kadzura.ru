using System.Threading.Tasks;
using Core.Services.Contracts;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;

namespace Core.Services
{
    public class InterviewQuestionService : IInterviewQuestionService
    {
        private readonly IInterviewQuestionRepository _interviewQuestionRepository;

        public InterviewQuestionService(IInterviewQuestionRepository interviewQuestionRepository)
        {
            _interviewQuestionRepository = interviewQuestionRepository;
        }

        public async Task<PagedData<InterviewQuestionModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
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
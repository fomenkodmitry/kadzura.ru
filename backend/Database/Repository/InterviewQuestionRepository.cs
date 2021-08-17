using Database.Models;
using Database.Repository.Contracts;

namespace Database.Repository
{
    public class InterviewQuestionRepository : BaseRepository<InterviewQuestionModel>, IInterviewQuestionRepository
    {
        public InterviewQuestionRepository(Context context) : base(context)
        {
        }
    }
}
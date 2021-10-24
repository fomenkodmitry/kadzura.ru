using System.Linq;
using System.Threading.Tasks;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Database.Filtration.EntityFramework;
using Kadzura.Database.Pagination.EntityFramework;
using Kadzura.Database.Pagination.Models;
using Kadzura.Database.Pagination.Queries.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Database.Repository
{
    public class InterviewQuestionRepository : BaseRepository<InterviewQuestionModel>, IInterviewQuestionRepository
    {
        public InterviewQuestionRepository(Context context) : base(context)
        {
        }
        
        public override async Task<PagedData<InterviewQuestionModel>> GetList(IPagedQuery pagedQuery, string filteredQuery)
        {
            var entity = _context.Set<InterviewQuestionModel>();
            var result = await entity
                .Include(p => p.Tags)
                    .ThenInclude(p => p.Tag)
                .Filter(filteredQuery)
                .OrderByDescending(p => p.Id)
                .ToPagedDataAsync(pagedQuery);
            
            return result;
        }
    }
}
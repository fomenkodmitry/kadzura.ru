using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Database.Models;
using Database.Repository.Contracts;
using Kadzura.Extensions.Filtration.EntityFramework;
using Kadzura.Extensions.Filtration.Models;
using Kadzura.Extensions.Pagination.EntityFramework;
using Kadzura.Extensions.Pagination.Models;
using Kadzura.Extensions.Pagination.Models.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Database.Repository
{
    public class InterviewQuestionRepository : BaseRepository<InterviewQuestionModel>, IInterviewQuestionRepository
    {
        public InterviewQuestionRepository(Context context) : base(context)
        {
        }
        
        public override async Task<PagedData<InterviewQuestionModel>> GetList(IPagedQuery pagedQuery, IReadOnlyCollection<FilterContainer> filteredQuery)
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
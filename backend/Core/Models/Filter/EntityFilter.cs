using Kadzura.Database.Pagination.Queries;

namespace Core.Models.Filter
{
    public class EntityFilter
    {
        public string Filters { get; set; }
        public PagedQuery Paging { get; set; }
    }
}
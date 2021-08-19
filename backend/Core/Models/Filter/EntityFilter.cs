using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Models;
using Kadzura.Extensions.Pagination.Models;

namespace Core.Models.Filter
{
    public class EntityFilter
    {
        public IReadOnlyCollection<FilterContainer> Filters { get; set; }
        public PagedQuery Paging { get; set; }
    }
}
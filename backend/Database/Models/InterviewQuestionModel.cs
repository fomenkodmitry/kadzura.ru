using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class InterviewQuestionModel : EntityBaseModel
    {
        public string Question { get; set; }
        public string Answer { get; set; }

        [Filters("fulltext", FilterTypes.String)]
        public string FullText { get; set; }

        [Filters("tags")]
        public ICollection<InterviewQuestionToTagsModel> Tags { get; set; }
    }
}
using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class InterviewQuestionModel : EntityBaseModel
    {
        [Filters("question", FilterOperationsType.String)]
        public string Question { get; set; }
        [Filters("answer", FilterOperationsType.String)]
        public string Answer { get; set; }

        [Filters("tags")]
        public ICollection<InterviewQuestionToTagsModel> Tags { get; set; }
    }
}
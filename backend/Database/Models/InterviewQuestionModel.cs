using System.Collections.Generic;
using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class InterviewQuestionModel : EntityBaseModel
    {
        [Filters("question", FilterTypes.String)]
        public string Question { get; set; }
        
        [Filters("answer", FilterTypes.String)]
        public string Answer { get; set; }

        [Filters("tags")]
        public ICollection<InterviewQuestionToTagsModel> Tags { get; set; }
    }
}
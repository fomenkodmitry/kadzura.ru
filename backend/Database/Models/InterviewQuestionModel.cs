using System.Collections.Generic;
using Kadzura.Database.Filtration.Attributes;
using Kadzura.Database.Filtration.Enums;

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
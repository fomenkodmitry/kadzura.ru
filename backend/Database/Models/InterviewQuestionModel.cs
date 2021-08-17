using System.Collections.Generic;

namespace Database.Models
{
    public class InterviewQuestionModel : EntityBaseModel
    {
        public string Question { get; set; }
        public string Answer { get; set; }

        public ICollection<TagModel> Tags { get; set; }
    }
}
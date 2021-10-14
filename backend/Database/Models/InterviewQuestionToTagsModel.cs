using Kadzura.Extensions.Filtration.Attributes;
using Kadzura.Extensions.Filtration.Enums;

namespace Database.Models
{
    public class InterviewQuestionToTagsModel
    {
        public int InterviewQuestionId { get; set; }
        public InterviewQuestionModel InterviewQuestion { get; set; }

        [Filters("tagId", FilterTypes.Numeric)]
        public int TagId { get; set; }

        public TagModel Tag { get; set; }
    }
}
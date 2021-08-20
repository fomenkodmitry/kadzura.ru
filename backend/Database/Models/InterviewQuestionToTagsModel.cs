using Kadzura.Extensions.Filtration.Models;

namespace Database.Models
{
    public class InterviewQuestionToTagsModel
    {
        public int InterviewQuestionId { get; set; }
        public InterviewQuestionModel InterviewQuestion { get; set; }
        [Filters("tagId", FilterOperationsType.Numeric)]
        public int TagId { get; set; }
        public TagModel Tag { get; set; }
    }
}
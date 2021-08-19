namespace Database.Models
{
    public class InterviewQuestionToTagsModel
    {
        public int InterviewQuestionId { get; set; }
        public InterviewQuestionModel InterviewQuestion { get; set; }
        public int TagId { get; set; }
        public TagModel Tag { get; set; }
    }
}
namespace StudentFeedback.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Message {  get; set; }
    }
    public class FeedbackVM
    {
        public int Id { get; set; }
        public required string Student { get; set; }
        public required string Message { get; set; }
    }
}

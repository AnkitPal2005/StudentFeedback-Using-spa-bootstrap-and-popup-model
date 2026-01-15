namespace StudentFeedback.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Message {  get; set; }
    }
    public class FeedbackVM
    {
        public int Id { get; set; }
        public string StudentName { get; set; }
        public string Message { get; set; }
    }
}

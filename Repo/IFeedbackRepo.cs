using StudentFeedback.Models;
namespace StudentFeedback.Repo
{
    public interface IFeedbackRepo
    {
        void Add(Feedback feedback);
        
            List<Feedback> GetAll();
        void Delete(int id);
        Feedback GetById(int id);
        void Update(Feedback feedback);
    }
}

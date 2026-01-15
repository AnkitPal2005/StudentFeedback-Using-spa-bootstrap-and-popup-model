using Microsoft.AspNetCore.Mvc;
using StudentFeedback.Models;
using StudentFeedback.Repo;
namespace StudentFeedback.Controllers
{
    public class Feedbackcontroller : Controller
    {
        private readonly IFeedbackRepo _repo;
        public Feedbackcontroller(IFeedbackRepo repo)
        {
            _repo = repo;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GetById(int id)
        {
            var data= _repo.GetById(id);
            return Json(data);
        } 
        [HttpGet]
        public IActionResult GetAll()
        {
            var data = _repo.GetAll();
            return PartialView("_FeedbackList", data);
        }
        [HttpPost]
        public IActionResult Add(Feedback model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _repo.Add(model);
            return PartialView("_FeedbackList",_repo.GetAll());
        }
        [HttpPost]
        public IActionResult Update(Feedback model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _repo.Update(model);
            return PartialView("_FeedbackList", _repo.GetAll());
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return PartialView("_FeedbackList", _repo.GetAll());
        }
    }
}

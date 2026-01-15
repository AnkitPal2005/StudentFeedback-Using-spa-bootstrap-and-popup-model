using Dapper;
using StudentFeedback.Models;
using System.Data;
using Microsoft.Data.SqlClient;

namespace StudentFeedback.Repo
{
    public class FeedbackRepo:IFeedbackRepo
    {
        private readonly IConfiguration _configuration;
        public FeedbackRepo(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //DB Connection Helper
        private IDbConnection Connection()
        {
            return new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        }
        public Feedback GetById(int id)
        {
            using var con=Connection();
            string sql = @"Select * From Feedback Where Id=@id";
            return con.QueryFirstOrDefault<Feedback>(sql, new { Id=id });
        }
        public void Add(Feedback feedback)
        {
            using var con=Connection();
            string sql = @"Insert Into Feedback(Name,Message)Values(@Name,@Message)";
            con.Execute(sql, feedback);
        }
        public List<Feedback> GetAll()
        {
            using var con=Connection();
            string sql = @"Select * From Feedback Order By Name Asc";
            return con.Query<Feedback>(sql).ToList();
        }
        public void Delete(int id)
        {
            using var con=Connection();
            string sql = @"Delete From Feedback Where Id=@Id";
            con.Execute(sql, new { Id = id });
        }
        public void Update(Feedback feedback)
        {
            using var con=Connection();
            string sql = @"Update Feedback Set Name=@Name,Message=@Message Where ID=@Id";
            con.Execute(sql,feedback);
        }
    }
}

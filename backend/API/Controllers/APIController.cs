using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //Set route to api
    [Route("[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        //Bring in my repository
        private IMovieRepository _movieRepository;

        public APIController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        public IEnumerable<Movie> Get()
        {
            //When they do a get request grab all the movies that are edited and order them alphabetically by title
            return _movieRepository.Movies.Where(x=>x.Edited.ToLower()=="yes").OrderBy(x=>x.Title).ToArray();
        }
    }
}

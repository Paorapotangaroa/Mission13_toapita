namespace API.Models
{
    public interface IMovieRepository
    {
        //Define the template for a Movie Repository
        IQueryable<Movie> Movies {get;}
    }
}

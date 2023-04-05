namespace API.Models
{
    public class MovieRepository : IMovieRepository
    {
        //Inherit from IMovieRepository Interface
        private MoviesContext Context { get; set; }

        //Initialize the IQurieable using the context file
        public MovieRepository(MoviesContext context)
        {
            Context = context;
        }

        public IQueryable<Movie> Movies => Context.Movies;
    }
}

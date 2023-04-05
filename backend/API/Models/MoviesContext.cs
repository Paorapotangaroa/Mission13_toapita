using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API.Models
{
    public class MoviesContext : DbContext
    {
        //Create my Movies Context
        public MoviesContext() { }

        // Call parent constructor
        public MoviesContext(DbContextOptions<MoviesContext> options) : base(options) { }

        //Have an attribute that stores the movies as a DbSet.
        public DbSet<Movie> Movies { get; set;}

    }
}

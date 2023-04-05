using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    //Define the movies class
    public class Movie
    {
        [Key]
        [Required]
        public decimal MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public decimal Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}

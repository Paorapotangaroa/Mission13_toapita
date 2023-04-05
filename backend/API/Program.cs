using API.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MoviesContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("MainConnection"));
});

//Add Movie Repository to scope
builder.Services.AddScoped<IMovieRepository, MovieRepository>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//Allow traffic from localhost:3000

app.UseCors(p => p.WithOrigins("http://localhost:3000"));

app.Run();

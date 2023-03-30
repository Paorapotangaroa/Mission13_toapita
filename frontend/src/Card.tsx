import React from 'react'

//Adding a type so my intellisense works better
type Movie = {
    Category: String,
    Title: String,
    Year: Number,
    Director: String,
    Rating: String,
    Edited: String
}

// This card will be the card that holds each movie. I called it card because that makes sense in my mind for dividing up a page
const Card = (props:any) => {
    const movie:Movie = props.movie;
    // Return fragments so it doesn't break the table
    return (
        <>
            <td>{movie.Category}</td>
            <td>{movie.Title}</td>
            <td>{movie.Year.toString()}</td>
            <td>{movie.Director}</td>
            <td>{movie.Rating}</td>
            <td>{movie.Edited}</td>
        </>
    );
}

export default Card

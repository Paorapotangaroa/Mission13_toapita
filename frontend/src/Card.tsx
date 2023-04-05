import React from 'react'
import {Movie} from "./myComp"
//Adding a type so my intellisense works better


// This card will be the card that holds each movie. I called it card because that makes sense in my mind for dividing up a page
const Card = (props:any) => {
    const movie:Movie = props.movie;
    // Return fragments so it doesn't break the table
    return (
        <>
            <td>{movie.category}</td>
            <td>{movie.title}</td>
            <td>{movie.year.toString()}</td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td>{movie.edited}</td>
            <td>{movie.lentTo}</td>
        </>
    );
}

export default Card

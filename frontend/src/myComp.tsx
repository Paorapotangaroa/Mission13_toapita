import React, { useEffect, useState } from "react"
import Card from "./Card";

export type Movie = {
    category: String,
    director: String,
    edited: String,
    lentTo:String, 
    movieId:Number,
    notes: String,
    rating: String,
    title: String,
    year:Number
}

export default function CardList(){
    //Use state. I'm setting this array to be of type movie. This improves the intellesense and makes it easier to write code
    const [masterArray,setMasterArray] = useState<Movie[]>([]);
    //I'm also setting a boolean value that changes the state for a loaded attribute which stores either true or false if the api has been called
    const [loaded,setLoaded] = useState(false);

    //Using the use effect hook to call the api and set the masterArray = to the list of movies
    useEffect(() =>{
    fetch("https://localhost:4000/api").then(x=>{
        x.json().then(y=>{
            setMasterArray(y);
            setLoaded(true);
        })
    })}
    ,[]);

    //If it is loaded render a tag with table mapping each Movie into a card
    if(loaded){
    return (
        <>
        <div className="col">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Edited</th>
                    <th>Lent To</th>
                </tr>
            </thead>
        <tbody>
        {masterArray.map((x:Movie,index:Number) =>
            <tr key={x.movieId.toString()}>
                <Card key={x.movieId} movie={x} />
            </tr>
        )}
        </tbody>
        </table>
        </div>
        </>
    );
}else{
    //If it isn't loaded don't map the movies into the cards
    return <div>Loading...</div>
}
}
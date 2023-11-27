import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
    <h1> Movies</h1>
    {
     movies.map(({title,time,genres})=>{
      return(<div key={title}>
        <h3>{title}</h3>
        <p>{time}</p>
        <ul>{genres.map((genre,index)=>(<li key={index}>{genre}</li>))}</ul>
      </div>)
     }) 
    }
    
    </div>
  );
}

export default Movies;

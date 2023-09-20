import React, { useState } from "react";
// c94a5596
import { useEffect } from "react";
import './App.css';
import {BiSearchAlt2} from "react-icons/bi"
import MovieCard from "./MovieCard";
const API_URL="http://www.omdbapi.com?apikey=c94a5596"

const App=()=> {
 
    const[movies,setMovies]=useState([])
    const[searchTerm,setSearchTerm]=useState("")
  const searchMovie= async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
     searchMovie();
  },[])
  return (
    <div className="app">
      <h1> MoviePalace</h1>

      <div className="search">
            <input 
              placeholder="search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <BiSearchAlt2 size={40} onClick={() => searchMovie(searchTerm)}/>
            
      </div>
      {
        movies?.length>0
        ?(<div className="container">
        {movies.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
  </div>):(
    <div className="empty">
      <h2>  No movies found</h2>
    </div>
  )
      }
      
    </div>
  );
}

export default App;

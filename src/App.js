import React from "react";
// c94a5596
import { useEffect } from "react";
import './App.css';
import {BiSearchAlt2} from "react-icons/bi"
const API_URL="http://www.omdbapi.com?apikey=c94a5596"

const App=()=> {
  const movie1={"Poster"
    : "N/A",
    // "https://m.media-amazon.com/images/M/MV5BMDNmNDUwZGEtYmMxZS00NzU5LWEyMGMtOTRhNjBkNWNjNjMwXkEyXkFqcGdeQXVyNzA5MzMzNjk@._V1_SX300.jpg",
    "Title" :"A Love Undefined",
    "Type": "movie",
    "Year" : "2016",
    "imdbID" :"tt4955578"}
  const searchMovie= async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    console.log(data.Search);
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
              value="superman"
              onChange={()=>{}}
            />
            
            <BiSearchAlt2 size={40} onClick={()=>{

            }}/>
            
      </div>
      <div className="container">
            <div className="movie">
              <div>
                <p>{movie1.Year}</p>
              </div>
              <div>
                <img src={movie1.Poster !== 'N/A'?movie1.Poster:"https://via.placeholder.com/400"} alt={movie1.Title}/>
              </div>
              <div>
                  <span>{movie1.Type}</span>
                  <h3>{movie1.Title}</h3>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;

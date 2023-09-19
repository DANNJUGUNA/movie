import React from "react";
// c94a5596
import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'
const API_URL="http://www.omdbapi.com?apikey=c94a5596"

const App=()=> {
  const searchMovie= async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    console.log(data);
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
            <img
            src={}
            />
      </div>
    </div>
  );
}

export default App;

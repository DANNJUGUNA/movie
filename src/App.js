import React from "react";
// c94a5596
import { useEffect } from "react";
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
    <div>
      
    </div>
  );
}

export default App;

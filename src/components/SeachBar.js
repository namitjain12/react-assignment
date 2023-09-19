import React ,{useState} from 'react';
import './SeachBar.css';


import {FaSearch} from "react-icons/fa";

export const  SearchBar=({setResults})=>{
    const [input,setInput]= useState("");
    
    // const fetchData = (value)=>{
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US&query=${input}&page=1&include_adult=false`)
    //     .then((response)=>response.json())
    //     .then((jsonn)=>{
    //         const results = jsonn.filter((user)=>{
    //             return (user && user.title &&
    //              user.title.toLowerCase().includes(value)
    //             );
    //         });
    //         console.log(results);
    //     });

    // }
    const fetchData = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US&query=${input}&page=1&include_adult=false`)
          .then((response) => response.json())
          .then((jsonn) => {
            if (Array.isArray(jsonn.results)) { 
              const results = jsonn.results.filter((movie) => {
                return (
                  movie &&
                  movie.title && 
                  movie.title.toLowerCase().includes(value)
                );
              });
              setResults(results);
            } else {
              console.error('jsonn.results is not an array');
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      };
      
    const handleChange=(value)=>{
        setInput(value)
        fetchData(value)
    }
    return (<div className="topnav">
        <FaSearch id ="search-icon"/>
        <input placeholder="Type to search" value ={input}
        onChange={(e)=>handleChange(e.target.value)}/>
    </div>
    );
}
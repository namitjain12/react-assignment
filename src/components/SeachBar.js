import React, { useState } from 'react';
import './SeachBar.css';
import {useNavigate} from 'react-router-dom';



export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');
  const navigate =useNavigate();
  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US&query=${input}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonn) => {
       
          setResults(jsonn.results);
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const handleSearchClick=()=>{
//  localStorage.clear();
 navigate("/register")
  }

  const handleChange = (value) => {
    setInput(value);
     fetchData(value);
  };

  // const handleSearchClick = () => {
  //   fetchData(input); 
  // };

  return (
    <div className="search-container">

      <input className='search-input'
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      
      <button onClick={handleSearchClick}>Logout</button> 
    </div>
  );
};
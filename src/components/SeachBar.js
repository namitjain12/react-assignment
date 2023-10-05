import React, { useState } from 'react';
import './SeachBar.css';
import {useNavigate} from 'react-router-dom';



export const SearchBar = ({ setResults,updateAuth}) => {
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
  const handleLogout=()=>{
    updateAuth(false)
    console.log(updateAuth)
    localStorage.setItem("loggedin", false);
    localStorage.removeItem("isAuth");
    navigate("/register")

  }

  const handleChange = (value) => {
    setInput(value);
     fetchData(value);
  };
  const handleProfile =()=>{
    navigate("/profile")
  }

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
      
      <button className="btnprofile" onClick={handleProfile}>Profile</button> 
      <button className="btnprofile" onClick={handleProfile}>PassUpdate</button> 
      <button className="btnlogout"onClick={handleLogout}>Logout</button> 
    </div>
  );
};
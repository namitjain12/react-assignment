import {useState} from "react";
import './App.css';
import {SearchBar} from "./components/SeachBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results,setResults]= useState([]);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchBar setResults={setResults}/>} />
      <Route path="/movie-data" element={<SearchResultsList results={results}/>} />
      {/* Define other routes here */}
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
{/* <div className="App">
      <div className="search-bar-container"></div>
    
    < results={results}/>
    </div> */}
import { useState } from "react";

import  {SearchResultsList}  from "./SearchResultsList";
import { SearchBar } from "./SeachBar";

export function Main(){
    
    const [results, setResults] = useState([]);
    return(
        <>
 <SearchBar setResults={setResults} /> 
 <SearchResultsList results={results} />
 
      </>
    )
}
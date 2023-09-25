import { useState } from "react";

import  {SearchResultsList}  from "./SearchResultsList";
import { SearchBar } from "./SeachBar";

export function Main({updateAuth}){
    
    const [results, setResults] = useState([]);
    return(
        <>
 <SearchBar setResults={setResults} updateAuth={updateAuth} /> 
 <SearchResultsList results={results} />
 
      </>
    )
}
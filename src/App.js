import { useState } from "react";
import './App.css';

import { Register} from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { InvalidURL } from "./components/InvalidUrl";

function App() {

  const isAuthenticated =localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/home" 
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/main"
          element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<InvalidURL />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { useState } from "react";
// import './App.css';
// import { SearchBar } from "./components/SeachBar";
// import { SearchResultsList } from "./components/SearchResultsList";
// import { Register} from "./components/Register";
// import { Login } from "./components/Login";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Home} from "./components/Home";
// import {Main} from "./components/Main";
// function App() {
//   const [results, setResults] = useState([]);
 
//   return (
//     <Router>
      
//         <Routes>
//           <Route exact path="/" element={<Register/>}/>
//            <Route exact path="/home" element={<Home/>}/> 
//           <Route exact path="/login" element={<Login/>}/>
//           <Route exact path="/register" element={<Register/>}/>
//           <Route exact path="/main" element={<Main/>}/>
        
          
      
//         </Routes>      
//     </Router>
//      /* <SearchBar setResults={setResults} />
//       <SearchResultsList results={results} />  */
//   );
// }

// export default App;

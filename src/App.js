import { useState } from "react";
import './App.css';

import { Register} from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { InvalidURL } from "./components/InvalidUrl";
import { Profile } from "./components/Profile";
import { Profile_Password } from "./components/Profile_password";

function App() {

  // const isAuthenticated =localStorage.getItem("user");
  const [isAuth, setIsAuth] = useState(false);
  //console.log(isAuthenticatedd);
  const updateAuth =(value)=>{
     setIsAuth(value);
  }
  return (
    <Router>
      <Routes>
       
       {!isAuth?(
        <>
         <Route exact path="/register" element={<Register />} />
         <Route exact path="/login" element={ <Login updateAuth={updateAuth}  />} />
        <Route exact path="/" element={<Login/>} />
        {/* <Route exact path="/profile" element={<Profile />}   /> */}
        <Route exact path="/home" element={<Navigate to="/login" />  } />           
        <Route exact path="/main" element={ <Navigate to="/login" /> } />       
        <Route path="*" element={ <Navigate to="/login" />} />
        </>
       ): (
        <>
        <Route exact path="/home" element={<Home updateAuth={updateAuth} /> } />           
        <Route exact path="/main" element={ <Main updateAuth={updateAuth}/> } />  
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/updatepassword" element={<Profile_Password />} />
        <Route path="*" element={<InvalidURL />} />
        </>
        )
       }
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

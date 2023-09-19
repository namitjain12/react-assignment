
// import {useState } from "react";
// import "./register.css";
// import { useNavigate } from "react-router-dom";
// export  function Register() {
//   const navigate =useNavigate();
//    const [input,setInput]= useState({
//     name: "",
//     email:"",
//     password:"",
//     confirmpassword:""
//    }) ;
//    const inputs=JSON.parse(localStorage.getItem("user")|| "[]")
//       // to store value in local storage

//       const handleSubmit = (e) => {
//         e.preventDefault();
      
//         // Basic validation
//         if (!input.name || !input.email || !input.password || !input.confirmpassword) {
//           alert('Please fill in all fields');
//           return;
//         }
      
//         // Additional validation for email format
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         if (!emailPattern.test(input.email)) {
//           alert('Invalid email address');
//           return;
//         }
      
//         // Check if password and confirm password match
//         if (input.password !== input.confirmpassword) {
//           alert('Password and confirm password do not match');
//           return;
//         }
//         inputs.push(input)
      
//         // Now, you can proceed with form submission
//         // localStorage.setItem("user", JSON.stringify(input));
//         localStorage.setItem("user", JSON.stringify(inputs));
//         navigate("/login");
//       };
      
//       const handlelogin=(e)=>{
//         e.preventDefault();
//         navigate("/login")
//       }
  
import { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // Initialize inputs from localStorage or as an empty array
  const savedInputs = JSON.parse(localStorage.getItem("user")) || [];

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(savedInputs));
  }, [savedInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!input.name || !input.email || !input.password || !input.confirmpassword) {
      alert('Please fill in all fields');
      return;
    }

    // Additional validation for email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(input.email)) {
      alert('Invalid email address');
      return;
    }

    // Check if password and confirm password match
    if (input.password !== input.confirmpassword) {
      alert('Password and confirm password do not match');
      return;
    }

    // Add the new input to the existing array
    const updatedInputs = [...savedInputs, input];

    // Now, you can proceed with form submission
    localStorage.setItem("user", JSON.stringify(updatedInputs));
    navigate("/login");
  };

  const handlelogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Movie Tracker</h3>
          <span className="loginDesc">
            Find any Movie
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
          <input 
            name="name"
            value={input.name}
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
            type="text" placeholder="Username" className="loginInput"/>
           <input
            name="email"
            value={input.email}
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
            placeholder="Email" className="loginInput" />
            <input
            name="password"
            type="password"
            value={input.password}
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
             placeholder="Password" className="loginInput" />
             <input
            name="confirmpassword"
            type="password"
            value={input.confirmpassword}
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
             placeholder="Confirm Password" className="loginInput" /> 
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            
          </form>
          <button className="loginRegisterButton"onClick={handlelogin}>Log into Account</button>
        </div>
      </div>
    </div>
  );
 
}
// return (
  //      <form onSubmit={handleSubmit}>
        
  //       <div className="heading-top">
  //      <div className="heading">
  //       <h1>Sign-Up Page</h1>
  //    </div>
     
  //      <div className="login-form">
  //           <input 
  //           name="name"
  //           value={input.name}
  //           onChange={(e)=>
  //             setInput({
  //               ...input,
  //               [e.target.name]:e.target.value,
  //             })
  //           }
  //           type="text" placeholder="Username" className="loginInput1"/>
  //           <input
  //           name="email"
  //           value={input.email}
  //           onChange={(e)=>
  //             setInput({
  //               ...input,
  //               [e.target.name]:e.target.value,
  //             })
  //           }
  //           placeholder="Email" className="loginInput1" />
  //           <input
  //           name="password"
  //           value={input.password}
  //           onChange={(e)=>
  //             setInput({
  //               ...input,
  //               [e.target.name]:e.target.value,
  //             })
  //           }
  //            placeholder="Password" className="loginInput1" />

  //           <button className="loginButton1" >Sign Up</button>
           
            
  //           </div>
  //           </div>  
                     
  //           </form>
      
  // );
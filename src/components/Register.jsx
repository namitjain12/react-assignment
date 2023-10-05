
  
import { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { mail } from 'ionicons/icons';
import { lockClosed } from 'ionicons/icons';
import { FaMailBulk} from "react-icons/fa";
import {FaLock} from "react-icons/fa";


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

   
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(loggeduser.find((obj) => obj.email === input.email))
    alert("email already exist");
  else{
    const updatedInputs = [...savedInputs, input];
    localStorage.setItem("user", JSON.stringify(updatedInputs));
    navigate("/login");
  }
  };

  // const handlelogin = (e) => {
  //   e.preventDefault();
  //   navigate("/login");
  // };

  return (
    <div className="body1">
      <div className="wrapper">
      <div className="form-box login">
      <h2 className="loginLogo">MovieTracker</h2>  
    <form  onSubmit={handleSubmit}>                      
          
         <div className="input-box">
          <span className="icon">
          <FaMailBulk /> 
          <ion-icon name={mail}></ion-icon>
         
          </span>
          
            <input 
              name="name"
              type="name"
              required
              value={input.name}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }             
              
            />
            <label>User-Name</label>
            </div>

            <div className="input-box">
          <span className="icon">
          <FaMailBulk /> 
          <ion-icon name={mail}></ion-icon>
         
          </span>
          
            <input 
              name="email"
              type="email"
              required
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }             
              
            />
            <label>Email</label>
            </div>

            <div className="input-box">
          <span className="icon">
          <FaMailBulk /> 
          <ion-icon name={mail}></ion-icon>
         
          </span>
          
            <input 
              name="password"
              type="password"
              required
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }             
              
            />
            <label>Password</label>
            </div>


            <div className="input-box">
            <span className="icon">
            <FaLock /> 
            </span>            
            <input 
              name="confirmpassword"
              required
              type="password"
              value={input.confirmpassword}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }        
              
            />
            <label>ConfirmPassword</label>
            </div>
            <div className="remember-forgot">
              <label> <input type="checkbox"/>Remember Me</label>
              <a href="#" >Forget password?</a>
            </div>
            <button type="submit" className="btn">
              SignUp
            </button>
            <div className="login-register">
               <p> Already have an account?<a href="/login" 
               className="register-link"> Login</a>
               </p>
            </div>
          
        
      
    </form>
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
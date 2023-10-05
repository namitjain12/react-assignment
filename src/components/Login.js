import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mail } from 'ionicons/icons';
import { lockClosed } from 'ionicons/icons';
import { FaMailBulk} from "react-icons/fa";
import {FaLock} from "react-icons/fa";



export function Login({updateAuth}) {  
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
      const isAuth = loggeduser.find((obj) => obj.email === input.email);
    console.log(isAuth);
    if (isAuth?.password ===  input.password) {
      localStorage.setItem("isAuth", JSON.stringify(isAuth));

      updateAuth(true);
      
      navigate("/home");
    } else alert("Wrong credential");
  };
  return (
    
    <div className="body1">
      <div className="wrapper">
      <div className="form-box login">
      <h2 className="loginLogo">MovieTracker</h2>  
    <form onSubmit={handleLogin} >                      
          
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
            <FaLock /> 
            </span>            
            <input 
              name="password"
              required
              type="password"
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
            <div className="remember-forgot">
              <label> <input type="checkbox"/>Remember Me</label>
              <a href="#" >Forget password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
               <p> Don't have an account?<a href="/register" 
               className="register-link"> Register</a>
               </p>
            </div>
          
        
      
    </form>
    </div>
    </div>
    </div>
  );
}
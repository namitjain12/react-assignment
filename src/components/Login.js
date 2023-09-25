import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




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
    <form onSubmit={handleLogin} className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MovieTracker</h3>
          <div className="loginDesc">Filter your favourite Movie here...</div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              name="email"
              type="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Email"
              className="loginInput"
            />
            <input
              name="password"
              type="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Password"
              className="loginInput"
            />
            <a href="/register">New member? Click here to sign in</a>
            <button type="submit" className="loginButton">
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
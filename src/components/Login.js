import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Func = () => {};

export function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    const isAuth =
      loggeduser.find((obj) => obj.email === input.email).password ===
      input.password;
    if (isAuth) {
      localStorage.setItem("loggedin", true);
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
            <button type="submit" className="loginButton">
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
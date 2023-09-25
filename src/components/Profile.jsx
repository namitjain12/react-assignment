import React  from "react"
import { json } from "react-router-dom";
import { useState } from "react";
import "./Profile.css"
export function Profile() {
 const[input,setInput]= useState(JSON.parse(localStorage.getItem('isAuth')));

 const[valueDisabled,setValueDisabled]=useState(true);
 const [confirmPassword, setConfirmPassword] = useState("");
 
 const handleValueDisabled=()=>{
    setValueDisabled(false);
 }
 const handleProfile =(e)=>{
  e.preventDefault();

  if (input.password !== input.confirmpassword) {
    alert('Password and confirm password do not match');
    return;
  }

   localStorage.setItem("isAuth",JSON.stringify(input))
   const allUsers= JSON.parse(localStorage.getItem('user'));
   for(let i=0;i<allUsers.length;i++){
    if(allUsers[i].email === input.email){
    allUsers[i]={...input};
    }
   }
   localStorage.setItem('user', JSON.stringify(allUsers));
       setValueDisabled(true)
 }


return(
    <div className="formWrapper">
    <form onSubmit={handleProfile} >
    <div className="loginWrapper1">
          <div className="loginBox1">
          <div className="field1">
          <label> Name</label>
          <input
              name="name"
              type="name"
              value={input.name}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Name"
              className="loginInput"
              disabled= {valueDisabled}
            />
          </div>     
            
            <div className="button">
            <button type="button" className="loginButton1"
            onClick={handleValueDisabled}>
              Edit Details
            </button>
            <button type="submit" className="loginButton1"
            onClick={handleProfile}>
              Update Profile
            </button>
            </div>
          </div>
        
      </div>
      </form>
      </div>
)
}
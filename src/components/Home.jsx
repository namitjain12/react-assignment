import React from "react";
import { useNavigate } from "react-router-dom";
export  function Home(){
    const navigate =useNavigate();
    const handleclick=()=>{
        navigate("/main")
    }
    return (

        <>
        <h1>Welcome to home page </h1>
        <button onClick={handleclick}>CLick Here </button>
        </>
    )
}
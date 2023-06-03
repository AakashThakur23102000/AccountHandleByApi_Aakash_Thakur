import axios from 'axios';
import React, { useState } from 'react'
import "../components/UI/Form.css"

function Form(props) {
    //states
    var [names,setNames] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState(""); 

    //functions
    function buttonSubmitHandler(e){
        e.preventDefault();
        if(names==="" || email===""  || password === ""){
            alert("Enter all values correctly")
        }else{
            var user_obj = {
                user_name : names,
                user_email : email,
                user_password : password
            }
            axios.post("https://backendapibyaakash.onrender.com/accounts",user_obj)
            .then(()=>{console.log("Data sent to API");props.usr();setNames("");setEmail("");setPassword("");}).catch(()=>{"Unable to send Data to API"})
        }
    }

    return (
        <form className='main_form'>
            <label>Enter your Name - </label>
            <input type="text" placeholder='Enter your name' value={names} onChange={(e)=>{setNames(e.target.value)}}></input>
            <br></br>
            <br></br>
            <label>Enter your Email - </label>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br></br>
            <br></br>
            <label>Enter your Password - </label>
            <input type="password" placeholder='Enter your name' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <br></br>
            <br></br>
            <button type='submit' onClick={(e)=>{buttonSubmitHandler(e)}}>Submit</button>
        </form>
    )
}

export default Form
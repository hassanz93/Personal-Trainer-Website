import React, { useState, useContext } from 'react';
import {useNavigate, Link } from "react-router-dom";
import "../css/Signin.css";
import axios from "axios";
import AuthContext from "../services/AuthContext";
import { ReactSession } from 'react-client-session';

// import Backend from '../services/Backend';

const AlertStyle ={
  display: "none"
}

function Signin() {

  const [user, setUser] = useState({
     
    email : "",
    password : "",
})

ReactSession.setStoreType("localStorage");
const [errorMessage, setErrorMessage] = useState('');

const [className, setClassName] = useState('');

const {getLoggedIn} = useContext(AuthContext);
const navigate = useNavigate();

const handleChange = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})
}

const handleSubmit = e =>{
    e.preventDefault()
    
  
    const userData = {
      email: user.email,
      password: user.password,
    };

    ReactSession.set("email", user.email);

    axios
      .post("http://localhost:5000/users/login", userData)
      .then((response) => {
        console.log(response.status)

        if(response.status === 200 ){
          setErrorMessage(("Logged In successfully"));
          setClassName("alert alert-success");
          document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
          getLoggedIn();
          navigate("/");
        }

      }).catch((error) => {
     if( error.response.status === 400){ 
           console.log(error.response.data.message);
        setErrorMessage((error.response.data.message));
        setClassName("alert alert-danger")
        document.getElementsByClassName("alert alert-danger")[0].style.display = 'block';
      } 
   
      });

    console.log(userData);
   
  };


  return (
    <div className="signin-card">
    <img className='signin-img' src={window.location.origin + '/doSome.png'} alt='Sign In'></img>
    <div className="signin-card2">
        <div className='signin-Title'>Login</div>
        <div className='signin-Text'>Those who educate children well<br></br> are more to be honored than they who produce them.<br></br></div>
        <div className={className} style={AlertStyle} role="alert">{errorMessage} </div>
        <form className="signin-form" onSubmit={handleSubmit} >
            <input className="signin-Input" type="email" id="register-email" name="email" placeholder='Enter your email'  onChange={handleChange} value={user.email}></input>
            <input className="signin-Input" type="password" id="register-password" name="password" placeholder='********' onChange={handleChange} value={user.password}></input>
        <div className='signin-ligne'>
                <input className='signin-join-Now' type='submit' value="Login" />
                <div className='singn-register-block'>Don't have an account? <br></br><Link className='sign-register-link' to={"/Register"}>Please Register </Link> </div>
            </div>
            </form>
    </div>
</div>
  )
}

export default Signin
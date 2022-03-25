import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
// import AuthContext from "../services/AuthContext";
import axios from "axios";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [errorMessage, setErrorMessage] = useState('');

    const [className, setClassName] = useState('');


    // const {getLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()


        const userData = {
            email: user.email,
            password: user.password,
        };

        axios
            .post("http://localhost:5000/users/login", userData)
            .then((response) => {
                console.log(response.status)

                if (response.status === 200) {
                    setErrorMessage(("Logged In successfully"));
                    setClassName("alert alert-success");
                    document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
                    // getLoggedIn();
                    navigate("/");
                }

            }).catch((error) => {
                if (error.response.status === 400) {
                    console.log(error.response.data.message);
                    setErrorMessage((error.response.data.message));
                    setClassName("alert alert-danger")
                    document.getElementsByClassName("alert alert-danger")[0].style.display = 'block';
                }

            });

        console.log(userData);

    };
    return (
        <div className="login-card">
            <form onSubmit={handleSubmit}>
                <div role="alert" className={className}>{errorMessage}</div>
                <img className='login-img-home' src={window.location.origin + '/homeLoginImgpng.png'} alt='video call tutorial'></img>
                <div className="login-card2">
                    <div className='login-Title'>Join your live class with your instructor via video call</div>
                    <div className='login-Text'>Those who educate children well are more to be<br></br> honored than they who produce them.<br></br>for these only gave them life.</div>
                    <form className="form" >
                        <input className="login-Input" type="email" id="login-email" name="email" onChange={handleChange} value={user.email} placeholder='Enter your email'></input>
                        <input className="login-Input" type="password" id="login-password" name="password" onChange={handleChange} value={user.password} placeholder='********' ></input>
                    </form>
                    <div className='ligne'>
                        <div className='join-Now' type='submit'>Join Now</div>
                        <div className='register-block'>Don't have an account? <br></br><Link className='register-link' to={"/Register"}>Please Register </Link> </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login
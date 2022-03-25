import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from "react-bootstrap"
import AuthContext from "../services/AuthContext";
import '../css/Navbar.css'
import LogOutBtn from "./Logout";

function Navbar() {
    const [show, handleShow] = useState(false);
    const { loggedIn } = useContext(AuthContext);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (

        <div>
            <Nav className={`nav ${show && 'nav_wood'}`} defaultSelected="Home">
                <NavItem eventKey="Logo">
                    <Link to={"/"} className='logo'>
                    <img style={{marginTop: "25px"}} width='200px' height='auto' src={window.location.origin +"/logo tutomania 4-01 - Copy.png"}></img>
                    </Link>
                </NavItem>
                <div className='nav-components'>
                    <NavItem eventKey="Home">
                        <Link to={"/"} className="nav-items">
                            <span>Home</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Skills">
                        <Link to={"/tutorials"} className="nav-items">
                            <span>Tutorials</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Category">
                        <Link to={"/category"} className="nav-items">
                            <span>Category</span>
                        </Link>
                    </NavItem>
                    {loggedIn === false && (
                        <NavItem eventKey="Login">
                            <Link to={"/login"} className="nav-items">
                                <span>Login</span>
                            </Link>
                        </NavItem>
                    )}
                    {loggedIn === true && (
                        <NavItem eventKey="Logout">
                            <Link to={"/logout"} className="nav-items">
                                <span><LogOutBtn /></span>
                            </Link>
                        </NavItem>
                    )}
                </div>
                {loggedIn === false && (
                    <NavItem eventKey="register">
                        <Link to={"/register"} style={{ textDecoration: "none" }}>
                            <div className={`register ${show && 'register_wood'}`}>
                                <span style={{ marginRight: "50px" }}>Register</span>
                                <img width='24px' height='24px' src={window.location.origin + '/avatar.png'}></img>
                            </div>
                        </Link>
                    </NavItem>
                )}
                {loggedIn === true && (
                    <NavItem eventKey="register">
                        <Link to={"/profile"} style={{ textDecoration: "none" }}>
                            <div className={`register ${show && 'register_wood'}`}>
                                <span style={{ marginRight: "50px" }}>Profile</span>
                                <img width='24px' height='24px' src={window.location.origin + '/avatar.png'}></img>
                            </div>
                        </Link>
                    </NavItem>
                )}
            </Nav>
        </div >
    )
}

export default Navbar
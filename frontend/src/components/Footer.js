import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { NavItem } from "react-bootstrap";
import "../css/Footer.css";
import Facebook from "../photos/Facebook.png";
import Instagram from "../photos/Instagram.png";
import WhatsApp from "../photos/WhatsApp.png";
import Youtube from "../photos/Youtube.png";



function Footer() {

    const displayFooter = () => {
        return (
            <>
                <div className="CompanyName">
                    <h3 className="CompanyName--title">TUTO MANIA</h3>
                    <p className="CompanyName--body">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="Soultions">
                    <h3 className="Solutions--title">SOLUTIONS</h3>
                    <div className="Solutions--link">
                    <NavItem eventKey="Category">
                        <Link to={"/"} className="nav-items">
                            <span>COURSES CATEGORY</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Full">
                        <Link to={"/"} className="nav-items">
                            <span>FULL COURSES</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Component">
                        <Link to={"/"} className="nav-items">
                            <span>COMPONENTS</span>
                        </Link>
                    </NavItem>
                    </div>
                </div>

                <div className="UsefullLinks">
                    <h3 className="UsefullLinks--title">USEFULL LINKS</h3>
                    <NavItem eventKey="Teacher">
                        <Link to={"/"} className="nav-items">
                            <span>TEACHER</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Blog">
                        <Link to={"/"} className="nav-items">
                            <span>BLOG</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Profile">
                        <Link to={"/"} className="nav-items">
                            <span>MY PROFILE</span>
                        </Link>
                    </NavItem>
                    <NavItem eventKey="Help">
                        <Link to={"/"} className="nav-items">
                            <span>HELP</span>
                        </Link>
                    </NavItem>
                </div>

                <div className="Contacts">
                    <h3 className="Contacts--title">CONTACT</h3>
                    <div className="Contacts--lists">
                    <p className="Contacts--list"> New York, NY 10012, US </p>
                    <p className="Contacts--list"> info@example.com </p>
                    <p className="Contacts--list"> + 01 234 567 88  </p>
                    <p className="Contacts--list"> + 01 234 567 89 </p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="Footer" >
        <div className="Subscribe">
            <h4 className="Subscribe--text">Get connected with us on social networks:</h4>
            <input className="Subscribe--textbox" type="text" placeholder="Subscribe to our newsletter"/>
            <input className="Subscribe--confirm" type="submit" />
            <div className="Socialmedia">
            <a href="www.facebook.com" >
                <img src={Facebook} className="Socialimage"/>
            </a>
            <a href="www.instagram.com">
                <img src={Instagram} className="Socialimage"/>
            </a>
            <a href="www.whatsApp.com">
                <img src={WhatsApp} className="Socialimage"/>
            </a>
            <a href="www.youtube.com">
                <img src={Youtube} className="Socialimage" />
            </a>
            </div>
        </div>
        <div className="Footer--body"> {displayFooter()}</div>
        <div className="CopyRight">© 2022 Copyright TutoMania</div>
        </div>
    )
}

export default Footer;
import React, { useState } from "react";
import '../App.css'
import logo from "../images/logo.PNG";
import menu from "../images/menu.svg";
import { NavLink } from "react-router-dom";
const Nav = () => {
    const [nav, setnav] = useState(false)
    return (
        <header className="  d-flex justify-content-center align-items-center position-fixed " style={{zIndex:"100"}} >
            <div className="logo">
                <img style={{ width: "6.5rem", height: "3.5rem" }} src={logo} alt="" />
            </div>
            <nav className="nav_list nav1 d-flex justify-content-end" id={nav ? "dis1" : "dis2"} >

                <ul className="d-flex">
                    <li><NavLink className="nav12" to="/">Home</NavLink></li>
                    <li><NavLink className="nav12" to="/Service">Service</NavLink></li>
                    <li><NavLink className="nav12" to="/About">About</NavLink></li>
                    <li><NavLink className="nav12" to="/FAQ">FAQ</NavLink></li>
                    <li><NavLink className="nav12" to="/Contact">Contact</NavLink></li>
                </ul>
                <button className="mr-2 btn btn-primary mt-1 btn1" >SIGN IN</button>
            </nav>
            <img className="menu" onClick={() => {
                setnav(!nav)
            }} src={menu} alt="" />
        </header>
    )
};
export default Nav;
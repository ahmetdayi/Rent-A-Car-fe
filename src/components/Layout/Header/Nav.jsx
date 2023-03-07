import React from 'react';
import classes from "./Nav.module.css";
import logo from "../../../assets/logo.png"
import {NavLink} from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <ul className={classes.menu}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <li className={classes["menu-item"]}><NavLink  to="/home">HOME</NavLink></li>
                <li className={classes["menu-item"]}><NavLink to="/cars">CARS</NavLink></li>
                <li className={classes["menu-item"]}><NavLink to="/about">ABOUT</NavLink></li>
                <li className={classes["menu-item"]}><NavLink to="/contact">CONTACT</NavLink></li>
                <li className={classes["menu-item"]}><NavLink to="/login">LOGIN</NavLink></li>
                <li className={classes["menu-item"]}><NavLink to="/profile">PROFILE</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;
import React, {useEffect, useState} from 'react';
import classes from "./Nav.module.css";
import logo from "../../../assets/logo.png"
import {NavLink, useLocation} from "react-router-dom";

const Nav = () => {
    const [url, setUrl] = useState("");
    const location = useLocation();

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <nav>
            <ul className={classes.menu}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <li className={`${classes["menu-item"]} `}><NavLink
                    className={`${url === "/home" || url === "/" ? classes.active : ""}`} to="/home">HOME</NavLink></li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/cars"  ? classes.active : ""}`} to="/cars">CARS</NavLink></li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/about"  ? classes.active : ""}`} to="/about">ABOUT</NavLink>
                </li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/login"? classes.active : ""}`} to="/login">LOGIN</NavLink>
                </li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/profile"  ? classes.active : ""}`}
                    to="/profile">PROFILE</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;
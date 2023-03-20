import React, {useEffect, useState} from 'react';
import classes from "./Nav.module.css";
import logo from "../../../assets/logo.png"
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const Nav = () => {
    const [url, setUrl] = useState("");
    const location = useLocation();
    let loginCtx = useSelector((state) => state.login);

    const profile = (<li className={classes["menu-item"]}><NavLink
        className={`${url === "/profile" ? classes.active : ""}`}
        to="/profile">{loginCtx.isLoggedIn ? "PROFILE" : null}</NavLink></li>);

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
                    className={`${url === "/cars" ? classes.active : ""}`} to="/cars">CARS</NavLink></li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/about" ? classes.active : ""}`} to="/about">ABOUT</NavLink>
                </li>
                <li className={classes["menu-item"]}><NavLink
                    className={`${url === "/login" ? classes.active : ""}`}
                    to={loginCtx.isLoggedIn ? "/logout" : "/login"}>{loginCtx.isLoggedIn ? "LOGOUT" : "LOGIN"}</NavLink>
                </li>
                {loginCtx.isLoggedIn ? profile : null}
            </ul>
        </nav>
    );
};

export default Nav;
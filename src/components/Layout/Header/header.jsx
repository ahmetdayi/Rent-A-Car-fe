import React from 'react';
import classes from "./Header.module.css"
import headerImg from "../../../assets/car.jpg"
import Nav from "./Nav";


const Header = () => {
    return (
        <header style={{backgroundImage: 'url(' + headerImg + ')'}}>
            <Nav/>
            <div className={classes.header_content}>
                <h1 className={classes.title}>Merhaba</h1>
                <p className={classes.prg}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, pariatur? Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Nulla, sint?</p>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import classes from "./Car.module.css"

import {Link} from "react-router-dom";


const Car = (props) => {

    return (
        <div className={classes.modals}>
            <div className={classes.modal}>
                <div className={classes.modal_img}>
                    <img
                        src={props.image ? props.image.map((img)=> img===null?"":img.url) : ""}//TODO hata var bak
                        alt="car"/>
                </div>
                <div className={classes.content}>
                    <p>Car : {`${props.carName ? props.carName : ""} ${props.brand ? props.brand.brandName : ""}`}</p>
                    <p>Brand : {`${props.brand ? props.brand.brandName : ""}`}</p>
                    <p>Product Year : {`${props.productYear ? props.productYear : ""}`}</p>
                </div>
            </div>
            <Link to={`/car/${props.carId}`} className={classes.models_button} >RENTAL</Link>
        </div>
    );
};

export default Car;
import React, {useEffect} from 'react';
import classes from "./Car.module.css"


const Car = (props) => {

    useEffect(() => {
        console.log(props.image[0].url)
    })
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
            <a className={classes.models_button} href="#">RENTAL</a>
        </div>
    );
};

export default Car;
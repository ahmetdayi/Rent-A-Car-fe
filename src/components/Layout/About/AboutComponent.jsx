import React from 'react';
import classes from "./AboutComponent.module.css"
import Modal from "./Modal/Modal";
import saleCar from "../../../assets/sale.jpg"
const AboutComponent = () => {
    return (
        <div className={classes.container}>
            <Modal
            img = {saleCar}
            value="right"
            />

            <div className={classes.content}>
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, provident.</p>
            </div>

            <Modal
            img = {saleCar}
            value="left"
            />
        </div>
    );
};

export default AboutComponent;
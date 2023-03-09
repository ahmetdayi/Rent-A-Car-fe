import React, {Fragment} from 'react';
import classes from "./Modal.module.css"


const Modal = (props) => {

    const leftImg = <Fragment >
        <div className={classes.main_img}>
            <img src={props.img} alt="about"/>
        </div>
        <div className={classes.content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore error facere
                nostrum
                quibusdam
                voluptatum!</p>
        </div>
    </Fragment>;

    const rightImg = <Fragment>
        <div className={classes.content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore error facere nostrum
                quibusdam
                voluptatum!</p>
        </div>
        <div className={classes.main_img}>
            <img src={props.img} alt="about"/>
        </div>
    </Fragment>;

    return (
        <Fragment>
            <div className={classes.container}>
                {
                    props.value === "right" ? rightImg : null
                }
                {
                    props.value === "left" ? leftImg : null
                }
                }
            </div>
        </Fragment>
    );
};

export default Modal;
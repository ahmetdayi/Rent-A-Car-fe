import React from 'react';
import classes from "./Profile.module.css"
const ProfileComponent = () => {
    return (
        <div className={classes.container}>
            <h1>Profile</h1>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={classes.info}>
                <div>
                    AD:
                </div>
                <div>
                    SOYAD:
                </div>
                <div>
                    Email:
                </div>
            </div>
            <hr/>
            <div>Rental Info</div>
        </div>
    );
};

export default ProfileComponent;
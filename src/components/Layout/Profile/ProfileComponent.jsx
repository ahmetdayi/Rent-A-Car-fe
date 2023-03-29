import React, {Fragment, useEffect, useState} from 'react';
import classes from "./Profile.module.css"
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const [profileInfo, setProfileInfo] = useState(null);
    let loginCtx = useSelector((state) => state.login);
    const customerId = loginCtx.customerId;

    useEffect(() => {
        const fetch = async () => {
            await Http.GET(Endpoints.GET_BY_ID + "customerId=" + customerId)
                .then((response) => {
                    setProfileInfo(response.data);
                }).catch(err => {
                    console.log("fetching error" + err);
                });
        }

        if (!profileInfo) {
            fetch();
        }
    }, [])

    return (
        <Fragment>
            <div className={classes.container}>
                <h1>Profile</h1>
                <div>
                    <img src="" alt=""/>
                </div>
                <div className={classes.info}>
                    <div>
                        <p className={classes.info_item}>AD:</p>
                        <p>{profileInfo?.customer?.firstName}</p>
                    </div>
                    <div>
                        <p className={classes.info_item}> SOYAD:</p>
                        <p>{profileInfo?.customer?.lastName}</p>
                    </div>
                    <div>
                        <p className={classes.info_item}>Email:</p>
                        <p>{profileInfo?.customer?.email}</p>
                    </div>
                    <div><Link to={"/update"} className={classes.models_button}>UPDATE</Link></div>
                </div>

            </div>
            <div className={classes.container} style={{
                marginTop: "10px",
                backgroundImage: 'url(' + profileInfo?.car?.image?.map((image) => image.url) + ')'
            }}>
                <h1>Rental Info</h1>
                <div className={classes.rentals}>
                    <div className={classes.rental_item}>
                        <div className={classes.car_info}>
                            <p className={classes.baslik}>Car :</p>
                            <p>{profileInfo?.car?.carName}</p>
                            <p className={classes.baslik}>Brand :</p>
                            <p>{profileInfo?.car?.brand?.brandName}</p>
                            <p className={classes.baslik}>Product Year :</p>
                            <p>{profileInfo?.car?.productYear}</p>
                            <p className={classes.baslik}>Colors :</p>
                            <p>{profileInfo?.car?.carColors?.map((color) => color.colorName)}</p>
                        </div>
                        <div className={classes.rental_item_info}>
                            <p className={classes.baslik}>Rent Date :</p>
                            <p>{profileInfo?.rentDate.replace("T", " ")}</p>
                            <p className={classes.baslik}>Return Date :</p>
                            <p>{profileInfo?.returnDate.replace("T", " ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfileComponent;
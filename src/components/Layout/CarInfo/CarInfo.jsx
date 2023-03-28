import React, {Fragment, useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import car from "../../Layout/Car-List/Car/Car";
import {Link} from "react-router-dom";
import classes from "./CarInfo.module.css"


const CarInfo = () => {
    const param = useParams();
    const carId = param.carId;
    const [carInfo, setCarInfo] = useState(null);


    useEffect(() => {
        const fetch = async () => {
            await Http.GET(Endpoints.GET_CAR_BY_ID + `?carId=` + carId)
                .then((response) => {
                    setCarInfo(response.data);
                }).catch(err => {
                    console.log("fetching error" + err);
                });
        }

        if (!carInfo) {
            fetch();
        }
    }, [])

    return (

        <div style={{backgroundImage: 'url(' + carInfo?.image?.map((image) => image.url) + ')' }}
             className={classes.background}>
            <div className={classes.info}>
                <div className={classes.carName}>CAR: {carInfo?.carName}</div>
                <div className={classes.brandName}>BRAND: {carInfo?.brand?.brandName}</div>
                <div className={classes.dailyPrice}>DAILY PRICE: {carInfo?.dailyPrice}</div>
                <div className={classes.productYear}>PRODUCT YEAR: {carInfo?.productYear}</div>
                <div className={classes.colors}>COLORS: {carInfo?.carColors?.map((color) => color.colorName)}</div>
                <Link to={`/rental/${carInfo?.carId}`} className={classes.models_button} >RENTAL</Link>
            </div>
            <div className={classes.image}><img src={carInfo?.image?.map((image) => image.url)} alt=""/></div>
        </div>


    )
        ;
};

export default CarInfo;

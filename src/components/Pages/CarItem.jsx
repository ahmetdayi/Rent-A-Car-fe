import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Http from "../Utility/Http";
import Endpoints from "../Utility/Endpoints";
import car from "../Layout/Car-List/Car/Car";

const CarItem = () => {
    const param = useParams();
    const carId = param.carId;
    const [carInfo, setCarInfo] = useState(null);


    useEffect(() => {
        const fetch = async () => {
            await Http.GET(Endpoints.GET_CAR_BY_ID + `?carId=` + carId)
                .then((response) => {
                    setCarInfo(response.data);
                    console.log(carInfo)
                }).catch(err => {
                    console.log("fetching error" + err);
                });
        }

        if (!carInfo) {
            fetch();
        }
    }, [])
    useEffect(() => {
        console.log(carInfo)
    }, [carInfo])
    return (

        <Fragment>
            <div>{carInfo?.carName}</div>
            <div>{carInfo?.brand?.brandName}</div>
            <div>{carInfo?.dailyPrice}</div>
            <div>{carInfo?.productYear}</div>
            <div>{carInfo?.image?.map((image) => image.url)}</div>
            <div><img src={carInfo?.image?.map((image) => image.url)} alt="car"/></div>

        </Fragment>


    )
        ;
};

export default CarItem;
import React, {useEffect, useState} from 'react';
import classes from "./CarList.module.css";
import Car from "./Car/Car";
import Http from "../../Utility/Http"
import Endpoints from "../../Utility/Endpoints";

const CarList = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetch = () => {
            Http.GET(Endpoints.GET_ALL_CAR, null, {})
                .then((response) => {
                    console.log(response.data);
                    setCars(response.data);
                }).catch(err => {
                console.log("fetching error" +err);
            });
        }
        fetch();
    }, [fetch])


    return (
        <section className={classes.modal_section}>
            {cars.map((car, index) =>
                <Car
                    key={index}
                    index={index}
                    image={car.image}
                    brand={car.brand}
                    carName={car.carName}
                    productYear={car.productYear}
                />
            )}
        </section>
    );
};

export default CarList;
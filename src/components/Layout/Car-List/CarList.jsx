import React, {useEffect, useState} from 'react';
import classes from "./CarList.module.css";
import Car from "./Car/Car";
import Http from "../../Utility/Http"
import Endpoints from "../../Utility/Endpoints";

const CarList = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await Http.GET(Endpoints.GET_ALL_CAR, null, {})
                .then((response) => {
                    setCars(response.data);
                }).catch(err => {
                    console.log("fetching error " +err);
                });
        }
        fetch();
    }, [])


    return (
        <section className={classes.modal_section}>
            {cars.map((car, index) =>
                <Car
                    key={index}
                    index={index}
                    carId={car.carId}
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
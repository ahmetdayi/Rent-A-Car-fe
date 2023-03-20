import React from 'react';

const source = "http://localhost:8080";

const Endpoints = {
    LOG_IN: source + "/login",//!POST

    CREATE_BRAND: source + "/brand", //!POST
    UPDATE_BRAND: source + "/brand", //!PUT
    DELETE_BRAND: source + "/brand/", //!DELETE brand id

    GET_ALL_CAR_BY_BRAND_ID: source + "/car/", //!GET brand id
    GET_ALL_CAR: source + "/car", //!GET
    GET_CAR_BY_ID:`${source}/car/getById/`, //!GET carId
    CREATE_CAR: source +"/car", //!POST
    UPDATE_CAR: source + "/car", //! PUT
    DELETE_CAR: source + "/car/", //! DELETE car id

    CREATE_COLOR: source + "/color", //!POST
    UPDATE_COLOR: source + "/color", //!PUT
    DELETE_COLOR: source + "/color/", //!DELETE color id

    CREATE_CUSTOMER: source + "/customer", //!POST
    UPDATE_CUSTOMER: source + "/customer", //!PUT
    DELETE_CUSTOMER: source + "/customer/", //!DELETE customer id

    DELETE_IMG: source + "/image", //!POST

    RENTAL: source + "/rental", //!POST






};

export default Endpoints;
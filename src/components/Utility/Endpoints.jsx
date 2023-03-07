import React from 'react';

const source = "http://localhost:8080";

const Endpoints = {
    LOG_IN: source + "/login",//!POST
    CREATE_BRAND: source + "/brand", //!POST
    DELETE_BRAND: source + "/brand/", //!DELETE brand id
    UPDATE_BRAND: source + "/brand", //!PUT
    CREATE_CAR: source +"/car", //!POST
    GET_ALL_CAR_BY_BRAND_ID: source + "/car/", //!GET brand id
    GET_ALL_CAR: source + "/car/", //!GET car id
    DELETE_CAR: source + "/car/", //! DELETE car id
    UPDATE_CAR: source + "/car", //! PUT
    CREATE_COLOR: source + "/color", //!POST
    DELETE_COLOR: source + "/color/", //!DELETE color id
    UPDATE_COLOR: source + "/color", //!PUT
    CREATE_CUSTOMER: source + "/customer", //!POST
    DELETE_CUSTOMER: source + "/customer/", //!DELETE customer id
    UPDATE_CUSTOMER: source + "/customer", //!PUT
    DELETE_IMG: source + "/image", //!POST
    RENTAL: source + "/rental", //!POST






};

export default Endpoints;
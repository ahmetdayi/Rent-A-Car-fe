import React from 'react';
import * as Yup from "yup";

const validationSchema =
    Yup.object({
        firstName: Yup.string().required("You must enter first name."),
        lastName: Yup.string().required("You must enter last name."),
        password: Yup
            .string()
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
            .required("Required"),
        matchingPassword:Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
            .required("Required"),
    });


export default validationSchema;
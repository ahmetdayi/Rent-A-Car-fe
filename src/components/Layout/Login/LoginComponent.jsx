import React, {useState} from 'react';
import classes from "./LoginComponent.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik";

const LoginComponent = () => {
    const {isSubmitting, setSubmitting} = useState(false);
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={classes.container}>
            <h1>LOGIN</h1>
            //TODO formik https://formik.org/docs/tutorial
            <div className={classes.direct_signup}></div>
        </div>
    );
};

export default LoginComponent;
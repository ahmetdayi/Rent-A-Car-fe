import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import validationSchema from "../../Services/SignUpValid";
import classes from "./SignUpComponent.module.css"

const SignUpComponent = () => {



    const onSubmit = () =>
        (values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    ;

    return (
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: "", matchingPassword: ""}}
            validationSchema={validationSchema}
            onSubmit={onSubmit()}
        >
            {({errors, touched}) => (
                <Form className={classes.form}>

                    <label className={classes.label} htmlFor="firstName">First Name</label>

                    <Field className={!touched.firstName
                    || !errors.firstName ? `${classes.input}` : `${classes.error_input}`} id="firstName" name="firstName"
                           type="text"/>

                    {touched.firstName && errors.firstName &&
                        <p className={classes.error_message}>{errors.firstName}</p>}

                    <label className={classes.label} htmlFor="lastName">Last Name</label>

                    <Field className={!touched.lastName
                    || !errors.lastName ? `${classes.input}` : `${classes.error_input}`} id="lastName" name="lastName"
                           type="text"/>

                    {touched.lastName && errors.lastName && <p className={classes.error_message}>{errors.lastName}</p>}

                    <label className={classes.label} htmlFor="email">Email Address</label>

                    <Field className={!touched.email
                    || !errors.email ? `${classes.input}` : `${classes.error_input}`} id="email" name="email"
                           type="email"/>

                    {touched.email && errors.email && <p className={classes.error_message}>{errors.email}</p>}

                    <label className={classes.label} htmlFor="password">Password</label>

                    <Field className={!touched.password
                    || !errors.password ? `${classes.input}` : `${classes.error_input}`} id="password" name="password"
                           type="password"/>

                    {touched.password && errors.password && <p className={classes.error_message}>{errors.password}</p>}

                    <label className={classes.label} htmlFor="matchingPassword">Matching Password</label>
                    <Field
                        className={!touched.matchingPassword
                        || !errors.matchingPassword ? `${classes.input}` : `${classes.error_input}`}
                        id="matchingPassword" name="matchingPassword" type="matchingPassword"/>
                    {touched.matchingPassword && errors.matchingPassword &&
                        <p className={classes.error_message}>{errors.matchingPassword}</p>}

                    <button className={classes.button} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpComponent;
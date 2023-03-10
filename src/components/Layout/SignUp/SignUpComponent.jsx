import React, {useState} from 'react';
import {Form, Formik} from "formik";
import validationSchema from "../../Services/SignUpValid";
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import classes from "./SignUpComponent.module.css"
import {useNavigate} from "react-router-dom";

const SignUpComponent = () => {

    let navigateFunction = useNavigate();

    const onSubmit = () =>
        async (values, {setSubmitting}) => {
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                matchingPassword:values.matchingPassword
            }

            try{
                const response= await Http.POST(Endpoints.CREATE_CUSTOMER, data, {})
               navigateFunction("/login");
            }catch (err){
                console.log(err);
            }

            setSubmitting(false);
        }
    ;

    return (
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: "", matchingPassword: ""}}
            validationSchema={validationSchema}
            onSubmit={onSubmit()}
            enableReinitialize={true}
        >
            {({
                  values,
                  errors,
                  isSubmitting,
                  touched,
                  handleSubmit,
                  handleChange
              }
            ) => (
                <Form onSubmit={handleSubmit} className={classes.form}>

                    <label className={classes.label} htmlFor="firstName">First Name</label>
                    <input
                        className={!touched.firstName
                        || !errors.firstName ? `${classes.input}` : `${classes.error_input}`} id="firstName"
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        value={values.firstName}
                    />
                    {touched.firstName && errors.firstName &&
                        <p className={classes.error_message}>{errors.firstName}</p>
                    }

                    <label className={classes.label} htmlFor="lastName">Last Name</label>
                    <input
                        className={!touched.lastName
                        || !errors.lastName ? `${classes.input}` : `${classes.error_input}`} id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        type="text"
                    />
                    {
                        touched.lastName && errors.lastName &&
                        <p className={classes.error_message}>{errors.lastName}</p>
                    }

                    <label className={classes.label} htmlFor="email">Email Address</label>
                    <input
                        className={!touched.email
                        || !errors.email ? `${classes.input}` : `${classes.error_input}`} id="email" name="email"
                        onChange={handleChange}
                        value={values.email}
                        type="email"
                    />
                    {
                        touched.email && errors.email && <p className={classes.error_message}>{errors.email}</p>
                    }

                    <label className={classes.label} htmlFor="password">Password</label>
                    <input
                        className={!touched.password
                        || !errors.password ? `${classes.input}` : `${classes.error_input}`} id="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                    />
                    {
                        touched.password && errors.password &&
                        <p className={classes.error_message}>{errors.password}</p>
                    }

                    <label className={classes.label} htmlFor="matchingPassword">Matching Password</label>
                    <input
                        className={!touched.matchingPassword
                        || !errors.matchingPassword ? `${classes.input}` : `${classes.error_input}`}
                        id="matchingPassword"
                        onChange={handleChange}
                        name="matchingPassword"
                        value={values.matchingPassword}
                        type="password"
                    />"
                    {
                        touched.matchingPassword && errors.matchingPassword &&
                        <p className={classes.error_message}>{errors.matchingPassword}</p>
                    }

                    <button className={classes.button} type="submit">Submit</button>

                </Form>
            )}
        </Formik>
    );
};

export default SignUpComponent;
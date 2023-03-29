import React, {useState} from 'react';
import classes from "./UpdateComponent.module.css"
import {Formik} from "formik";
import validationSchema from "../../../Services/CustomerUpdateValid";
import Http from "../../../Utility/Http";
import Endpoints from "../../../Utility/Endpoints";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const UpdateComponent = () => {
    const [error, setError] = useState(false);
    const loginCtx = useSelector((state) => state.login);
    let navigation = useNavigate();
    const onSubmit = () =>

        async (values, {setSubmitting}) => {
            const data = {
                customerId: loginCtx.customerId,
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                matchingPassword: values.matchingPassword
            }
            try {
                const response = await Http.PUT(Endpoints.UPDATE_CUSTOMER, data);
                console.log(response.data);
                setError(false);
                navigation("/profile")
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setSubmitting(false);

        }
    ;
    return (
        <Formik
            initialValues={{firstname: "", lastName: ""}}
            validationSchema={validationSchema}
            onSubmit={onSubmit()}
            enableReinitialize={true}>
            {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  touched
              }) => (

                <form onSubmit={handleSubmit} className={classes.form}>
                    <h1>UPDATE</h1>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className={!touched.firstName
                        && !errors.firstName ? `${classes.input}` : `${classes.error_input}`}
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    {
                        !touched.firstName && errors.firstName &&
                        <p className={classes.error_message}>{errors.firstName}</p>
                    }
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className={!touched.lastName
                        && !errors.lastName ? `${classes.input}` : `${classes.error_input}`}
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                    {
                        touched.lastName && errors.lastName &&
                        <p className={classes.error_message}>{errors.lastName}</p>
                    }
                    <label htmlFor="password">Password</label>
                    <input
                        className={!touched.password
                        && !errors.password ? `${classes.input}` : `${classes.error_input}`}
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {
                        !touched.password && errors.password &&
                        <p className={classes.error_message}>{errors.password}</p>
                    }
                    <label htmlFor="matchingPassword">Matching Password</label>
                    <input
                        className={!touched.matchingPassword
                        && !errors.matchingPassword ? `${classes.input}` : `${classes.error_input}`}
                        id="matchingPassword"
                        name="matchingPassword"
                        type="password"
                        value={values.matchingPassword}
                        onChange={handleChange}
                    />
                    {
                        !touched.matchingPassword && errors.matchingPassword &&
                        <p className={classes.error_message}>{errors.matchingPassword}</p>
                    }
                    <button className={classes.button} type="submit">Update</button>
                    {error ? <p className={classes.error_fetch}>Please Check E mail or Password.</p> : null}
                </form>
            )
            }

        </Formik>
    );

}
export default UpdateComponent;
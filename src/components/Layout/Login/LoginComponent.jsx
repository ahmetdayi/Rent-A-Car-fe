import React, {useState} from 'react';
import classes from "./LoginComponent.module.css"
import {Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import validationSchema from "../../Services/LoginValid";
import {useDispatch} from "react-redux";
import {loginActions} from "../../Store/LoginSlice"

const LoginComponent = () => {

    const [error, setError] = useState(false);
    let navigateFunction = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = () =>

        async (values, {setSubmitting}) => {
            const data = {
                email: values.email,
                password: values.password
            }

            try {
                const response = await Http.POST(Endpoints.LOG_IN, data, {})

                dispatch(loginActions.login(`Bearer ${response.data.jwtToken}`));
                setError(false);
                navigateFunction("/home");
            } catch (err) {
                setError(true);
                console.log(err);
            }

            setSubmitting(false);
        }
    ;

    return (
        <Formik
            initialValues={{email: '', password: ""}}
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
                    <h1>Login</h1>
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

                    <button className={classes.button} type="submit">Submit</button>
                    {error ? <p className={classes.error_fetch}>Please Check E mail or Password.</p> : null}

                    <p className={classes.signup}>If you don't have account. Please <Link to="/signup">Sign up</Link>
                    </p>
                </Form>

            )}

        </Formik>
    );
};

export default LoginComponent;
import React, {useEffect, useState} from 'react';
import classes from "./Rental.module.css"
import {useNavigate, useParams} from "react-router-dom";
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import {Formik} from "formik";
import validationSchema from "../../Services/RentalValid"
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../Store/LoginSlice";

const Rental = () => {
    const param = useParams();
    const carId = param.carId;
    let loginCtx = useSelector((state) => state.login);
    const [error, setError] = useState(false);
    let navigateFunction = useNavigate();


    const onSubmit = () =>

        async (values, {setSubmitting}) => {
            const data = {
                returnDate: values.returnDate,
                customerId: values.customerId,
                carId: values.carId
            }
            try {
                await Http.POST(Endpoints.RENTAL, data);
                setError(false);
                navigateFunction("/profile");
            } catch (err) {
                console.log(err);
                setError(true);
            }

            setSubmitting(false);
        }
    ;

    return (

        <Formik
            initialValues={{returnDate: "", customerId: loginCtx.customerId, carId: carId}}
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

              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <h1>RENTAL</h1>
                    <label className={classes.label} htmlFor="returnDate">Return Date</label>
                    <input
                        className={!touched.returnDate
                        || !errors.returnDate ? `${classes.input}` : `${classes.error_input}`}
                        id="returnDate"
                        name="returnDate"
                        onChange={handleChange}
                        value={values.returnDate}
                        type="datetime-local"
                    />
                    {
                        !touched.returnDate &&
                        <p className={classes.error_message}>{errors.returnDate}</p>
                    }
                    <button className={classes.button} type="submit">Submit</button>
                    {error ? <p className={classes.error_fetch}>Please check input</p> : null}
                    {loginCtx.customerId}
                </form>
            )}

        </Formik>
    );
};

export default Rental;
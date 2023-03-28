import React, {useEffect, useState} from 'react';
import classes from "./Rental.module.css"
import {useNavigate, useParams} from "react-router-dom";
import Http from "../../Utility/Http";
import Endpoints from "../../Utility/Endpoints";
import {Formik} from "formik";
import validationSchema from "../../Services/RentalValid"
import {useDispatch} from "react-redux";
import {loginActions} from "../../Store/LoginSlice";

const Rental = () => {
    const param = useParams();
    const carId = param.carId;
    //customerıd gelecek
    const [error, setError] = useState(false);
    let navigateFunction = useNavigate();


    const onSubmit = () =>

        async (values, {setSubmitting}) => {
            const data = {
                returnDate: values.returnDate
            }

            try {
                console.log(data)
                setError(false);

            } catch (err) {
                setError(true);
                console.log(err);
            }

            setSubmitting(false);
        }
    ;

    return (
        <Formik
            initialValues={{returnDate: "", customerId: "", carId: carId}}
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
                <form action="" className={classes.form}>
                    <h1>RENTAL</h1>
                    <label className={classes.label} htmlFor="returnDate">Email Address</label>
                    <input
                        className={!touched.returnDate
                        || !errors.returnDate ? `${classes.input}` : `${classes.error_input}`} id="returnDate"
                        name="returnDate"
                        onChange={handleChange}
                        value={values.returnDate}
                        type="date"
                    />
                    {
                        touched.returnDate  &&
                        <p className={classes.error_message}>{errors.returnDate}</p>
                    }
                    <button className={classes.button} type="submit">Submit</button>
                    {error ? <p className={classes.error_fetch}>Please Check E mail or Password.</p> : null}
                </form>
            )}

        </Formik>
    );
};

export default Rental;
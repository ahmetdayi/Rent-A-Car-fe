import React, {useEffect} from 'react';
import {loginActions} from "../Store/LoginSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        try {
            dispatch(loginActions.logout());
            navigate("/login");
        }catch (err){
            console.log(err);
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Logout;
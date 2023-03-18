import './App.css';
import React, {Fragment, useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./components/Pages/Home";
import Cars from "./components/Pages/Cars";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Nav from "./components/Layout/Header/Nav";
import SignUp from "./components/Pages/SignUp";
import {useDispatch} from "react-redux";
import {loginActions} from "./components/Store/LoginSlice";
import Logout from "./components/Pages/Logout";


function App() {
    const[isHome,setIsHome] = useState(true);
    let location = useLocation();
    const dispatch =useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        let isHome = location.pathname==="/" || location.pathname==="/home";
        setIsHome(isHome);
    }, [location])

    return (
        <Fragment>
            {!isHome && <Nav/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cars" element={<Cars/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;

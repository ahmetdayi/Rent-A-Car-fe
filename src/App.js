import './App.css';
import React, {Fragment, useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Pages/Home";
import Cars from "./components/Pages/Cars";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Nav from "./components/Layout/Header/Nav";


function App() {
let location = useLocation();
let isHome = true;
useEffect(()=>{
    const control = async ()=>{
        isHome=  await (location.pathname==="/" || location.pathname==="/home");
    }
    control();

},[isHome])

    return (
        <Fragment>
            {!isHome && <Nav/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cars" element={<Cars/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;

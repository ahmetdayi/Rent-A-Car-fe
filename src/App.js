import './App.css';
import Header from "./components/Layout/Header/header";
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";
import Cars from "./components/Pages/Cars";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";

function App() {

  return (
 <Fragment>
     <Header/>
     <Routes>
        <Route path="/" element={<Home/>} >
        </Route>
         <Route path="/home" element={<Home/>} />

         <Route path="/cars" element={<Cars/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/profile" element={<Profile/>}/>
     </Routes>
 </Fragment>
  );
}

export default App;

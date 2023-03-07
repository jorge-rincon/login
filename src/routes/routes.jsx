import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { SingUp } from "../components/SignUp/SingUp";
import { auth } from "../firebase";


export function AppRoutes() {

    const [userName, setUserName] = useState([]);
    useEffect(() =>{
        auth.onAuthStateChanged((user) =>{
            if (user) {
                setUserName(user.displayName)
            }else{
                setUserName("")
            }
        })
    },[])

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={ <Login /> }  />
                <Route exact path="/home" element={ <Home name={ userName } /> } />
                <Route exact path="/sing-up" element={ <SingUp /> }  />
                
            </Routes>
        </Router>
    )
}
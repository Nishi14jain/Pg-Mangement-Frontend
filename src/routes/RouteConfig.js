import React from "react";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Dashboard from "../pages/Dashboard"; 


const RouteConfig = [
    {
        path: "/login", 
        element: React.createElement(Login)
    },
    {
        path: "/register", 
        element: React.createElement(Register)
    },
    {
        path: "/dashboard", 
        element: React.createElement(Dashboard)
    }
];
export default RouteConfig    ; 

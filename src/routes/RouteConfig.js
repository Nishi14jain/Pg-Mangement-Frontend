import React from "react";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Dashboard from "../pages/Dashboard"; 
import Settings from "../pages/Settings";
import DashboardLayout from "../layouts/DashboardLayout";

const routes = [
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
        element: React.createElement(DashboardLayout),

    children: [
        {
            index: true, 
            element : React.createElement(Dashboard),
        },
        {
            path: "settings",
            element: React.createElement(Settings), 
        }, 
    ], 
},

   
    
];
export default routes    ; 

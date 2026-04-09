import React from "react";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Dashboard from "../pages/Dashboard"; 
import Settings from "../pages/Settings";
import DashboardLayout from "../layouts/DashboardLayout";

const routes = [
    {
        path: "/login", 
        element: <Login />
    },
    {
        path: "/register", 
        element: <Register />
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                // This makes /dashboard work
                path: "dashboard", 
                element: <Dashboard />
            },
            {
                // This makes /settings work
                path: "settings", 
                element: <Settings />
            },
        ],
    },
];

export default routes;
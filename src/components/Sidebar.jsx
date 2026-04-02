import React from "react"; 
import {NavLink} from "react-router-dom"; 
import {FaHome, FaUser, FaChartLine, } from "react-icons/fa"; 


export default function SideBar() {
 
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen p-5">

        {/* App Name */}
        <h2 className="text-2xl font-bold mb-6">MyApp</h2>

        {/* Navigation Links */}
        <nav className="space-y-2">
           
                <NavLink to="/dashboard" 
                    className={({isActive}) => `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FaHome className="w-5 h-5" />
                    Dashboard
                </NavLink>
            
                <NavLink to="/dashboard/settings" 
                    className={({isActive}) => `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FaGear className="w-5 h-5" />
                    Settings
                </NavLink>
            
        </nav>
        </div>
    );
}

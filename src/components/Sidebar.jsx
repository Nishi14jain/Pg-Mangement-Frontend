import React from "react"; 
import {NavLink} from "react-router-dom"; 
import {FaHome, FaCog, FaChartLine, } from "react-icons/fa"; 


export default function SideBar({isOpen}) {
 
    return (
        <aside className={`${isOpen ? "w-64" : "w-20"} bg-gray-800 text-white min-h-screen p-5 transition-all duration-300 ease-in-out fles fles-col`}>
            {/* App Name -Hide text when closed */}
            <div className="flex item-center mb-10 overflow-hidden">
                <FaChartLine className="text-2xl text-blue-400 min-W-[30px]" />
                {isOpen && <h2 className="text-2xl font-bold ml-3 whitespace-nowrap">MyApp</h2> }
            </div>

            <nav className="space-y-2">
                <NavLink to="/dashboard" className={({isActive}) => `flex item-center gap-4 px-3 py-2 rounded-lg transition-colors  
                    ${isActive ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FaHome className="text-xl min-W-[20px]" />
                    {isOpen && <span className="whitespace-nowrap">Dashboard </span> }
                </NavLink>
                 <NavLink to="/settings" className={({isActive}) => `flex item-center gap-4 px-3 py-2 rounded-lg transition-colors  
                    ${isActive ? "bg-blue-700" : "hover:bg-gray-700"}`}>
                    <FaCog className="text-xl min-W-[20px]" />
                    {isOpen && <span className="whitespace-nowrap">Settings </span> }
                </NavLink>

            </nav>
        </aside>
      
    );
}

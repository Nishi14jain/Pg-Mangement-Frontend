import React from 'react'; 
import {Link, Outlet} from 'react-router-dom'; 
import SideBar from '../components/Sidebar';
import Header from '../components/Header';
import { useState } from 'react';


const DashboardLayout =({ children}) => {
    const[isOpen, setIsOpen] = useState(true); 
    const toggleSidebar = () => setIsOpen(!isOpen); 
    return(

        <div className='flex h-screen bg-gray-100 overflow-hidden'>
            {/* 1. SideBar gets the state */}
             <SideBar isOpen={isOpen} />
              {/* 2. Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                
                {/* 3. Header gets the toggle function */}
                <Header onToggle={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>

        </div>

    );
};

export default DashboardLayout; 
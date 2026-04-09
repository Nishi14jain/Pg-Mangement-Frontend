import React from 'react'; 
import {Link, Outlet} from 'react-router-dom'; 


const DashboardLayout =({ children}) => {
    return(
        <div className='flex h-screen bg-gray-100'>
            {/* Sidebar */}
            <aside className="w-64 bg-indigo-900 text-white flex flex-col">
                <div className="p-6 text-2x; font-bold border-b border-indigo-800">
                    Pg Master
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link to="/dashboard" className="block p-3 rounded hover:bg-indigo-800 transition" >
                    Dashboard
                    </Link>


                    <Link to="/settings" className="block p-3 rounded hover:bg-indigo-800 transition">
                        Settings 
                    </Link>
                     
                </nav>
            </aside>

            {/* Main Content Area*/}

            <main className="flex-1 orverflow-y-auto">

                <header className='bg-white shadow-sm p-4 flex justify-between'>
                    <h2 className='text-xl font-semibold text-gray-700'>
                        Admin Portal
                    </h2>
                    <button className="text-gray-500 hover:text-red-500">
                    Logout
                    </button>
                </header>

                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout; 
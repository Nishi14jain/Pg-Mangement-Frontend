import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout(){
    return(
        <div className="flex min-h-screen">
            {/* sidebar*/}
            <SideBar />

            {/*Right Section */}

            <div className="flex-1 flex flex-col">
                {/* Header*/}
                <Header />

            {/* Page Content */}
            <div className="p-6 bg-gray-100 flex-1">
                <Outlet />
            </div>

            </div>


        </div>
    )
}
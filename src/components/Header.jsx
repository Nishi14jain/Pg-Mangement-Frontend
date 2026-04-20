import {useNavigate, Link } from "react-router-dom";
import { useState, useRef , useEffect } from "react-router-dom";
import {FaChevronDown, FaBars, FaUser, FaSignOutAlt, FaCog } from "react-icons/fa"; 

export default function Header({onToggle}) {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const dropdownRef = useRef(null); 
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage. removeItem("token"); 
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (

        <div className="flex justify-between items-center bg-white shadow px-6 py-3">
            <div className="flex item-center gap-4">
                {/* Toggle Button */}
                <button onClick={onToggle} className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
                    <FaBars size={20} />
                </button>

                <div className="text-xl font-bold text-blue-600 cursor-pointer"> My App</div>
            </div>

            <div className="flex items-center gap-4">
            <FaUser size={10} />
                <span className="text-gray-600">{user?.name || "User"}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={handleLogout}>
                        LogOut
                    </button>
                </span>
            </div>

        </div>

     
    );

}
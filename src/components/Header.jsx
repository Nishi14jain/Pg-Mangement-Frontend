import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage. removeItem("token"); 
        loalstorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="flex justify-between items-center bg-white shadow px-6 py-3 ">
          {/* Left -Logo */}
           <div className="text-xl font-bold text-blue-600 cursor-pointer">
            MyApp

           </div>

           {/* Right - User Info */}
           <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.name}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleLogout}>Logout</button>
           </div>
        </div>
    );

}
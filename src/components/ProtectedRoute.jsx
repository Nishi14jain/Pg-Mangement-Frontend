import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {

    const tokern = localStorage.getItem("token"); 
    return tokern ? children : <Navigate to="/login" />;

};

export default ProtectedRoute;
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div style={{widht: "200px", background: "#eee", padding: "20px"}}>
            <h3>Dashboard</h3>
            <ul>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    );

};

export default Sidebar; 

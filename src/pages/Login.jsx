import {useState} from "react"; 
import axios from "axios"; 
import { Navigate, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post(
                "http://127.0.0.1:8000/api/login",
                {
                    email,
                    password
                }
            );

            //save Token
            localStorage.setItem("token", res.data.token); 
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard"); 
            
            alert("Logged in successfully 🎉");

        }catch(err){
            alert("Invalid credentials"); 
            console.log(err);
        }

        };

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-lg">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
                <h2>Login</h2>
            <div className="relative mb-4">  
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input className="w-full pl-10 py-2 border rounded-lg" type = "email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           
            </div>
            <div className="relative mb-4">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input className="w-full pl-10 py-2 border rounded-lg" type = "password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
            </div>
            <div className="relative">
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">Login</button>
            </div>

            </form>
            </div>  
        )

    }


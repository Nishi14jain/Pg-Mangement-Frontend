import { useState } from "react";
import api from "../api/axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/register", form);
      // localStorage.setItem("token", res.data.token);
      alert("Registered successfully 🎉");
    } catch (err) {
      console.log(err.response.data);
    
      if (err.response.status === 422) {
        alert("Validation failed: Email may already exist or fields invalid");
      }
    }

    console.log(form);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
            <h2 className="text-2xl font-bold text-center">Register</h2>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 py-2 border rounded-lg" name="name" onChange={handleChange}
          />
        </div>

        <div className="relative"> 
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="email" placeholder="Email" className="w-full pl-10 py-2 border rounded-lg" name="email" onChange={handleChange}
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="password" placeholder="Password" className="w-full pl-10 py-2 border rounded-lg" name="password" onChange={handleChange} />
        </div>

            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit" >
              Register
             </button>

             <p className="text-center text-sm text-gray-500">Already habe a account? Login</p>
         </form>
     </div>

  
    
  );
}

export default Register;

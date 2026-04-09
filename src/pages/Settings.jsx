import {useState} from "react"; 
import axios from "axios"; 

export default function Settings() {
  // 1. Create the Switch state
  // default is profile
  const [activeTab, setActiveTab] = useState('profile'); 
  const [appName, setAppName] = useState("");
  const [logo, setLogo] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");


 return(
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800"> Settings</h1>

      {/* 2. The Tab BUttons */}
       <div className="flex border-b border-gray-200 mb-6">
         <button onClick={() => setActiveTab('profile')}
            className={`py-2 px-4 font-medium transition $ {activeTab === 'profile' ? 'border-b-2 border-indigo-600 text-indigo-600 : 'text-gray-500 hover:text-gray-700'}`} >
                        Profile
         </button>
         <button
          onClick={() => setActiveTab('pg-details')}
          className={`py-2 px-4 font-medium transition ${
            activeTab === 'pg-details' 
              ? 'border-b-2 border-indigo-600 text-indigo-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          🏠 PG Details
        </button>
       </div>

       {/* 3. The Content (Conditional Rendering) */}
      <div className="mt-4">
        {activeTab === 'profile' && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Admin Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your Name" />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save Profile</button>
          </form>
        )}

        {activeTab === 'pg-details' && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">PG Address</label>
              <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Full Address"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Rent (Avg)</label>
              <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Update PG Info</button>
          </form>
        )}
      </div>
    </div>
 )
}


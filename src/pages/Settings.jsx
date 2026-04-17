import { useState } from "react";
import axios from "axios";

export default function Settings() {
  // 1. Create the Switch state
  // default is profile
  const [activeTab, setActiveTab] = useState('profile');
  const [appName, setAppName] = useState("");
  const [logo, setLogo] = useState(null); // Use null for files
  const [logPreview, setLogoPreview] = useState("null"); // Optional: to show the image after selecting
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [primaryColor, setPrimaryColor] = useState("#4f46e5"); 

    //1. Create the formdata object
  
     const handleSaveProfile = async(e) => {
      e.preventDefault();

          try {
            
              const response = await axios.post('http://localhost:8000/api/profileSettings', {
                  owner_name: userName,
                  owner_email: email,
                  password: password
              });
              alert(response.data.message);
          } catch (error) {
              alert(error.response?.data?.message || "Profile update failed");
          }
        
      }    

   // 2. Function for Theme Update (Handles the File)
      const handleSaveTheme = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('app_name', appName);
          formData.append('primary_color', primaryColor);
          if (logo) formData.append('app_logo', logo);

          try {
              const response = await axios.post('http://localhost:8000/api/settings/updateSettings', formData, {
                  headers: { 'Content-Type': 'multipart/form-data' }
              });
              alert(response.data.message);
          } catch (error) {
              alert(error.response?.data?.message || "Theme update failed");
          }

        }


  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800"> Settings</h1>

      {/* 2. The Tab BUttons */}
      <div className="flex border-b border-gray-200 mb-6">
        <button onClick={() => setActiveTab('profile')}
          className={`py-2 px-4 font-medium transition $ {activeTab === 'profile' ? 'border-b-2 border-indigo-600 text-indigo-600 : 'text-gray-500 hover:text-gray-700'}`} >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('theme-setting')}
          className={`py-2 px-4 font-medium transition ${activeTab === 'theme-setting'
              ? 'border-b-2 border-indigo-600 text-indigo-600'
              : 'text-gray-500 hover:text-gray-700'}`}>
          Theme Setting
        </button>
      </div>

      {/* 3. The Content (Conditional Rendering) */}
      <div className="mt-4">
        {activeTab === 'profile' && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input type="text" value={userName} onChange={(e) => 
                setUserName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your Name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Owner Email</label>
              <input type="email" value={email} onChange={(e) =>
                setEmail(e.target.value) }  
              className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700"> Password</label>
              <input type="password" value={password} onChange={(e) => 
                setPassword(e.target.value)} 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your password" />
            </div>

            <button onClick={handleSaveProfile} className="bg-indigo-600 text-white px-4 py-2 rounded">Save Profile</button>
          </form>
        )}

        {activeTab === 'theme-setting' && (
          <form className="space-y-4">
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">App Logo</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-400 transition-colors cursor-pointer group">
                <div className="space-y-1 text-center">
                  {/* Icon */}
                  <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" 
                      onChange={(e)=>{
                          const file = e.target.files[0];
                          if(file){
                            setLogo(file);
                            setLogoPreview(URL.createObjectURL(file));  //create a temp URL for the preview
                          }
                      }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">App Name</label>
              <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter App Name" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Theme Color</label>
                <div className="mt-1 flex items-center gap-2">
                  {/* 1. The Color Preview/Picker Square */}
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-gray-300">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="absolute -inset-1 h-16 w-16 cursor-pointer"
                    />
                  </div>

                  {/* 2. The Text Input for Hex Code */}
                  <input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    placeholder="#000000"
                    className="block w-full border border-gray-300 rounded-md p-2 text-sm font-mono focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Click the box to pick or type a hex code.</p>
            </div>

            <button onClick={handleSaveTheme}  className="bg-green-600 text-white px-4 py-2 rounded">Update Theme Setting</button>
          </form>
        )}
      </div>
    </div>
  )
};


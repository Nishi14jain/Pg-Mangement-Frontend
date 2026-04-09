 const handleSubmit = async  (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append("app_name", appName);
    formData.append("logo", logo);
    formData.append("user_name", userName);
    formData.append("email", email);

    try{
      const res = await axios.post(
        "http://127.0.0.1:8000/api/settings",
        formData
        
      );

      alert("Settings saved");
      console.log(res.data); 

    }catch(err){
      console.log(err);
    }

    console.log("Form Data Ready:" , appName, logo, userName, email);
    

}; 

return (
    <div className="p-6 bg-gray-100 min-h-screen">

          <h1 className="text-3xl font-semibold mb-6 ">Settings </h1>
          <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 space-y-8">
            {/* AppSettings */}

            <div>
              <h2 className="block mb-1 text-gray-600">AppSettings</h2>

              <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-gray-600"> App Name </label>
                    <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)}
                          className="w-full border rounded-lg p-2"
                          placeholder="Enter App Name"/>
                  </div>

                  <div> 
                    <label className="block mb-1 text-gray-600">
                      App Logo
                    </label>
                    <input type="file"
                      onChange={(e) => setLogo(e.target.files[0])}
                      className="w-full border rounded-lg p-2" />
                  </div>
              </div>
            </div>

            {/*User Settings */}

            <div>
              <h2 className="text-xl font-semibold mb-4"> User Settings</h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-600">
                    Name
                  </label>
                  <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}
                    className="w-full border rounded-lg p-2" placeholder="Enter Name"/>
                 </div>

                 <div>
                   <label className="block mb-1 text-gray-600">
                      Email
                   </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg p-2" placeholder="Enter Email"  />
                 </div>
              </div>
            </div>

            {/*Save Button*/}

            <div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Save Settings
            </button>
            </div>


          </form>
    </div>

  );
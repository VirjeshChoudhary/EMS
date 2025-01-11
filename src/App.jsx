/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] =  useContext(AuthContext)
  // console.log(authData);
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData= JSON.parse(loggedInUser)
      // console.log(userData,"jesh");
      
      setUser(userData.role) 
      setLoggedInUserData(userData.data); 
    }

  },[])
  
  const handleLogin = (email, password) => {
    if (userData && userData.admin.find((e)=>e.email==email && e.password==password)) {
      const admin=userData.admin.find((e)=>e.email==email && e.password==password);
      if(admin){
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data : admin}))
      }
    } else if (userData) {
      console.log(userData);
      const employee=userData.employees.find((e)=>email==e.email && e.password==password);
      if (employee) {
        // console.log("virjesh");
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data : employee}))
      }
    } else {
        alert("Invalid Credentials");
    }
  };

  // console.log(data);
  
  useEffect(() => {
    setLocalStorage();
    
  },);
  // const disableRightClick = (e) => {
  //   e.preventDefault();
  // };  onContextmenu={}

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user==='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;

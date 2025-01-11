/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className=" p-7 h-screen w-full">
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../other/Header'
import TaskCounting from '../other/TaskCounting'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className=' p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskCounting data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
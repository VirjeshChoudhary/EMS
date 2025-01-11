/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const initialFormData = {
    taskTitle: '',
    date: '',
    assignTo: '',
    category: '',
    description: ''
  };
  const [userData,setUserData] =  useContext(AuthContext)
  const [formData, setFormData] = useState(initialFormData);
  const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      taskTitle: formData.taskTitle,
      date: formData.date,
      category: formData.category,
      description: formData.description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    setNewTask(task);
    const data=userData.employees;
    const admin=userData.admin;
    data.forEach((elem) => {
      if(formData.assignTo==elem.firstName){
        elem.tasks.push(newTask);
        elem.taskCount.newTask=elem.taskCount.newTask+1;
      }
    });
    
    setUserData({employees:data,admin});
    console.log(data);
    setFormData(initialFormData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex w-full items-start flex-wrap justify-between"
        action=""
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleInputChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              name="assignTo"
              value={formData.assignTo}
              onChange={handleInputChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
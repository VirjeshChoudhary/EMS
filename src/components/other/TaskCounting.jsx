/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TaskCounting = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
             <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
             <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
             <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
             <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
             <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
             <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
             <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
             <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskCounting
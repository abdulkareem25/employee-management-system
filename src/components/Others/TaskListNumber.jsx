import React from 'react'

const TaskListNumber = ({ active, completed, newTask, failed }) => {
  return (
    <div className='p-9 bg-[#1c1c1c]'>

      <div className='flex justify-between '>

        <div className='h-25 w-72 px-10 py-5 bg-blue-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>{active}</h1>
          <h1 className='font-semibold text-xl'>Active Task</h1>
        </div>

        <div className='h-25 w-72 px-10 py-5 bg-orange-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>{newTask}</h1>
          <h1 className='font-semibold text-xl'>New Task</h1>
        </div>

        <div className='h-25 w-72 px-10 py-5 bg-yellow-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>{completed}</h1>
          <h1 className='font-semibold text-xl'>Completed Task</h1>
        </div>

        <div className='h-25 w-72 px-10 py-5 bg-red-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>{failed}</h1>
          <h1 className='font-semibold text-xl'>Failed Task</h1>
        </div>

      </div>

    </div>
  )
}

export default TaskListNumber

import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='mt-4 p-9 bg-[#1c1c1c]'>
      
      <div className='flex mt-10 justify-between '>

        <div className='h-25 w-72 px-10 py-5 bg-blue-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>0</h1>
          <h1 className='font-semibold text-xl'>New Task</h1>
        </div>
        
        <div className='h-25 w-72 px-10 py-5 bg-orange-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>0</h1>
          <h1 className='font-semibold text-xl'>Completed Task</h1>
        </div>

        <div className='h-25 w-72 px-10 py-5 bg-red-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>0</h1>
          <h1 className='font-semibold text-xl'>Accepted Task</h1>
        </div>

        <div className='h-25 w-72 px-10 py-5 bg-yellow-500 rounded-2xl'>
          <h1 className='font-semibold text-3xl'>0</h1>
          <h1 className='font-semibold text-xl'>Failed Task</h1>
        </div>

      </div>

    </div>
  )
}

export default TaskListNumber

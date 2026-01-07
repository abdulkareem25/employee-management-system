import React from 'react'

const FailedTask = ({ task }) => {
    return (
        <div className='h-72 w-72 p-5 bg-red-500 rounded-2xl shrink-0 flex justify-between flex-col'>
            <div className='flex justify-between items-center'>
                <h3 className='flex px-2.5 py-0.5 bg-red-700 text-white items-center justify-center font-semibold rounded-md'>{task.category}</h3>
                <h4 className='font-semibold'>{task.taskDate}</h4>
            </div>
            <h1 className='font-semibold text-2xl'>
                {task.taskTitle}
            </h1>
            <p className='-mt-7'>
                {task.taskDescription}
            </p>
            <div className="btns flex justify-center">
                <button className='px-5 py-2 bg-gray-500 rounded-full text-white font-semibold cursor-not-allowed'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask

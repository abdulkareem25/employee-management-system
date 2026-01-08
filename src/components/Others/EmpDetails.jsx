import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const EmpDetails = () => {

      const employees = useContext(AuthContext).employees;

      return (
            <div className='p-7 pt-2 h-65 bg-[#1c1c1c] rounded'>
                  <div className='mt-5 h-10 p-4 bg-gray-800 flex justify-between items-center text-center rounded'>
                        <div className='w-1/5'>Employee Name</div>
                        <div className='w-1/5 text-blue-500'>Active</div>
                        <div className='w-1/5 text-orange-500'>New Task</div>
                        <div className='w-1/5 text-yellow-500'>Completed</div>
                        <div className='w-1/5 text-red-500'>Failed</div>
                  </div>
                  <div id='empdetails' className="flex flex-col mt-3 gap-2 overflow-y-auto h-40">
                        {employees && employees.map((emp, index) => (
                              <div key={index} className='h-10 p-4 border-2 border-gray-800 flex justify-between items-center text-center rounded'>
                                    <div className='w-1/5'>{emp.firstName}</div>
                                    <div className='text-blue-500 w-1/5'>{emp.taskCount.active}</div>
                                    <div className='text-orange-500 w-1/5'>{emp.taskCount.newTask}</div>
                                    <div className='text-yellow-500 w-1/5'>{emp.taskCount.completed}</div>
                                    <div className='text-red-500 w-1/5'>{emp.taskCount.failed}</div>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default EmpDetails

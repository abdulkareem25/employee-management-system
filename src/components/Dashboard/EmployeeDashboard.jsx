import React from 'react'
import TaskList from '../TaskList/TaskList'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'


const EmployeeDashboard = () => {
  return (
    <div className='h-screen w-screen box-border bg-[#000000]'>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard

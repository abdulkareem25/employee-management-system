import React from 'react'
import TaskList from '../TaskList/TaskList'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'


const EmployeeDashboard = ({ loggedInUser }) => {
  const employee = loggedInUser;
  return (
    <div className='h-screen w-full box-border bg-[#000000] flex flex-col justify-between'>
      <Header name={employee.firstName}/>
      <TaskListNumber 
        active={employee.taskCount.active}
        newTask={employee.taskCount.newTask}
        completed={employee.taskCount.completed}
        failed={employee.taskCount.failed}
      />
      <TaskList tasks={employee.tasks}/>
    </div>
  )
}

export default EmployeeDashboard

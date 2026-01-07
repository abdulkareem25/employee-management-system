import React from 'react'
import ActiveTask from './ActiveTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ tasks }) => {
    return (
        <div className='p-10 bg-[#1c1c1c]'>
            <div id='tasklist' className='flex gap-6.5 overflow-x-auto '>
                {tasks.map((task, idx) => {
                    if (task.active) {
                        return <ActiveTask key={idx} task={task} />
                    } else if (task.newTask) {
                        return <NewTask key={idx} task={task} />
                    } else if (task.completed) {
                        return <CompletedTask key={idx} task={task} />
                    } else if (task.failed) {
                        return <FailedTask key={idx} task={task} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList

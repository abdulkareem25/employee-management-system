import React from 'react'

const AdminForm = () => {
    return (
        <form className='flex p-7 h-85 bg-[#1c1c1c] justify-between rounded'>
            <div className='flex flex-col gap-1.5'>
                <div>
                    <h1 className='formhead'>Task Title</h1>
                    <input className='formborder' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h1 className='formhead'>Date</h1>
                    <input className='formborder' type="date" placeholder='dd/mm/yyyy' />
                </div>
                <div>
                    <h1 className='formhead'>Asign to</h1>
                    <input className='formborder' type="text" placeholder='employee name' />
                </div>
                <div>
                    <h1 className='formhead'>Category</h1>
                    <input className='formborder' type="text" placeholder='design, dev, etc...' />
                </div>
            </div>
            <div>
                <div>
                    <h1 className='formhead'>Description</h1>
                    <textarea className='h-50 w-125 border rounded'></textarea>
                </div>
                <button className='h-10 w-125 mt-2 bg-amber-500 rounded'>Create Task</button>
            </div>
        </form>
    )
}

export default AdminForm

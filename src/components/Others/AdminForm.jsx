import React from 'react'

const AdminForm = () => {
    return (
        <div>
            <form className='flex p-7 h-85 mt-5 bg-[#1c1c1c] justify-between rounded'>
                <div className='flex flex-col gap-1.5'>
                    <div>
                        <h1 class='formhead'>Task Title</h1>
                        <input class = 'formborder' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h1 class='formhead'>Date</h1>
                        <input class = 'formborder' type="date" placeholder='dd/mm/yyyy' />
                    </div>
                    <div>
                        <h1 class='formhead'>Asign to</h1>
                        <input class = 'formborder' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h1 class='formhead'>Category</h1>
                        <input class = 'formborder' type="text" placeholder='design, dev, etc...' />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class='formhead'>Description</h1>
                        <textarea className='h-50 w-125 border rounded'></textarea>
                    </div>
                    <button className='h-10 w-125 mt-2 bg-amber-500 rounded'>Create Task</button>
                </div>
            </form>

            <div>

            </div>
        </div>
    )
}

export default AdminForm

import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider";

const AdminForm = () => {

    const employees = useContext(AuthContext).employees;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const taskData = {
            taskTitle: title,
            taskDate: date,
            assignTo: assignTo,
            category: category,
            taskDescription: desc,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        employees.forEach(emp => {
            if(emp.firstName === assignTo){
                emp.tasks.push(taskData);
                emp.taskCount.newTask += 1;
            }
        });

        localStorage.setItem('employees', JSON.stringify(employees));
        window.location.reload();
        
        setTitle('');
        setDate('');
        setAssignTo('');
        setCategory('');
        setDesc('');

    }

    return (
        <form 
        onSubmit={(e) => submitHandler(e)}
        className='flex p-7 h-85 bg-[#1c1c1c] justify-between rounded'>
            <div className='flex flex-col gap-1.5'>
                <div>
                    <h1 className='formhead'>Task Title</h1>
                    <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='formborder' 
                    type="text" 
                    placeholder='Make a UI design' />
                </div>
                <div>
                    <h1 className='formhead'>Date</h1>
                    <input 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='formborder' 
                    type="date" 
                    placeholder='dd/mm/yyyy' />
                </div>
                <div>
                    <h1 className='formhead'>Asign to</h1>
                    <input 
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    className='formborder' 
                    type="text" 
                    placeholder='employee name' />
                </div>
                <div>
                    <h1 className='formhead'>Category</h1>
                    <input 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='formborder' 
                    type="text" 
                    placeholder='design, dev, etc...' />
                </div>
            </div>
            <div>
                <div>
                    <h1 className='formhead'>Description</h1>
                    <textarea 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className='h-50 w-125 border rounded' />
                </div>
                <button className='h-10 w-125 mt-2 bg-amber-500 rounded cursor-pointer active:scale-95 transition duration-250'>Create Task</button>
            </div>
        </form>
    )
}

export default AdminForm

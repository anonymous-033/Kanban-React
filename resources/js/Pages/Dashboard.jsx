import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Card from "../Components/kanban_components/Card";
import Checkbox from '@/Components/Checkbox';
import Draggable from 'react-draggable';
import { useState, useEffect } from 'react';

// Saving data in local storage
const oldTasks = localStorage.getItem("tasks");
console.log("Old Tasks ", oldTasks);

export default function Dashboard({ auth }) {

    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    
    // console.log("Tasks ",tasks);
    const [activeTask, setActiveTask] = useState(null);

    //delete element from a card
    const deleteTask = (id) => {
        const tasksAfterDeletion = tasks.filter((task, index)=>{
            return index!=id
        })
        setTasks(tasksAfterDeletion);
    }

    const onDrop = (status, position) => {
        console.log(activeTask," is going to placed in ", status, " at position ", position);
        const taskToMove = tasks[activeTask];
        
        const updatedTasks = tasks.filter((task, index)=>{
            console.log("Index ", index);
            return index != activeTask;
        })

        updatedTasks.splice(position, 0, {
            ...taskToMove, 
            status: status
        })

        setTasks(updatedTasks);
    }
    // console.log(auth);

    


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kanban Board</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* <h1>{taskList[0].status}</h1> */}
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div> */}
                    <div className="container">
                        {/* {
                            statusList.map((status) => 
                                (<Card status={status.status}/>)
                            )
                        } */}
                        <Card status="To do" setTasks={setTasks} tasks={tasks} deleteTask={deleteTask} setActiveTask={setActiveTask} onDrop={onDrop} color="#f1948a"/>
                        <Card status="In progress" setTasks={setTasks} tasks={tasks} deleteTask={deleteTask} setActiveTask={setActiveTask} onDrop={onDrop} color="#f9e79f"/>
                        <Card status="Completed" setTasks={setTasks} tasks={tasks} deleteTask={deleteTask} setActiveTask={setActiveTask} onDrop={onDrop} color="#82e0aa"/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

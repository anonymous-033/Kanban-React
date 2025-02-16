import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Card from "../Components/kanban_components/Card";
import Checkbox from '@/Components/Checkbox';
import Draggable from 'react-draggable';
import { useState } from 'react';


export default function Dashboard({ auth }) {
    // console.log(auth);

    // console.log("Status", status);
    // const [tasks, setTasks] = useState([]);

    // console.log("tasks", tasks);


    // const addElement = (inputValue, status) => {
    //     console.log("id ",tasks.length, "content", inputValue, "status", status);
    //     const newComponent = {
    //     id: tasks.length, // Use length as a simple unique ID
    //     content: inputValue,
    //     status: status
    //     };
        
    //     setTasks([...tasks, newComponent]);
    //     // event.preventDefault();
    // };

    // const deleteElement = (id) => {
    //     console.log(id);
    //     const newTasks = tasks.filter( component => component.id != id)
    //     setTasks(newTasks);
    // }
    
    // if(activeTask == null || activeTask == undefined) return;

    // const updatedTasks = tasks.filter((task, index) => index != activeTask);

    // updatedTasks.splice(index, 0, {
    //     ...taskToMove,
    //     status: status
    // })  

    // setTasks(updatedTasks);

    var taskIndex = -1;

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
                        <Card status="To do" />
                        <Card status="In progress" />
                        <Card status="Completed" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

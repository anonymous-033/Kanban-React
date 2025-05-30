import React from 'react'
import DeleteIcon from "../../assets/delete.png"
// import { usePage } from '@inertiajs/react';

const TaskCard = ({id, content, deleteTask, setActiveTask}) => {
  // console.log("task id ", id);
  // console.log("Active task id ", activeTask);
  // console.log(content);
  // const { taskList } = usePage().props;
  return (
    <article className="task_card" draggable onDragStart={()=>{setActiveTask(id)}} onDragEnd={()=>{setActiveTask(null)}}>
        <div className="task_content">
        {/* <h1>{taskList[0].task}</h1> */}
            <h1>{content}</h1>
        </div>
        <div className="task_delete" onClick={()=>{deleteTask(id)}}>
            <img 
              className="task_delete_icon" 
              src={DeleteIcon} 
              alt="" />
        </div>

    </article>
    // <article 
    //   className="task_card" 
    //   draggable 
    //   onDragStart={() => {setActiveTask(id)}} 
    //   // onDragEnd={() => {setActiveTask(null)}}
    // >
    //     <div className="task_content">
    //     {/* <h1>{taskList[0].task}</h1> */}
    //         <h1>{content}</h1>
    //     </div>
    //     <div className="task_delete">
    //         <img onClick={() => onDelete(id)} className="task_delete_icon" src={DeleteIcon} alt="" />
    //     </div>

    // </article>
  )
}

export default TaskCard;
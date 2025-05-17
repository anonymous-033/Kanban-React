import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardInput from './CardInput';
import TaskCard from './TaskCard';
import DropArea from './DropArea';
// import { usePage } from '@inertiajs/react';



const Card = ({ status, setTasks, tasks, deleteTask, setActiveTask, onDrop, color }) => {
  // const { taskList } = usePage().props;


  //add new element in a card
  // const addElement = (inputValue, status) => {
  //   const uniqueId = uuidv4();
  //   console.log("id ",tasks.length, "content", inputValue, "status", status);
  //   const newComponent = {
  //     id: tasks.length, // Use length as a simple unique ID
  //     content: inputValue,
  //     status: status
  //   };
    
  //   setTasks([...tasks, newComponent]);
  //   // event.preventDefault();
  // };


  
  // console.log("Random ",activeTask);

  
  // const showCardId = (status, position) => {
  //   console.log(activeTask + " is going to place into " + status + " and at the position " + position);
  // }

  return (
    <div className="card">
        {/* <h1>{taskList[0].task}</h1> */}
        <h1 className="heading" style={{backgroundColor: color}}>
            {status}
        </h1>
        <CardInput status={status} setTasks={setTasks}/>
        <DropArea onDrop={()=>{onDrop(status, 0)}}/>
        {tasks.map((singleTask,index)=>{
          return (
            singleTask.status == status &&
            <React.Fragment key={index} >
              <TaskCard
                id={index}
                content={singleTask.task}
                deleteTask={deleteTask}
                setActiveTask={setActiveTask}
              />
              <DropArea onDrop={()=>{onDrop(status, index+1)}}/>
            </React.Fragment>
          )
        })}
        {/* <TaskCard 
          
        /> */}
        {/* <div className="content">
            <CardInput addElement={addElement} status={status}/>
            <DropArea />
            <DropArea 
              showCardId={showCardId} 
              status={status} 
              index={0}
              activeTask={activeTask}
            />
            {tasks.map((singleTask) => {
                return (
                  <React.Fragment>
                    <TaskCard 
                      key={singleTask.id}
                      id={singleTask.id} 
                      content={singleTask.content} 
                      onDelete={deleteElement} 
                      activeTask={activeTask}
                      setActiveTask = {setActiveTask}
                    />
                    <DropArea />
                    <DropArea 
                      showCardId={showCardId} 
                      status={status} 
                      index={singleTask.id+1}
                      activeTask={activeTask}
                    />
                  </React.Fragment>
                )}
            )}
        </div>
        <h1>Active Card: {activeTask}</h1> */}
    </div>
  )
}

export default Card;

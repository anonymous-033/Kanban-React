import React, { useState } from 'react';
// import '../../css/custom.css';

const CardInput = ({status, setTasks}) => {

  const [taskData, setTaskData] = useState({
    task: "",
    status: status
  });
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const value =  event.target.value;
    setTaskData(prev => {
      return {...prev, task: value}
    })
    console.log("Task Data inside ", taskData);
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    if(inputValue.trim() != '') {
      setTasks(prev => {
        return [...prev, taskData];
      })
    }
    console.log("Input Value inside ", inputValue);

    setInputValue(''); // Clear the input field after adding
  };
  

  // console.log("Input Value ", inputValue);

  return (
    <div className="card_input">
        <form onSubmit={handleAddClick}  className="card_form" >
            <input 
              type="text" 
              className="task_input" 
              placeholder="+ Enter your task" 
              onChange={handleInputChange} 
              value={inputValue}
            />
            <button className="task_submit">Add</button>
        </form>
    </div>
  )
}

export default CardInput;
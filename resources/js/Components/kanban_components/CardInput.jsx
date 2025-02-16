import React, { useState } from 'react';
// import '../../css/custom.css';

const CardInput = ({addElement, status}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);  
  };

  const handleAddClick = (event) => {
    if(inputValue.trim() != '') {
      addElement(inputValue, status);
    }
    setInputValue(''); // Clear the input field after adding
    event.preventDefault();
  };
  

  console.log(inputValue); 

  return (
    <div className="card_input">
        <form className="card_form" >
            <input 
              type="text" 
              onChange={handleInputChange} 
              className="task_input" 
              placeholder="+ Enter your task" 
              value={inputValue}
            />
            <button onClick={handleAddClick} className="task_submit">Add</button>
        </form>
    </div>
  )
}

export default CardInput;
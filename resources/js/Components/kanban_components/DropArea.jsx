import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false);
    return (
      <div
          onDragEnter={() => setShowDrop(true)} 
          onDragLeave={() => setShowDrop(false)}
          className={showDrop? "drop_area": "hide_area"} 
          onDrop={()=>{
            onDrop();
            setShowDrop(false);
          }}
          onDragOver={(e)=>e.preventDefault()}
        //   onDrop={() => {
        //       console.log("Dropped Task ID:", activeTask); // Check if this is null or valid
        //       console.log(activeTask + " is going to place into " + status + " at position " + index);
        //       showCardId(status, index);
        //       setShowDrop(false);
        //   }}
        //   onDragOver={(e) => {e.preventDefault()}}
      >
              Drop Here
      </div>
    )
}

export default DropArea;
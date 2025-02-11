import React, { useState } from 'react'

const Tooltip = ({text, text2, children}) => {

  const [visible, setVisible] = useState(false)
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && 
      <div>
        <h2 className="tooltip" style={{width: "100px", height: '50px', background:"red", borderRadius: '5px', padding: '5px', color:"white"}}>{text}</h2>
      </div>
      }
    </div>
    
  );
}

export default Tooltip
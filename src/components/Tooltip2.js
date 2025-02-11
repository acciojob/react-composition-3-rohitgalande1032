import React, { useState } from 'react'

const Tooltip2 = ({text, children}) => {
  const [visible, setVisible] = useState(false)
    return (
      <div
        className="tooltip-container"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        data-testid="tooltip-container"
      >
        {children}
        {visible && 
        <div>
          <p className="tooltip" data-testid="tooltip" style={{width: "100px", height: '50px', background:"red", borderRadius: '5px', padding: '5px', color:"white"}}>{text}</p>
          
        </div>
        }
      </div>
      
    );
}

export default Tooltip2
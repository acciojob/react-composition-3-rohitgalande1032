import React, { useState } from 'react'

const Tooltip = ({text, children}) => {

  const [visible, setVisible] = useState(false)
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltiptext" style={{width: "100px", height: '50px', background:"red", borderRadius: '5px', padding: '5px', color:"white"}}>{text}</div>}
    </div>
  );
}

export default Tooltip
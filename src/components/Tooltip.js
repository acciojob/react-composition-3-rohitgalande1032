import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div style={{width: '100px', height:'30px', background:'red', color:'white', padding:"10px", borderRadius:'5px'}} className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;

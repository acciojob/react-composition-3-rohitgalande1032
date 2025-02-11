
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip.js";
import Tooltip2 from "./Tooltip2.js";

const App = () => {
  return (
    <div>
         <Tooltip text="This is a tooltip!">
            <h2 className="tooltip">Hover over me</h2>
        </Tooltip>

        <Tooltip2 text="This is another tooltip">
            <p className="tooltip">Hover over to see another tooltip</p>
        </Tooltip2>
    </div>
  )
}

export default App

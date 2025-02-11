
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip.js";

const App = () => {
  return (
    <div>
         <Tooltip text="This is a tooltip!">
            <h1 className="tooltip">Hover over me</h1>
        </Tooltip>
    </div>
  )
}

export default App

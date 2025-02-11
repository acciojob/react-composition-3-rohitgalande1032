
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip.js";

const App = () => {
  return (
    <div>
         <Tooltip text="This is a tooltip!">
            <h1 className="tooltip">Hover over me</h1>
        </Tooltip>

        <Tooltip text="This is another tooltip">
            <h2 className="tooltip">Hover over to see another tooltip</h2>
        </Tooltip>
    </div>
  )
}

export default App

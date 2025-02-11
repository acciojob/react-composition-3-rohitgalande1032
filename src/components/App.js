import React from "react";
import Tooltip from "./Tooltip";


const App = () => {
  return (
    <div className="app">
      <h2>React Tooltip Example</h2>
      
      <Tooltip text="I am a Tooltip!">
        <h2 className="tooltip-btn">Hover over me</h2>
      </Tooltip>

      <Tooltip text="Another tooltip message">
        <p className="tooltip-text">Hover over this text</p>
      </Tooltip>
    </div>
  );
};

export default App;

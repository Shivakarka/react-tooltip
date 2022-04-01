import React from "react";
import Tooltip from "./Tooltip";
import "./App.css"; 


export default function App() {
  return (
    <div className="App">
      <h1>React tooltip</h1>
      <p> Try hovering the content below </p>

      <div className="wrapper">
      {/* position prop can be top,right,left,bottom || default is top*/}
        <Tooltip position="left">          
          <button className="content">
            Hover over me!!
          </button>
        </Tooltip>      
         
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({children,position}) => {
  let timeout;
  const [active, setActive] = useState(false);      

  //Below setTimeout function changes the state to true after a delay as specified in 2nd argument
  //in absence of 2nd argument , the tooltip display will be instant
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 200);
  };

  //Below function clears the timeout from above and changes the state back to false
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"

      // The below two eventListeners control when to display the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
       
      {/* {the children prop here is the button where we need to hover upon} */}
      
      {children}

      {/* The tooltip is displayed only when the active variable in useState hook is true */}
      {active && (
        <div className={`Tooltip-Tip ${position || "top"}`}>

          {/* Tooltip content */}
          {`This is a ${position || "top"} tooltip!!!`}
        </div>
      )}

    </div>
  );
};

export default Tooltip;

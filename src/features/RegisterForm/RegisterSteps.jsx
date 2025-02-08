import React, { useState } from "react";
import "./RegisterSteps.css";
import { Link } from "react-router-dom";

const RegisterSteps = ({stepHighlight,setStepHighlight,step, setStep}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="#step1" onClick={()=>{setStep(1)}} className={`${step ===1 ?'sidebar-active':""}`}>Step 1</Link>
          </li>
          <li>
            <Link to="#step2" onClick={()=>{setStep(2)}} className={`${step ===2 ?'sidebar-active':""}`}>Step 2</Link>
          </li>
          <li>
            <Link to="#step3" onClick={()=>{setStep(3)}} className={`${step ===3 ?'sidebar-active':""}`}>Step 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RegisterSteps;

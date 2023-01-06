import './css/Poster.css'
import { useState } from "react";

function Poster() {
    const [leftInMouse, setLeftInMouse] = useState(false);

    const leftMouse = (event) => {
        setLeftInMouse(!leftInMouse)
    }
    
    const [rightInMouse, setRightInMouse] = useState(false);

    const rightMouse = (event) => {
        setRightInMouse(!rightInMouse)
    }
    
    //onClick시 poster 넘어가는 기능 추가

    return (
        <div className="poster">
          <ul>
            <div className = "arrowBtn" onMouseEnter  =  {leftMouse} onMouseLeave = {leftMouse} >  
              <img src = "images/left-arrow.png" className = {leftInMouse ? "arrowImg" : "hiddenBtn" }  alt = ""></img>
            </div>
            <li><img src="images/poster1.jpeg" alt=""/></li>
            <li><img src="images/poster2.jpeg" alt=""/></li>
            <li><img src="images/poster3.jpeg" alt=""/></li>
            <li><img src="images/poster4.jpeg" alt=""/></li>
            <li><img className = "hiddenImg" src="images/poster5.jpeg" alt=""/></li>
            <li><img className = "hiddenImg" src="images/poster6.jpeg" alt=""/></li>
            <div className = "arrowBtn" onMouseEnter = {rightMouse} onMouseLeave = {rightMouse}>
              <img src = "images/right-arrow.png" className = {rightInMouse ? "arrowImg" : "hiddenBtn" }  alt = ""></img>
            </div>
          </ul>
        </div>
    );
  }
  
export default Poster;
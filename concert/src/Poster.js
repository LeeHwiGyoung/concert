import './css/Poster.css'
import {  useState } from "react";

function Poster() {
    const [leftInMouse, setLeftInMouse] = useState(false);
    const leftMouse = (event) => {
        setLeftInMouse(!leftInMouse)
    }
    
    return (
        <div className="poster">
          <ul>
            <div id = "leftBtn" onMouseEnter  =  {leftMouse} onMouseLeave = {leftMouse}>
              <img src = "images/left-arrow.png" className = {leftInMouse ? "leftImg" : "hidden"} alt = ""></img>
            </div>
            <li><img src="images/poster1.jpeg" alt=""/></li>
            <li><img src="images/poster2.jpeg" alt=""/></li>
            <li><img src="images/poster3.jpeg" alt=""/></li>
            <li><img src="images/poster4.jpeg" alt=""/></li>
            <li><img src="images/poster5.jpeg" alt=""/></li>
            <li><img src="images/poster6.jpeg" alt=""/></li>
            <div id = "rightBtn"></div>
          </ul>
        </div>
    );
  }
  
export default Poster;
import { useRef } from 'react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'
import { throttle } from 'lodash'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Nav() {
  const scrollRef = useRef(null);
  const headerHeight = useSelector((state)=>state.header.headerHeight)
  
  const navigate = useNavigate();

  const onClickNav = (event) => {
    console.log(event);  
    navigate("/"+event.target.innerText);
  }
  const onClickCalendarNav = (event) => {
    navigate("/Calendar");
  }
  
  const onClickHome = () => {
    navigate("/");
  }
  const handleScroll = () => {
    if(window.scrollY > headerHeight){
        scrollRef.current.classList.add("fixedNav");
      }
    else{
        scrollRef.current.classList.remove("fixedNav")
      }
  }

  useEffect (() => {
    window.addEventListener('scroll' , handleScroll);
    return () => {
      window.removeEventListener('scroll' , handleScroll);
    }
  },[])
  
  return (
      <div className="nav" ref = {scrollRef} id = "nav">
        <div className='navContainer'>
          <Link className = 'navLink' to ="/">
            <img className='navLogo' src = "Images/logo.png" alt = ""/>
          </Link>
          <ul className = "navMenu">
            <Link className = 'navLink' to ="/">
              <li className = "navItem">HOME</li>
            </Link>
            <Link className = 'navLink' to ="/Calendar">
              <li className = "navItem">CALENDAR</li>
            </Link>
            <Link className = 'navLink' to ="/Community">
              <li className ="navItem community">COMMUNITIY</li>
            </Link>
          </ul>
        </div>
      </div>
  );
  }
  
  export default Nav;
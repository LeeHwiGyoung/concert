import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import {setHeaderHeight} from './headerSlice';

function Header({children}) {  
  const headerRef = useRef(null);
  const height = useSelector((state)=>state.header.headerHeight)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderHeight(headerRef.current.clientHeight));  
  } ,[])

    return (
        <div className="header" ref = {headerRef}>
          {children}
        </div>
    );
  }
  
  export default Header;
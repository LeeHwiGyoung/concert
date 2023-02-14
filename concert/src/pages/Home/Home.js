import './Home.css';
import Nav from '../../components/Nav.js';
import Poster from '../../components/Poster.js';
import Header from '../../components/Header.js';
import axios from "axios";
import { isAuth } from '../../utils/JwtUtils';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie , removeCookie } from '../../utils/cookie';
import { resetAccessToken } from '../../store/authSlice';
import { setCurrentUser } from '../Login/loginSlice';


function Home() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const currentUser = useSelector((state) => state.login.currentUser);
  //const refreshToken = useSelector((state) => state.auth.refreshToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(resetAccessToken());
    removeCookie("refreshToken");
    console.log("currentUser", currentUser , "accessToken" , accessToken);
    navigate("/");
  }

  useEffect(() => {
    if(!isAuth(accessToken)){ //accessToken이 유효하지 않으면
      dispatch(setCurrentUser(""));
    }
    console.log("accessToken" , accessToken)
    console.log(getCookie("refreshToken"));
  }, [accessToken])

    return (
      <div id = "wrap">
        <div className ="blankPage">
        </div>
        <Poster />
      </div>
    );
  }
  
  export default Home;
  
import axios from "axios";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {changeEmail} from "./loginSlice"
import { getCookie, setCookie } from "../../components/cookie";
import './Login.css'

function Login() {
    const email = useSelector((state) => state.login.email)
    const dispatch = useDispatch()

    //const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [loginErrMsg , setLoginErrMsg] = useState(false) 
    const  data = JSON.stringify({   
        "userEmail" : email,
        "password" : password 
    });

    const navigate = useNavigate();
    const onLoginSuccess = (res) => {
        if (res.data.status === 'OK'){
            const {accessToken} =  res.data.data.accessToken;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            setCookie('refreshToken', res.data.data.refreshToken , {
                httpOnly: true,
                path: "/",
                secure: true,
                sameSite: "None"}); 
            console.log(getCookie("refreshToken"));
            navigate("/")
        }
    }
   
    const postLogin = async () => {
        axios.post("http://3.37.69.149:8080/users/login", data
             ,   { 
                headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(onLoginSuccess)
            .then(err => {
               console.log(err);
            })
    }

   

    const loginSubmit = async (event) => {
        event.preventDefault();
        postLogin();
    }


    const handleEmail = (event) => {    
        dispatch(changeEmail(event.target.value));
    }
    
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }


    return (
        <div id = "loginWrap">
            <h1>로그인</h1>
            <form id = "loginForm">
                <input type = "text" id = "idInput" placeholder="Email"  onChange = {handleEmail}/>
                <br/>
                <input type = "password" id = "passwordInput"placeholder="password" onChange = {handlePassword} value = {password}/>
                <div className= {loginErrMsg ? "errmsg" : "nonemsg"}>아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.</div>
                <button type = "submit" id = "loginBtn" onClick={loginSubmit}>로그인</button>
            </form>
            <hr/>
            <div id = "socialLogin">
                <h3>SNS로 로그인하기</h3>
                <button type = "button" id ="naver">N</button>
                <button type = "button" id ="kakao">K</button>
                <button type = "button" id ="facebook">F</button>
                <button type = "button" id ="apple">A</button>
            </div>
            <div id = "signUp">
                <a id="join" href = "/join">회원가입 하기</a>
            </div>
            <div id = "find">
                <ul>
                    <li id = "findId">
                        <a href = "/">아이디 찾기</a>
                    </li>
                    <li id = "findPassword">
                        <a href = "/">패스워드 찾기</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Login;


  
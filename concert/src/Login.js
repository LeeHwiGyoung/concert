import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Login.css'

function Login() {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [loginErrMsg , setLoginErrMsg] = useState(false) 
    const  data = JSON.stringify({   
        "userEmail" : email,
        "password" : password 
    });

    const navigate = useNavigate();

    const postLogin = async () => {
        axios.post("http://3.37.69.149:8080/users/login", data
             ,   { 
                headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res =>  {
                console.log(res)
                console.log(res.data)
                if(res.data.status === 'OK'){
                    localStorage.setItem('accesstoken' , res.data.data.accessToken);
                    localStorage.setItem('expiredTime', res.data.data.expiredTime);
                    localStorage.setItem('refreshToken', res.data.data.refreshToken); 
                    navigate("/")
                }
            })
            .then(err => {
               console.log(err);
            })
    }

   

    const loginSubmit = async (event) => {
        event.preventDefault();
        postLogin();
    }


    const handleEmail = (event) => {    
        setEmail(event.target.value);
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
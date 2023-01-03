import { useState } from "react";
import './css/Login.css'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const  data = {   
        "email" : email,
        "password" : password 
    }

    const loginSubmit = async (event) => {
        event.preventDefault();
        console.log(email, password)
        /*fetch ('https://abf7b030-3326-41fe-8870-3487174ce715.mock.pstmn.io/login' , {
             method : "POST",
             headers : {

             },
             body : JSON.stringify(data)
             })
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(res=> {
            console.log(res);
        });*/

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
                <input type = "password" id = "passwordInput"placeholder="password" onChange = {handlePassword}/>
                <br/>
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
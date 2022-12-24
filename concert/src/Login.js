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
        fetch ('https://abf7b030-3326-41fe-8870-3487174ce715.mock.pstmn.io/login' , {
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
        });
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
                <input type = "text" id = "idInput" placeholder="Email" value = {email} onChange = {handleEmail}/>
                <br/>
                <input type = "password" id = "passwordInput"placeholder="password" value = {password} onChange = {handlePassword}/>
                <br/>
                <button type = "submit" id = "loginBtn" onClick={loginSubmit}>로그인</button>
            </form>
        </div>
    );
  }
  
  export default Login;
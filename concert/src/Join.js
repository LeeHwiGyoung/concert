import { useState } from 'react';
import './css/Join.css'
function Join() {

    const [email, setEmail] = useState(""); //이메일 input value 값을 저장할 state
    const [password , setPassword] = useState(""); //비밀번호 input value 값을 저장할 state
    const [checkPassword, setCheckPassword] = useState(""); //비밀번호 확인 input value 값을 저장할 state
    const [nickname , setNickname] = useState(""); //닉네임 input value 값을 저장할 state
    const [name , setName] = useState(""); //이름 input value 값을 저장할 state
    const [phoneNumber , setPhoneNumber] = useState(""); //핸드폰번호 input value 값을 저장할 state
    const [checkPhoneNumber , setCheckPhoneNumber] = useState(""); //핸드폰 인증번호 input value 값을 저장할 state
    const [birth , setBirth] = useState(""); //생년월일 input value 값을 저장할 state
    const [gender , setGender] = useState(""); //성별 input value 값을 저장할 state
    const [matchEmail, setMatchEmail] = useState(true); //이메일 input이 이메일 형식에 맞는지
    const [matchPassword, setMatchPassword]  = useState(true); //비밀번호가 비밀번호 형식에 맞는지
    const [samePassword, setSamePassword] = useState(true); //비밀번호와 비밀번호 확인 값이 같은지

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeCheckPassword = (event) => {
        setCheckPassword(event.target.value);
    }

    const onChangeNickname = (event) => {
        setNickname(event.target.value);
    }
    
    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const onChangeCheckPhoneNumber = (event) => {
        setCheckPassword(event.target.value);
    }
    
    const onChangeBirth = (event) => {
        setBirth(event.target.value);
    }

    const onChangeGender = (event) => {
        setGender(event.target.value);
    }

    const checkMatchEmail = () => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        if (regex.test(email)){
            setMatchEmail(true);
        }
        else{
            setMatchEmail(false);
        }
    }

    const checkMatchPassword = () => {
        const regex = /([A-Z]+[a-z]+[0-9]+[!@#]+)+/
        if (regex.test(password) && 12 <= password.length && password.length <= 15){
            setMatchPassword(true);
        }
        else{
            setMatchPassword(false);
        }
    }

    const checkSamePassword = () => {
        if (password === checkPassword)
            setSamePassword(true);
        else
            setSamePassword(false);
    }

    const checkNickname = (e) => { //db check 필요
        e.preventDefault();
    }
    /*
       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       RFC5322를 만족하는 JS 정규식을 갖고옴
         1 : [^<>()\[\]\\.,;:\s@"]+ == < > ( )  [ ] \ . , ; : 공백문자 @ 을 제외한 문자들이 1개 이상
        2 : .이 들어가고 위의 문자를 제외한 문자열이 1개이상
        3 : 1, 2 를 만족하는 문자열이 0개 이상
        4 : ".+"  모든 문자열이 1개 이상 ?
        1 ,2 ,3 ,4 가 골뱅이 이전 문자열
        5 : @
        6:
    */


    return (
        <div className="joinWrap">
          <h1> 회원가입</h1>
          <form id  = "joinForm">
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "emailInput">이메일</label>
                <br/>
                <input 
                 type = "email"
                 id = "emailInput"
                 onChange={onChangeEmail}
                 onBlur = {checkMatchEmail} 
                 placeholder={"이메일을 입력해주세요"}
                >
                </input>
                <button className = {"checkBtn"} type = "submit" onClick = {checkNickname}>중복 확인</button>
                <div className = {matchEmail ? "hidden" : "errMsg"}>이메일을 확인해주세요</div>
            </div>
            <div className = "joinInput">   
                <em>* </em>
                <label htmlFor = "passwordInput">비밀번호</label>
                <input
                 type = "password"
                 id = "passwordInput"
                 maxLength={15}
                 onChange={onChangePassword}
                 onBlur = {checkMatchPassword}
                 placeholder={"비밀번호"}
                ></input> 
                <div className = {matchPassword ? "hidden" : "errMsg"}>비밀번호는 대/소문자 숫자 특수문자(!,@,#)을 포함하여 12자이상 15자 이내로 설정해주세요.</div>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "passwordCheckInput">비밀번호 확인</label>
                <input
                 type = "password"
                 id = "passwordCheckInput"
                 onChange={onChangeCheckPassword}
                 onBlur = {checkSamePassword}
                 placeholder ={"비밀번호 확인"}></input>
                <div className = {samePassword ? "hidden" : "errMsg"}>비밀번호가 일치하지 않습니다.</div>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "nicknameInput">닉네임</label>
                <br/>
                <input
                 type = "text"
                 id = "nicknameInput"
                 onChange={onChangeNickname}
                 placeholder={"닉네임을 입력하세요."}></input>
                <button className = {"checkBtn"} type = "submit" onClick = {checkNickname}>중복 확인</button>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "nameInput">이름</label>
                <input 
                 type = "text"
                 id = "nameInput"
                 onChange={onChangeName}
                 placeholder={"실명을 입력하세요."}></input>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "phoneInput">휴대번호</label>
                <br/>
                <input
                 type = "text"
                 id = "phoneInput"
                 onChange = {onChangePhoneNumber}
                 placeholder = {"- 없이 입력하세요."}></input>
                 <button className = {"checkBtn"} type = "submit" onClick = {checkNickname}>인증번호 전송</button>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "phoneCheckInput">인증번호</label>
                <input type = "text"
                 id = "phoneCheckInput"
                 onChange={onChangeCheckPhoneNumber}
                 placeholder ={"인증번호를 입력하세요."}></input>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "birthInput">생년월일</label>
                <input
                 type = "text"
                 id = "birthInput"
                 onChange={onChangeBirth}
                 placeholder = {"8자리를 입력하세요."}></input>
            </div>
            <div className = "joinInput">
                <em>* </em>
                <label htmlFor = "genderInput">성별</label>
                <input type = "text" id = "genderInput" onChange={onChangeGender}></input>
            </div>
            <hr/>
            <div className='terms'>
                회원가입 약관
            </div>
                <button type = "submit" className = "join" >회원가입</button>
          </form>
        </div>
    );
  }
  
  export default Join;
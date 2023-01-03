import './css/Join.css'
function Join() {
    return (
        <div className="joinWrap">
          <h1> 회원가입</h1>
          <form id  = "joinForm">
            <div className = "joinInput">
                <label for = "idInput">아이디</label>
                <input type = "text" id = "idInput"></input>
            </div>
            <div className = "joinInput">
                <label for = "passwordInput">비밀번호</label>
                <input type = "password" id = "passwordInput"></input> 
            </div>
            <div className = "joinInput">
                <label for = "passwordCheckInput">비밀번호확인</label>
                <input type = "password" id = "passwordCheckInput"></input>
            </div>
            <div className = "joinInput">
                <label for = "emailInput">이메일</label>
                <input type = "email" id = "emailInput"></input>
            </div>
            <div className = "joinInput">
                <label for = "nameInput">이름</label>
                <input type = "text" id = "nameInput"></input>
            </div>
            <div className = "joinInput">
                <label for = "birthInput">생년월일</label>
                <input type = "text" id = "birthInput"></input>
            </div>
            <div className = "joinInput">
                <label for = "genderInput">성별</label>
                <input type = "text" id = "genderInput"></input>
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
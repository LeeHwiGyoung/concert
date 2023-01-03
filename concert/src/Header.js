import './css/Header.css'

function Header() {
    return (
        <div className="header">
          <ul>
            <li><a href = "login">로그인</a></li>
            <li><a href = "join">마이페이지</a></li>
          </ul>
        </div>
    );
  }
  
  export default Header;
import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
    const navigate = useNavigate()
    
    return (
        <div className="header">
          <ul>
            <li><a href = "login">로그인</a></li>
            <li><a href = "join">마이페이지</a></li>
          </ul>
          <div>
             <h1 className="mainTitle" onClick={() => {navigate("/")}}>Home</h1>
          </div>
        </div>
    );
  }
  
  export default Header;
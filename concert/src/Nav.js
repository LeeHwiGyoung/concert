import { useNavigate } from 'react-router-dom';
import './css/Nav.css'

function Nav() {
    const navigate = useNavigate();
    const onClickNav = (event) => {
      console.log(event);  
      navigate("/"+event.target.innerText);
    }

    return (
        <div className="nav">
          <ul>
            <li>NEWS</li>
            <li>CONCERT</li>
            <li>MUSIC</li>
            <li>EVENT</li>
            <li className ="community"onClick={onClickNav}>COMMUNITIY</li>
            <li>Disabled</li>
          </ul>
        </div>
    );
  }
  
  export default Nav;
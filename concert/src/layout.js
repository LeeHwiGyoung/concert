import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import { Link } from 'react-router-dom';

const Layout = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  
  return (
    <div>
        <Header>
          <ul className = "headerMenu">
            {!currentUser ? <li className = "headerItem"><Link className = "headerLink" to ='./join'>JOIN</Link></li> : <li  className = "headerItem"><p> 마이페이지 </p></li>}
            {!currentUser ? <li className = "headerItem"><Link className = "headerLink" to ='./login'>LOGIN</Link></li> : currentUser&&<li  className = "headerItem"><p>로그아웃</p></li>}
          </ul>
        </Header>
        <Nav />
        <Outlet />
    </div>
  );
};

export default Layout;
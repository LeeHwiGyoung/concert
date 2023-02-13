import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Join  from "./pages/Join/Join";
import Mypage  from "./pages/Mypage/Mypage";
import Community from "./Community"
import { Provider } from "react-redux";
import { store } from "./store/store"


function App() {
  return (
    <Provider store = {store}>
      <CookiesProvider>
          <Router>
            <Routes>
              <Route path="/" element = {<Home />}/>
              <Route path="login" element = {<Login />} />
              <Route path = "join" element = {<Join />} />
              <Route path = "mypage" element = {<Mypage/>} />
              <Route path = "COMMUNITIY" element = {<Community/>} /> 
            </Routes>
          </Router>
      </CookiesProvider>
    </Provider>
  );
}

export default App;

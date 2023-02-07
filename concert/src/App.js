import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Join  from "./Join";
import Community from "./Community"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="login" element = {<Login />} />
        <Route path = "join" element = {<Join />} />
        <Route path = "COMMUNITIY" element = {<Community/>} />
      </Routes>
    </Router>
  );
}

export default App;

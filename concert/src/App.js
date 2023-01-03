import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Join  from "./Join";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="login" element = {<Login />} />
        <Route path = "join" element = {<Join />} />
      </Routes>
    </Router>
  );
}

export default App;

import './css/Home.css';
import MyCalendar from './MyCalendar.js';
import Nav from './Nav.js';
import Poster from './Poster.js';
import Header from './Header.js';

function Home() {
    return (
      <div id = "wrap">
        <Header />
        <h1>Home</h1>
        <Nav />
        <MyCalendar />
        <Poster />
      </div>
    );
  }
  
  export default Home;
  
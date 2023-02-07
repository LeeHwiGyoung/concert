import './Home.css';
import MyCalendar from '../Calendar/MyCalendar';
import Nav from '../../components/Nav.js';
import Poster from '../../components/Poster.js';
import Header from '../../components/Header.js';

function Home() {
    return (
      <div id = "wrap">
        <Header />
        <Nav />
        <MyCalendar />
        <Poster />
      </div>
    );
  }
  
  export default Home;
  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Computer} from './pages/Computer/computer'
import Player from './pages/Player/player';
import ButtonAppBar from './components/Navbar/Appbar';
import Signin from './pages/Signin/signin';
import Signup from './pages/Signup/signup';
import Footer from './components/Footer/footer';
import Homepage from './pages/Homepage/homepage';

function App() {
  return (
  <div className='App'>
    <Router>
      <ButtonAppBar/>
      
      <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/signin" element = {<Signin/>}/>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/1vs1" element = {<Player/>}/>
      <Route path="/computer" element = {<Computer/>}/>
      </Routes>

      
    </Router>
    <Footer/>
    </div>);
}

export default App;
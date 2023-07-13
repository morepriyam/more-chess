import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Computer} from './pages/Computer/computer'
import Player from './pages/Player/player';
import ButtonAppBar from './components/Navbar/Appbar';
import Signin from './pages/Signin/signin';
import Signup from './pages/Signup/signup';




function App() {
  return (
    <div className='App'>
     <Router>
      <ButtonAppBar/>
      <Routes>
      <Route path="/"/>
      <Route path="/signin" element = {<Signin/>}/>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/1vs1" element = {<Player/>}/>
      <Route path="/computer" element = {<Computer/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
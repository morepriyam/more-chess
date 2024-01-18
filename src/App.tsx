import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Computer } from './pages/computer'
import Player from './pages/player';
import ButtonAppBar from './components/Appbar';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import './App.css';

function App() {
  return (
      <div className='App'>

        <Router>
         <ButtonAppBar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/1vs1" element={<Player />} />
            <Route path="/computer" element={<Computer />} />
          </Routes>

          
        </Router>
        <Footer />
     
      </div>
  )
}

export default App;
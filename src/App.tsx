import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Computer} from './pages/Computer/computer'
import Player from './pages/Player/player';
import ButtonAppBar from './components/Navbar/Appbar';
import Signin from './pages/Signin/signin';
import Signup from './pages/Signup/signup';
import { ThemeProvider, createTheme } from "@mui/material";


function App() {
  const Theme = createTheme({
    palette: {
    mode: 'light',
    primary: {
      main: '#1b2331',
    },
    secondary: {
      main: '#fec100',
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: 'Oswald',
  },
});


  return (
  <div className='App'>
    <ThemeProvider theme={Theme}>
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
    </ThemeProvider>
    </div>
    
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import{ Navbar } from './components/Navbar/navbar';
import './App.css';
import {Computer} from './pages/computer/computer'




function App() {
  return (
    <div className='App'>
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/"/>
      <Route path="/login"/>
      <Route path="/1vs1" />
      <Route path="/computer" element = {<Computer/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;



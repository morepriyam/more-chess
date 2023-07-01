import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import{ Navbar } from './components/navbar/navbar';
import './App.css'




function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/login"/>
        <Route path="/homepage"/>
        <Route path="/1vs1" />
        <Route path="/computer"/>
        </Routes>
    </Router>
  );
}

export default App;



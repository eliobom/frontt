import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Citas from './components/  Citas';
import Barberos from './components/Barberos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Citas />} />
        <Route path="/barberos" element={<Barberos />} />
      </Routes>
    </Router>
  );
}

export default App;
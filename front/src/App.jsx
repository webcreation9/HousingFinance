
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes below as you build them  */}
          {/* <Route path="/home-loans/first-home" element={<FirstHome />} /> */}
          {/* <Route path="/calculators" element={<Calculators />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
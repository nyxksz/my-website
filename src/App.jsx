import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this path is correct
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import './App.css'; // Replace with index.css if needed


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/contact">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
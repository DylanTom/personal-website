import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Personal from './components/Personal';

import ContactInfo from './data/contact.json';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<About />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
        <Footer {...ContactInfo} />
      </Router>
    </div>
  )
}

export default App

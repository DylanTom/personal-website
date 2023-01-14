import React from 'react';
import Nav from './components/Navbar';
import Footer from './components/Footer';

import ContactInfo from './data/contact.json';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Nav />
      <Footer {...ContactInfo}/>
    </div> 
  )
}

export default App

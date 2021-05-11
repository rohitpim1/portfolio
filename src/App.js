import React from 'react';
import "./App.css";
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  
  return (
    <>
  <Navbar />
  
  <Home />
  <Portfolio />
  <About />

  <Footer />
  </>
      
  );
}

export default App;

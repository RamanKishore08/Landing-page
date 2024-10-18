import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

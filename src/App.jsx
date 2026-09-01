import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#050508', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <SocialProof />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

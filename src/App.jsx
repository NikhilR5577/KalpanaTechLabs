import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ProductPage from './pages/ProductPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Product />
      <SocialProof />
      <Pricing />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div style={{ background: '#050508', minHeight: '100vh' }}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/kalpana_logo.jpg" alt="Logo" className="h-8 rounded" />
            <span className="text-white font-semibold">Kalpana TechLabs</span>
          </Link>
          <p className="text-white/40 text-sm mt-3 max-w-xs">
            Building the navigation layer for Indian healthcare. Zero-friction QR-based indoor navigation for hospitals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white/70 font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="space-y-3">
            <Link to="/product" className="block text-white/40 hover:text-white text-sm transition-colors">Product</Link>
            <Link to="/case-study" className="block text-white/40 hover:text-white text-sm transition-colors">Case Study</Link>
            <Link to="/about" className="block text-white/40 hover:text-white text-sm transition-colors">About</Link>
            <Link to="/contact" className="block text-white/40 hover:text-white text-sm transition-colors">Contact</Link>
            <a href="https://youtube.com/shorts/uKDTOD5HxyY" target="_blank" rel="noopener noreferrer" className="block text-white/40 hover:text-white text-sm transition-colors">Watch Demo ↗</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white/70 font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-3">
            <p className="text-white/40 text-sm">kalpanatechlabs@gmail.com</p>
            <p className="text-white/40 text-sm">Sagar, Madhya Pradesh, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] mt-10 pt-8 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Kalpana TechLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

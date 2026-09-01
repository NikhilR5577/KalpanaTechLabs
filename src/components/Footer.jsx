import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src="/kalpana_logo.jpg" alt="Logo" className="h-8 rounded" />
            <span className="text-white font-semibold">Kalpana TechLabs</span>
          </div>
          <p className="text-white/40 text-sm mt-2">Building the navigation layer for Indian healthcare.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://youtube.com/shorts/uKDTOD5HxyY" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">
            Watch Demo
          </a>
        </div>
      </div>
      <div className="border-t border-white/[0.06] mt-8 pt-8 text-center text-white/30 text-sm">
        © 2026 Kalpana TechLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

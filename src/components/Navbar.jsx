import React from 'react';

const Navbar = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/kalpana_logo.jpg" alt="Logo" className="h-8 rounded" />
          <span className="text-white font-semibold hidden sm:block">Kalpana TechLabs</span>
        </div>
        <button
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all"
        >
          Book a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

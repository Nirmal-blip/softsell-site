import React, { useState } from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent/60 shadow-md fixed top-0 left-0 z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="SoftSell Logo" className="h-20 w-20" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-white text-[19px] font-semibold">
          <a href="#how-it-works" className="hover:text-blue-400 transition duration-300">
            How It Works
          </a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Toggle - Only visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Only visible when menu is open */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-4 pt-2 space-y-3 text-[18px] font-semibold">
          <a href="#how-it-works" className="block text-white hover:text-emerald-400">How It Works</a>
          <a href="#testimonials" className="block text-white hover:text-emerald-400">Testimonials</a>
          <a href="#contact" className="block text-white hover:text-emerald-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

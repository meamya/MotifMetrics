'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-transparent bg-clip-text">
          Motif Metrics
        </a>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal whitespace-nowrap">
          <a href="#hero" className="hover:text-rust">Home</a>
          <a href="#projects" className="hover:text-rust">Our Work</a>
          <a href="#collaborate" className="hover:text-rust">Collaborate</a>
          <a href="#contact" className="hover:text-rust">Contact</a>

          <div className="ml-4">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-medium border border-[#4c8575] text-[#4c8575]
                hover:bg-gradient-to-r hover:from-[#265e5c] hover:to-[#4c8575] hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 p-4 text-charcoal text-base">
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Our Work</a></li>
            <li><a href="#collaborate" onClick={toggleMenu}>Collaborate</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="px-4 pb-4">
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block w-full text-center px-5 py-2 rounded-full text-sm font-medium border border-[#4c8575] text-[#4c8575]
                hover:bg-gradient-to-r hover:from-[#265e5c] hover:to-[#4c8575] hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

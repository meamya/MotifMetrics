'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} Motif Metrics. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:text-charcoal">Home</a>
          <a href="#projects" className="hover:text-charcoal">Projects</a>
          <a href="#collaborate" className="hover:text-charcoal">Collaborate</a>
          <a href="#contact" className="hover:text-charcoal">Contact</a>
        </div>
      </div>
    </footer>
  );
}

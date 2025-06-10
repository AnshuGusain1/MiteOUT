import React, { useState } from 'react';
import MiteOutLogo from '../assets/MiteOutLogo.png';

const navLinks = [
  { href: '/', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/prototypes', label: 'Prototypes' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Logo/Home button */}
        <a href="/">
          <img src={MiteOutLogo} alt="MiteOUT Logo" className="h-12 md:h-14" />
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-green-800">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          {/* Hamburger icon */}
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Menu Overlay with animation */}
        {/* Overlay background fade */}
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Slide-in menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 flex flex-col p-6 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between mb-8">
            <a href="/" onClick={() => setMenuOpen(false)}>
              <img src={MiteOutLogo} alt="MiteOUT Logo" className="h-12" />
            </a>
            <button
              className="p-2 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              {/* X icon */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-medium text-gray-800">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-green-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 
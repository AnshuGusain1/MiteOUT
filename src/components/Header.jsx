import React from 'react';
import MiteOutLogo from '../assets/MiteOutLogo.png';

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto flex items-center justify-between py-3 px-6">
      <img src={MiteOutLogo} alt="MiteOUT Logo" className="h-14" />
      <nav className="space-x-6 text-gray-600">
        <a href="/MiteOUT" className="hover:text-green-800">Features</a>
        <a href="#about" className="hover:text-green-800">About</a>
        <a href="/MiteOUT/contact" className="hover:text-green-800">Contact</a>
        <a href="/MiteOUT/prototypes" className="hover:text-green">Prototypes</a>
      </nav>
    </div>
  </header>
);

export default Header; 
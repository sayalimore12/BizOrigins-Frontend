import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import whiteLogo from '../assets/images/white_logo.jpeg';
import blackLogo from '../assets/images/logo-black-bg.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll to top
   const navigate = useNavigate();
   const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic link classes
  const linkClasses = ({ isActive }) =>
    `relative block py-2 px-4 transition-colors duration-300 
     ${isActive ? 'text-[#ffffff] bg-black/90 font-bold' : isScrolled ? 'text-white hover:text-[#fb8500]' : 'text-gray-700 hover:text-[#fb8500]'}
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
     after:w-0 after:bg-[#fb8500] after:transition-all after:duration-300 
     hover:after:w-full ${isActive ? 'after:w-full' : ''}`;

  return (
<nav
  className={`fixed w-full z-20 top-0 left-0 transition-colors duration-300 ${
    isScrolled ? 'bg-black shadow-md' : 'bg-white'
  }`}
>
  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
    <NavLink
      to="/"
      className={`text-2xl font-bold transition-colors duration-200 ${
        isScrolled ? 'text-white' : 'text-gray-800'
      }`}
    >
      <div className="relative h-24 w-24 sm:h-14 overflow-hidden">
        {/* White Logo */}
        <img
          src={whiteLogo}
          alt="BizOrigins"
          className={`absolute top-0 left-0 h-full w-auto object-contain transition-transform duration-500 ${
            isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        />
        {/* Black Logo */}
        <img
          src={blackLogo}
          alt="BizOrigins"
          className={`absolute top-0 left-0 h-full w-auto object-contain transition-transform duration-500 ${
            isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        />
      </div>
    </NavLink>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 
          ${isScrolled ? 'text-white hover:bg-gray-700 focus:ring-gray-500' : 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200'}`}
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
            <li><NavLink to="/" className={linkClasses} onClick={() => handleNavClick('/')}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClasses} onClick={() => handleNavClick('/about')}>About Us</NavLink></li>
            <li><NavLink to="/services" className={linkClasses} onClick={() => handleNavClick('/services')}>Our Services</NavLink></li>
            <li><NavLink to="/pricing" className={linkClasses} onClick={() => handleNavClick('/pricing')}>Pricing</NavLink></li>
            <li><NavLink to="/resources" className={linkClasses} onClick={() => handleNavClick('/resources')}>Resources</NavLink></li>
            <li><NavLink to="/contact" className={linkClasses} onClick={() => handleNavClick('/contact')}>Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

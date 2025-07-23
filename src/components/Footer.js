import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import blackLogo from '../assets/images/logo-black-bg.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <img
  src={blackLogo}
  alt="BizOrigins Logo"
  className="h-12 w-auto object-contain transition-transform duration-500"
/>
          </h2>
          <p className="text-gray-400 text-sm">
            Simplifying Business Formation <br/>
            Get started with us today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#fb8500] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#fb8500] transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#fb8500] transition">Our Services</Link></li>
            <li><Link to="/pricing" className="hover:text-[#fb8500] transition">Pricing</Link></li>
            <li><Link to="/resources" className="hover:text-[#fb8500] transition">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-[#fb8500] transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">51 Windsor Avenue, Mineola, <br/>New York 11501</p>
          <p className="text-gray-400 text-sm">Email: info@bizorigins.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (800) 123-4567</p>
        </div>

        {/* Social Media */}
       <div>
  <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Follow us on Facebook"
      className="text-gray-400 hover:text-blue-500 transition"
    >
      <FaFacebookF size={20} />
    </a>
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Follow us on Twitter"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      <FaTwitter size={20} />
    </a>
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Follow us on Instagram"
      className="text-gray-400 hover:text-pink-500 transition"
    >
      <FaInstagram size={20} />
    </a>
    <a 
      href="https://linkedin.com" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Follow us on LinkedIn"
      className="text-gray-400 hover:text-blue-300 transition"
    >
      <FaLinkedinIn size={20} />
    </a>
  </div>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BizOrigins. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

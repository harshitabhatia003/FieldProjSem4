import React from 'react';
import './Navbar.css';
import logo from './logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="ParentPlus Logo" className="logo-img" />
          <a href="/"><span>ParentPlus</span></a>
        </div>
        <div className="nav-links">
          <a href="/about">About</a>
          
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQ</a>
          <a href="/signup">Signup</a>
          <a href="/donate" className="cta-button">Donate</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
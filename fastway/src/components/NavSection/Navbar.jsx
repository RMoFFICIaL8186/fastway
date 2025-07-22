import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className="header-container">
        {/* Mobile menu toggle */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <Link to="/" className='head-logo'>Fastway</Link>

        {/* Desktop Navigation */}
        <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <li className='active'> 
            <Link to={'/'} onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li> 
            <Link to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
          <li> 
            <Link to={'/Blog'} onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </li>
          <li> 
            <Link to={'/Career'} onClick={() => setIsMenuOpen(false)}>Career</Link>
          </li>
        </ul>

        {/* Right side elements */}
        <div className={`under-header ${isMenuOpen ? 'active' : ''}`}>
          <form className='searchbar'>
            <input 
              type="text" 
              placeholder='Search here...' 
              aria-label="Search"
            />
            <button type='button' className='btn'>Search</button>
          </form>

          <ul className="icons">
            <li>
              <Link to={'/User'} aria-label="User profile">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li>
              <Link to={'/Notify'} aria-label="Notifications">
                <i className="fa-solid fa-bell"></i>
              </Link>
            </li>
            <li>
              <Link to={'/Cart'} aria-label="Shopping cart">
                <i className="fa-solid fa-cart-flatbed"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
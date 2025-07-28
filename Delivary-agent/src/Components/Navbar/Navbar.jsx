import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid border d-flex flex-column flex-md-row justify-content-between align-items-center py-2 bg-primary'>
      <div className='d-flex justify-content-between w-100 w-md-auto align-items-center'>
        <h1 className='fs-1 text-warning m-0 font-Monsieur '>F <span className='text-info font-Roboto'>Agent</span></h1>
        
        {/* Mobile menu button (hidden on larger screens) */}
        <button 
          className='navbar-toggler d-md-none' 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-white'>☰</span>
        </button>
      </div>

      <nav className='collapse navbar-collapse d-md-flex justify-content-end' id='navbarContent'>
        <ul className='navbar-nav d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 gap-md-5 my-2 my-md-0'>
          <li className='nav-item'>
            <Link to={'/'} className='nav-link active text-white p-1 px-3'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/Support'} className='nav-link text-white p-1 px-3'>Support</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/Career'} className='nav-link text-white p-1 px-3'>Career</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/Blog'} className='nav-link text-white p-1 px-3'>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-primary py-4'>
      <div className='container'>
        {/* Copyright section */}
        <div className='text-center mb-3'>
          <p className='fs-5 fw-bold text-secondary m-0'>
            All Copy Right Reserved By 
            <Link to={'/About'} className='text-white px-2 text-decoration-none'>
              BlackWorld
            </Link>
            -2025
          </p>
        </div>

        {/* Links section */}
        <div className='d-flex justify-content-center'>
          <ul className='nav flex-column flex-md-row align-items-center'>
            <li className='nav-item'>
              <Link to={'/FA&Q'} className='nav-link text-white px-3 py-1 py-md-0'>FA&Q</Link>
            </li>

            <li className='nav-item'>
              <Link to={'/Register'} className='nav-link text-white px-3 py-1 py-md-0'>Register</Link>
            </li>

            <li className='nav-item'>
              <Link to={'/Login'} className='nav-link text-white px-3 py-1 py-md-0'>Login</Link>
            </li>

            <li className='nav-item'>
              <Link to={'/Admin'} className='nav-link text-white px-3 py-1 py-md-0'>Admin-Login</Link>
            </li>

            <li className='nav-item'>
              <Link to={'/News'} className='nav-link text-white px-3 py-1 py-md-0'>News</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
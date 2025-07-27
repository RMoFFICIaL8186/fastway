import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid border d-flex justify-content-between align-items-center h-100 bg-primary' >
        <h1 className='fs-1 text-warning'>F <span className=''>Agent</span></h1>
      <nav className='nav-link d-flex align-items-center justify-content-around m-auto pe-2'>
        <ul className='d-flex align-items-center justify-content-between gap-5'>
            <li className='list-group-item text-white p-1 px-3  bg-primary'>
                <Link to={'/'} className='nav-link active'>Home</Link>
            </li>
              <li className='list-group-item text-white p-1 px-3  bg-primary'>
                <Link to={'/Support'} className='nav-link'>Support</Link>
            </li>
              <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/Career'} className='nav-link'>Career</Link>
            </li>
              <li className='list-group-item text-white p-1 px-3  bg-primary'>
                <Link to={'/Blog'} className='nav-link '>Blog</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

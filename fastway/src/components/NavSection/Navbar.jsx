import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

   const Navbar = () => {
  return (
    <div className='header'>
      <h1 className='head-logo'>Fastway</h1>
      <nav>
                <div className='under-header'>
          <div className="icons">
            <li> <Link to={'/User'}> <i className="fa-solid fa-user"></i></Link> </li>
            <li> <Link to={'/Notify'}> <i className="fa-solid fa-bell"></i> </Link> </li>
            <li> <Link to={'/Cart'}> <i className="fa-solid fa-cart-flatbed"></i> </Link> </li>
          </div>
          <form action="" className='searchbar'>
            <input type="text" placeholder='search here' />
            <button type='button' className='btn'>Search</button>
          </form>
        </div>

        <ul className='navbar'>
            <li className='active'> <Link to={'/'}>  Home  </Link></li>
            <li> <Link to= {'/contact'}> Contact </Link></li>
            <li> <Link to= {'/Blog'}>    Blog    </Link></li>
            <li> <Link to= {'/Career'}>  Career  </Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

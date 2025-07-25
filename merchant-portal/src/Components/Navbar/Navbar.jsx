import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='border border-primary h-75'>
      {/* fixed-top */}
   <nav className="navbar navbar-dark bg-primary "> 
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fw-bold" to={'/'}>Merchant</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <span className='text-white m-4 p-3'>Hello, </span>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/Blog'}>Blog</Link>
          </li>

            <li className="nav-item">
            <Link className="nav-link" to={'/Contact'}>Contact</Link>
          </li>

             <li className="nav-item">
            <Link className="nav-link" to={'/Login'}>Login</Link>
          </li>

             <li className="nav-item">
            <Link className="nav-link" to={'/Register'}>Register</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

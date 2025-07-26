import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
            {/* Footer */}
      <footer className='dashboard-footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <h5>BlackWorld</h5>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className='col-md-6 text-md-end'>
              <ul className='footer-links'>
                <li><Link to='/Aboutus'>About Us</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Privacy'>Privacy Policy</Link></li>
                <li><Link to='/Terms'>Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer

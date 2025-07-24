import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="copy-right">
        <p className='copy-note'>All Copy Right Reserved By <span className='company'>Black World</span>-2025</p>
      </div>
      <div className="nav-section">
      <div className="navs-links">
        <h4 className='navs-titles'>Fastway</h4>
        <ul className='links'>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/Contact'}>Contact</Link> </li>
            <li> <Link to={'/Blog'}>Blog</Link> </li>
            <li> <Link to={'/Career'}>Career</Link> </li>
            <li> <Link to={'/Login'}>Login</Link> </li>
            <li> <Link to={'/Register'}>Register</Link> </li>
        </ul>
      </div>

        <div className="navs-links">
        <h4 className='navs-titles'>Services</h4>
        <ul className='links'>
            <li> <Link to={'/Orders'}>Orders</Link> </li>
            <li> <Link to={'/Payments'}>Payment</Link> </li>
            {/* <li> <Link to={'/Blog'}>Blog</Link> </li>
            <li> <Link to={'/'}>Career</Link> </li>
            <li> <Link to={'/'}>Login</Link> </li>*/}
            <li> <Link to={'/FA&Q'}>FA&Q</Link> </li> 
        </ul>
      </div>

        <div className="navs-links">
        <h4 className='navs-titles'>Policy's</h4>
        <ul className='links'>
            <li> <Link to={'/CompanyPolicy'}>Company Policy</Link> </li>
            <li> <Link to={'/UserPolicy'}>User policy</Link> </li>
            <li> <Link to={'/MerchantPolicy'}>Merchant Policy </Link></li>
            <li> <Link to={'/DelivaryAgentPolicy'}>Delivary Policy</Link> </li>
            <li> <Link to={'/DataPolicy'}>Data privacy Policy</Link> </li>
            <li> <Link to={'/ProductPolicy'}>Product Policy</Link> </li>
        </ul>
      </div>

        <div className="navs-links">
        <h4 className='navs-titles'>Grievances</h4>
        <ul className='links'>
            <li> <Link to={'/Complaint'}>Complaint</Link> </li>
            {/* <li> <Link to={'/Contact'}>Contact</Link> </li>
            <li> <Link to={'/Blog'}>Blog</Link> </li>
            <li> <Link to={'/Career'}>Career</Link> </li>
            <li> <Link to={'/Login'}>Login</Link> </li>
            <li> <Link to={'/Register'}>Register</Link> </li> */}
        </ul>
      </div>

        <div className="navs-links social">
        <h4 className='navs-titles'>Social Media</h4>
        <ul className='links'>
            <li> <Link to={'/'}><i className="fa-regular fa-envelope"></i>e-mail</Link> </li>
            <li> <Link to={'/Contact'}><i className="fa-brands fa-x-twitter twitter"></i>Twitter</Link> </li>
            <li> <Link to={'/Blog'}><i className="fa-brands fa-whatsapp whats-app"></i>What's App</Link> </li>
            <li> <Link to={'/Career'}><i className="fa-brands fa-facebook facebook"></i>FaceBook</Link> </li>
            <li> <Link to={'/Login'}><i className="fa-brands fa-youtube youtube"></i>Youtube</Link> </li>
            <li> <Link to={'/Register'}><i className="fa-brands fa-linkedin linkedin"></i>LinkedIn</Link> </li>
        </ul>
      </div>
      </div>
      <div className="navs-under">
        <div className="sub-note">
            <input type="text" placeholder='to subscrib enter email here' name='subscriber' />
            <button className='btn'>Subscrib</button>
        </div>
        <Link to={'/Aboutus'}><span className='company-origin'>The origin of Black World</span></Link>
      </div>
    </div>
  )
}

export default Footer;

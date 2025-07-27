import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='d-flex align-items-center justify-content-center bg-primary py-2'>
        <div className=''>
      <p className='fs-4 fw-bold text-secondary'>All Copy Right Reserved By <Link to={'/About'}><span className='text-white px-2 fs-5'>BlackWorld</span></Link>-2025</p>
      <div className=''>
        <ul className='d-flex align-items-center justify-content-center'>
            <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/FA&Q'} className='text-white nav-link'>FA&Q</Link>
            </li>

            <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/Register'} className='text-white nav-link'>Register</Link>
            </li>

               <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/Login'} className='text-white nav-link'>Login</Link>
            </li>

               <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/Admin'} className='text-white nav-link'>Admin-Login</Link>
            </li>

               <li className='list-group-item text-white p-1 px-3 bg-primary'>
                <Link to={'/News'} className='text-white nav-link'>News</Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer

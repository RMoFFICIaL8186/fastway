import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom'

const Register = () => {
 return (
  <div className='Register-container'>
    <div className="form-section">
      <h1 className='form-title'>Register</h1>
      <form action="" className='form-container'>
        <div className='form-div'>
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder='full Name here' name='FullName' required />
        </div>
          <div className='form-div'>
          <label htmlFor="">Phone No</label>
          <input type="tel" placeholder='Phone No here' name='PhoneNo' required />
        </div>

          <div className='form-div'>
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder='E-mail here' name='E-mail' required />
        </div>

          <div className='form-div'>
          <label htmlFor="">Full Name</label>
          <input type="password" placeholder='password here' name='Password' required/>
        </div>
        <button className='btn-form'>Register</button>
      </form>
      
         <div className='page-direction'>
                {/* &#8594; -> arrow icon */}
                <p className='Note'>Don't have an Account <span className='page-link'> <Link to={'/Login'}>Login</Link></span>here</p>
              </div>
    </div>
  </div>
  )
}

export default Register

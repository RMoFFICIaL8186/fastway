import React from 'react';
import './Login.css';
import { Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <div className="form-section">
        <h1 className='form-title'>Login</h1>
        <form action="" className='form-container'>
        <div className="form-div">
          <label >E-mail</label>
          <input type="text" placeholder='e-mail' name='e-mail' required/>
        </div>
        <div className="form-div">
          <label >Password</label>
          <input type="password" placeholder='password' name='password' required/>
          </div>
          <button className=' btn-form'>Login</button>
        </form>
        <div className='page-direction'>
          {/* &#8594; -> arrow icon */}
          <p className='Note'>Don't have an Account <span className='page-link'> <Link to={'/Register'}>Register</Link></span>here</p>
        </div>
      </div>
    </div>
  )
}

export default Login

import React from 'react'

const Admin = () => {
  return (
 <div 
      className='min-vh-100 d-flex flex-column flex-md-row align-items-center justify-content-around'
      style={{
        backgroundImage: 'url(/bg-img/bg4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className=' text-center text-md-start mb-5 mb-md-0 monsieur-la-doulaise-regular' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Join with us <p className='dancing-script'>Empower the World</p></h1>
      
      <div className="position-relative my-5 my-md-0" style={{ width: '100%', maxWidth: '500px' }}>
        <form className='border m-3 p-4 p-md-5 bg-transparent rounded-1 bg-opacity-75'>          
          <h1 className='fs-5 text-white text-center p-3 text-decoration-underline'>Admin Login</h1>
          {/* <div className="mb-3">
            <label htmlFor="fullName" className='form-label text-white'>FullName</label>
            <input type="text" name='fullName' className='form-control' id='exampleInputFullName' aria-describedby='' required />
          </div> */}
          <div className="mb-3">
            <label htmlFor="phoneNo" className='form-label text-dark fw-bold'>Phone No</label>
            <input type="number" name='phoneNo' className='form-control bg-transparent text-white' id='exampleInputPhoneNo' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-dark fw-bold">Email address</label>
            <input type="email" name='email' className="form-control bg-transparent text-white" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-dark fw-bold">Password</label>
            <input type="password" name='password' className="form-control bg-transparent text-white" id="exampleInputPassword1" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input bg-transparent" id="exampleCheck1" required/>
            <label className="form-check-label text-white" htmlFor="exampleCheck1">I agree to terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Admin;

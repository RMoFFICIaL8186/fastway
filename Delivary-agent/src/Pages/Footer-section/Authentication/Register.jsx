import React from 'react';

const Register = () => {
  return (
    <div 
      className='min-vh-100 d-flex flex-column flex-md-row align-items-center justify-content-around '
      style={{
        // backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage:'url(/bg-img/bg1.png)'
      }}
    >
      <h1 className='roboto text-white text-center text-md-start mb-5 mb-md-0' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Work with us <p className='monsieur-la-doulaise-regular'>And Build State Growth</p></h1>
      
      <div className="position-relative my-5 my-md-0" style={{ width: '100%', maxWidth: '500px' }}>
        <form className='border m-3 p-4 p-md-5 bg-secondary rounded-1 bg-opacity-75'>          
          <h1 className='fs-5 text-white text-center p-3 text-decoration-underline'>Registration Form</h1>
          <div className="mb-3">
            <label htmlFor="fullName" className='form-label text-white'>FullName</label>
            <input type="text" name='fullName' className='form-control' id='exampleInputFullName' aria-describedby='' required />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNo" className='form-label text-white'>Phone No</label>
            <input type="number" name='phoneNo' className='form-control' id='exampleInputPhoneNo' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
            <input type="password" name='password' className="form-control" id="exampleInputPassword1" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
            <label className="form-check-label text-white" htmlFor="exampleCheck1">I agree to terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
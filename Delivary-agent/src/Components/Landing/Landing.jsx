import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="container-fluid px-0">
      {/* Hero Section */}
      <div className='d-flex align-items-center justify-content-center p-3 p-md-5 border m-2'>
        <div className="section text-center text-md-start">
          <h1 className='dm-regular-italic'>The Unsung Hero!</h1>
          <p className='amarante-regular fs-4'>
            Rain or Shine, the delivery boy is always on time! <br />
            From your favorite meals to important Packages, He zips through traffic to bring smile to your Doorstep. <br />
            <span className='text-center d-block'>
              Next time you see a delivery boy, don't forget to Thank him!-  <br />
              <span className='monsieur-la-doulaise-regular text-end d-flex align-items-center justify-content-center justify-content-md-end'>
                DeliveryHero onTimeAlways
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className='container'>
        <div className="section d-flex flex-column align-items-center justify-content-center gap-3 gap-md-5 flex-md-row py-3">
          <div className="card mb-3 w-100" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/feedback/feed2.png" className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="Delivery" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Fast Delivery</h5>
                  <p className="card-text">Our delivery heroes ensure your packages arrive on time, no matter the weather or traffic conditions.</p>
                  <p className="card-text"><small className="text-body-secondary">Always on time</small></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-3 w-100" style={{maxWidth: '540px'}}> 
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/feedback/feed1.png" className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="Service" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Reliable Service</h5>
                  <p className="card-text">Trusted by thousands of customers for delivering important packages with care and precision.</p>
                  <p className="card-text"><small className="text-body-secondary">Trusted partner</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Section */}
      <div className='container border m-2 p-2 '>
        <div className='section'>
          <h1 className='text-decoration-underline text-center dm-regular-italic'>Order</h1>
          <div className='d-flex justify-content-center'>
            <ul className='d-flex flex-column list-unstyled justify-content-around w-50 w-md-50 ms-md-5 border p-3'>
              <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2 text-wrap'>
                <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Order ID: </p>
                <span>254511ysefg</span>
              </li>
              <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2'>
                <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Merchant ID: </p>
                <span>Siva2025756</span>
              </li>
              <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2'>
                <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Status: </p>
                <span>In Transit</span>
              </li>
               <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2'>
                <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Address: </p>
                <span className='text-wrap w-35 overflow-hidden'>
                  <li>shop no 59</li>
                  <li className=''>Siva Sankar Vegetable Market </li>
                  <li>Siva Kummar</li>
                  <li>+91 1234567890</li>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mt-4">
          <h1 className='fs-3 amarante-regular text-center text-md-start'> Navigate using Map</h1>
          <div className="section">
            <div className="ratio ratio-16x9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929667.215013681!2d78.1183783718409!3d15.879410523924617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1753717880301!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Delivery Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
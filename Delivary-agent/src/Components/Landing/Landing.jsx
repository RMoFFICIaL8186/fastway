import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [orderStatus, setOrderStatus] = useState('pending'); // 'pending', 'accepted', 'picked-up', 'delivered'
  const [showPickupConfirmation, setShowPickupConfirmation] = useState(false);
  const [showDeliveryConfirmation, setShowDeliveryConfirmation] = useState(false);
  const [pickupOtp, setPickupOtp] = useState('');
  const [deliveryOtp, setDeliveryOtp] = useState('');
  const [customerDetails, setCustomerDetails] = useState(null);
  const [mapUrl, setMapUrl] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929667.215013681!2d78.1183783718409!3d15.879410523924617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1753717880301!5m2!1sen!2sin');

  // Mock function to fetch customer details
  const fetchCustomerDetails = async () => {
    // In a real app, this would be an API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          address: '123 Main St, Apt 4B, New York, NY 10001',
          phone: '+1 234-567-8901',
          coordinates: '40.7128,-74.0060' // NYC coordinates for map
        });
      }, 1000);
    });
  };

  const handleAccept = () => {
    setOrderStatus('accepted');
    // Update map to show merchant location
    setMapUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510728!2d-73.98784492452593!3d40.74844047138991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus');
  };

  const handleReject = () => {
    setOrderStatus('rejected');
  };

  const handleArrivedAtMerchant = () => {
    setShowPickupConfirmation(true);
  };

  const verifyPickup = async () => {
    if (pickupOtp === '1234') {
      setOrderStatus('picked-up');
      setShowPickupConfirmation(false);
      
      // Fetch customer details after pickup confirmation
      const details = await fetchCustomerDetails();
      setCustomerDetails(details);
      
      // Update map to show route to customer
      setMapUrl(`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3022.215373510728!2d-73.98784492452593!3d40.74844047138991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY!3m2!1d40.7484405!2d-73.9856644!4m5!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!3m2!1d40.7127753!2d-74.0059728!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`);
    }
  };

  const handleArrivedAtCustomer = () => {
    setShowDeliveryConfirmation(true);
  };

  const verifyDelivery = () => {
    if (deliveryOtp === '5678') {
      setOrderStatus('delivered');
      setShowDeliveryConfirmation(false);
    }
  };

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
                <span className={`badge ${
                  orderStatus === 'pending' ? 'bg-secondary' :
                  orderStatus === 'accepted' ? 'bg-primary' :
                  orderStatus === 'picked-up' ? 'bg-warning' :
                  orderStatus === 'delivered' ? 'bg-success' :
                  'bg-danger'
                }`}>
                  {orderStatus === 'pending' ? 'Pending' :
                   orderStatus === 'accepted' ? 'Accepted' :
                   orderStatus === 'picked-up' ? 'Picked Up' :
                   orderStatus === 'delivered' ? 'Delivered' :
                   'Rejected'}
                </span>
              </li>
              
              {/* Merchant Address */}
              {orderStatus !== 'picked-up' && orderStatus !== 'delivered' && (
                <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2'>
                  <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Merchant Address: </p>
                  <div className='amarante-regular text-wrap w-35 overflow-hidden d-block d-flex flex-column'>
                    <span>shop no 59</span>
                    <span className=''>Siva Sankar Vegetable Market </span>
                    <span>Siva Kummar</span>
                    <span>+91 1234567890</span>
                  </div>
                </li>
              )}
              
              {/* Customer Address (shown after pickup) */}
              {orderStatus === 'picked-up' && customerDetails && (
                <li className='d-flex flex-column flex-md-row align-items-center justify-content-between my-2'>
                  <p className='fw-bold fs-5 mb-1 mb-md-0 w-md-25'>Customer Address: </p>
                  <div className='amarante-regular text-wrap w-35 overflow-hidden d-block d-flex flex-column'>
                    <span>{customerDetails.name}</span>
                    <span className=''>{customerDetails.address}</span>
                    <span>{customerDetails.phone}</span>
                  </div>
                </li>
              )}
              
              {orderStatus === 'pending' && (
                <>
                  <button type='button' className='btn bg-primary text-white m-2 w-25 mx-auto mt-5' onClick={handleAccept}>
                    Accept
                  </button>
                  <button type='button' className='btn bg-danger text-white m-2 w-25 mx-auto' onClick={handleReject}>
                    Reject
                  </button>
                </>
              )}
              
              {orderStatus === 'accepted' && (
                <button type='button' className='btn bg-success text-white m-2 w-50 mx-auto mt-3' onClick={handleArrivedAtMerchant}>
                  Arrived at Merchant
                </button>
              )}
              
              {orderStatus === 'picked-up' && (
                <button type='button' className='btn bg-info text-white m-2 w-50 mx-auto mt-3' onClick={handleArrivedAtCustomer}>
                  Arrived at Customer
                </button>
              )}
            </ul>
          </div>
        </div>

        {/* Pickup Confirmation Modal */}
        {showPickupConfirmation && (
          <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Pickup Confirmation</h5>
                  <button type="button" className="btn-close" onClick={() => setShowPickupConfirmation(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Please verify pickup with the merchant using OTP</p>
                  <div className="mb-3">
                    <label htmlFor="pickupOtp" className="form-label">Enter OTP received by merchant</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="pickupOtp" 
                      value={pickupOtp}
                      onChange={(e) => setPickupOtp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPickupConfirmation(false)}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary" onClick={verifyPickup}>
                    Confirm Pickup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Confirmation Modal */}
        {showDeliveryConfirmation && (
          <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delivery Confirmation</h5>
                  <button type="button" className="btn-close" onClick={() => setShowDeliveryConfirmation(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Please verify delivery with the customer using OTP</p>
                  <div className="mb-3">
                    <label htmlFor="deliveryOtp" className="form-label">Enter OTP received by customer</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="deliveryOtp" 
                      value={deliveryOtp}
                      onChange={(e) => setDeliveryOtp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowDeliveryConfirmation(false)}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary" onClick={verifyDelivery}>
                    Confirm Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Map Section */}
        <div className="container mt-4">
          <h1 className='fs-3 amarante-regular text-center text-md-start'> 
            {orderStatus === 'accepted' ? 'Navigate to Merchant' : 
             orderStatus === 'picked-up' ? 'Navigate to Customer' : 
             'Delivery Area Map'}
          </h1>
          <div className="section">
            <div className="ratio ratio-16x9">
              <iframe 
                src={mapUrl}
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
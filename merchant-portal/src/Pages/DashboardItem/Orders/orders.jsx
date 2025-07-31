
import React, { useState, useEffect } from 'react';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://your-api-endpoint.com/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-3" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <div className='container-fluid p-0 min-vh-100 '>
      <h1 className='text-center p-3 amarante-regular'>Orders List</h1>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='table-dark'>
            <tr>
              <th>SI No</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order.id || index}>
                  <td>{index + 1}</td>
                  <td>{order.productName || 'N/A'}</td>
                  <td>{order.quantity || 'N/A'}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                      {order.status || 'Pending'}
                    </span>
                  </td>
                  <td>
                    <button className='btn btn-sm btn-outline-primary me-2'>
                      View
                    </button>
                    <button className='btn btn-sm btn-outline-secondary'>
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className='text-center py-4'>
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper function to determine badge class based on status
const getStatusBadgeClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed':
      return 'bg-success';
    case 'processing':
      return 'bg-primary';
    case 'shipped':
      return 'bg-info';
    case 'cancelled':
      return 'bg-danger';
    default:
      return 'bg-warning text-dark';
  }
};

export default Orders;



/*
import React, {useEffect, useState} from 'react';
import './orders.css';

const orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <div className='container-fluid p-0 min-vh-100'>
      <h1 className='text-decoration-underline text-center'>order list</h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className='table-dark border'>
            <tr className='text-white border'>
              <th>SI no</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {orders.length > 0 (
            orders.map((order, index) =>(
              <tr key= {order.id || index}>
                <td>{index + 1}</td>
                <td>{order.productName || 'N/A'}</td>
                  <td>{order.qty || 'N/A'}</td>
                  <td>
                    <span className='{`badge ${getStatusbadgeClass(order.status)}`}'>{order.status || 'pending'}</span>
                  </td>
                
              </tr>
            ))
           )
          };
        </tbody>
      </div>
    </div>
  )
}

export default orders

*/

import React from 'react'

const Dispatch = () => {
  // Sample data for the dispatch list
  const dispatchData = [
    {
      id: 1,
      orderId: 'ORD-2023-001',
      agentId: 'AGT-001',
      status: 'Delivered',
      rate: 150,
      payment: 'COD - Agent Paid',
      date: '2023-05-15'
    },
    {
      id: 2,
      orderId: 'ORD-2023-002',
      agentId: 'AGT-005',
      status: 'In Transit',
      rate: 200,
      payment: 'Online Paid',
      date: '2023-05-16'
    },
    {
      id: 3,
      orderId: 'ORD-2023-003',
      agentId: 'AGT-003',
      status: 'Cancelled',
      rate: 180,
      payment: 'N/A',
      date: '2023-05-14'
    },
    {
      id: 4,
      orderId: 'ORD-2023-004',
      agentId: 'AGT-007',
      status: 'Pending',
      rate: 220,
      payment: 'Merchant Credit',
      date: '2023-05-17'
    },
    {
      id: 5,
      orderId: 'ORD-2023-005',
      agentId: 'AGT-002',
      status: 'Delivered',
      rate: 175,
      payment: 'COD - Pending',
      date: '2023-05-18'
    },
  ];

  // Function to determine status badge color
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-success';
      case 'in transit':
        return 'bg-primary';
      case 'pending':
        return 'bg-warning text-dark';
      case 'cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  // Function to determine payment badge color
  const getPaymentBadge = (payment) => {
    if (payment.includes('Paid')) {
      return 'bg-success';
    } else if (payment === 'N/A') {
      return 'bg-secondary';
    } else if (payment.includes('Pending')) {
      return 'bg-warning text-dark';
    } else {
      return 'bg-info text-dark';
    }
  };

  return (
    <div className='container-fluid p-0 min-vh-100 bg-light'>
      <div className='p-4'>
        <h1 className='amarante-regular ms-3 mt-3 text-decoration-underline'>Dispatch List</h1>
        
        {/* Filters and search */}
        <div className='row mb-4'>
          <div className='col-md-3'>
            <select className='form-select'>
              <option value="">All Status</option>
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="in transit">In Transit</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className='col-md-3'>
            <select className='form-select'>
              <option value="">All Payment Types</option>
              <option value="cod">COD</option>
              <option value="online">Online Paid</option>
              <option value="credit">Merchant Credit</option>
            </select>
          </div>
          <div className='col-md-4'>
            <input type='text' className='form-control' placeholder='Search by Order ID or Agent ID' />
          </div>
          <div className='col-md-2'>
            <button className='btn btn-primary w-100'>Search</button>
          </div>
        </div>
        
        {/* Dispatch table */}
        <div className='table-responsive rounded-3 shadow-sm bg-white'>
          <table className='table table-hover mb-0'>
            <thead className='table-dark'>
              <tr>
                <th>SI No</th>
                <th>Order Id</th>
                <th>Agent Id</th>
                <th>Date</th>
                <th>Status</th>
                <th>Rate</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dispatchData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <a href={`/orders/${item.orderId}`} className='text-primary text-decoration-none'>
                      {item.orderId}
                    </a>
                  </td>
                  <td>
                    <a href={`/agents/${item.agentId}`} className='text-info text-decoration-none'>
                      {item.agentId}
                    </a>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`badge ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>₹{item.rate}</td>
                  <td>
                    <span className={`badge ${getPaymentBadge(item.payment)}`}>
                      {item.payment}
                    </span>
                  </td>
                  <td>
                    <button className='btn btn-sm btn-outline-primary me-2'>
                      <i className='bi bi-eye-fill'></i> View
                    </button>
                    {item.status === 'Delivered' && item.payment.includes('Pending') && (
                      <button className='btn btn-sm btn-success'>
                        <i className='bi bi-cash-stack'></i> Mark Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <nav className='mt-4'>
          <ul className='pagination justify-content-center'>
            <li className='page-item disabled'>
              <a className='page-link' href='#' tabIndex='-1'>Previous</a>
            </li>
            <li className='page-item active'><a className='page-link' href='#'>1</a></li>
            <li className='page-item'><a className='page-link' href='#'>2</a></li>
            <li className='page-item'><a className='page-link' href='#'>3</a></li>
            <li className='page-item'>
              <a className='page-link' href='#'>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Dispatch;
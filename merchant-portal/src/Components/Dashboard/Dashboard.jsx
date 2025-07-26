import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Dashboard card data with added route paths
  const topCards = [
    { title: 'Orders', value: 0, action: 'View list', path: '/Orders' },
    { title: 'Dispatches', value: 0, action: 'View list', path: '/Dispatch' },
    { title: 'Payment', value: 0, action: 'View list', path: '/Payments' }
  ];

  const bottomCards = [
    { title: 'Add Menu', value: 0, action: 'Update', path: '/Menu' },
    { title: 'Earnings', value: 0, action: 'Withdraw', path: '/Earnings' },
    { title: 'Staff', value: 0, action: 'Update', path: '/Staff' }
  ];

  // Updated card component with proper Link
  const DashboardCard = ({ title, value, action, path }) => (
    <div className='border p-3 text-center dashboard-card'>
      <h6 className='fs-4 fw-bold'>{title}</h6>
      <p className='fs-3 my-2'>{value}</p>
      <Link to={path} className='btn btn-primary text-white text-decoration-none'>
        {action}
      </Link>
    </div>
  );

  return (
    <div className='container-fluid p-3'>
      <h4 className='mb-4'>Dashboard</h4>
      
      {/* Top row of cards */}
      <div className='row g-3 mb-4'>
        {topCards.map((card, index) => (
          <div key={`top-${index}`} className='col-md-4 col-sm-6 col-12'>
            <DashboardCard {...card} />
          </div>
        ))}
      </div>
      
      {/* Bottom row of cards */}
      <div className='row g-3'>
        {bottomCards.map((card, index) => (
          <div key={`bottom-${index}`} className='col-md-4 col-sm-6 col-12'>
            <DashboardCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import './landing.css';
// import Navbar from '../Navbar/Navbar';
// import Banner from '../Banner/Banner'; {/* < Banner />  */}
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';



const Landing = () => {
  return (
    <div className='landing-container p-2'>
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Landing

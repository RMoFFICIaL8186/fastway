import React from 'react';
import './Landing.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Landing = () => {
  return (
    <div className='landing-container'>
      < Banner />
      < Products />
      < Footer />
    </div>
  )
}

export default Landing;

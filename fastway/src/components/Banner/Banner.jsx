import React from 'react';
import './Banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  };

  return (
    <div className='banner-container'>
      <div className="banner-section">
        <Slider {...settings}>
          <div className="banner-slide" key="slide-1">
            <img 
              src='/images/Bannerimg/Banner1.png'
              alt="Promotion 1" 
              className="banner-image"
            />
            {/* <div className="banner-caption">
              <h2>Summer Sale</h2>
              <p>Up to 50% off on selected items</p>
              <button className="banner-button">Shop Now</button>
            </div> */}
          </div>
          <div className="banner-slide" key="slide-2">
            <img 
              src='/images/Bannerimg/Banner2.png'
              alt="New Collection" 
              className="banner-image"
            />
            {/* <div className="banner-caption">
              <h2>New Arrivals</h2>
              <p>Discover our latest collection</p>
              <button className="banner-button">Explore</button>
            </div> */}
          </div>
          <div className="banner-slide" key="slide-3">
            <img 
              src='/images/Bannerimg/Banner3.png'
              alt="Limited Offer" 
              className="banner-image"
            />
            {/* <div className="banner-caption">
              <h2>Limited Time Offer</h2>
              <p>Free shipping on orders over $50</p>
              <button className="banner-button">Learn More</button>
            </div> */}
          </div>

            {/* <div className="banner-slide" key="slide-3">
            <img 
              src='/images/Bannerimg/Banner4.png'
              alt="Limited Offer" 
              className="banner-image"
            />
            {/* <div className="banner-caption">
              <h2>Limited Time Offer</h2>
              <p>Free shipping on orders over $50</p>
              <button className="banner-button">Learn More</button>
            </div> 
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
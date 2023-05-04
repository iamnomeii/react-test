import React from "react";
import Slider from "react-slick";
import product1 from '../../assets/images/product1.svg';
import product2 from '../../assets/images/product2.svg';
import product3 from '../../assets/images/product3.svg';
import product4 from '../../assets/images/product4.svg';
import product5 from '../../assets/images/product5.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <Slider {...settings} className='product-slider'>
      <div>
        <div className='single-slide'>
          <img src={product1} className='product-img' alt='product1' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
      <div>
        <div className='single-slide'>
          <img src={product2} className='product-img' alt='product2' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
      <div>
        <div className='single-slide'>
          <img src={product3} className='product-img' alt='product3' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
      <div>
        <div className='single-slide'>
          <img src={product4} className='product-img' alt='product4' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
      <div>
        <div className='single-slide'>
          <img src={product5} className='product-img' alt='product5' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
      <div>
        <div className='single-slide'>
          <img src={product3} className='product-img' alt='product3' />
          <div className='product-details'>
            <p className='product-title'>Product title</p>
            <p className='product-detail'>Short description goes here</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
export default SimpleSlider;
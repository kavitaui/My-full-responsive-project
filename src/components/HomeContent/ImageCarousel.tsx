import React from 'react';
import IMAGES from './Content-img/HomeContentImages/Index';

import $ from 'jquery'; // Import jQuery
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import "./HomeContent.css";

const ImageCarousel = (props: { data:unknown, scrollImages: string; }) => {
  window.jQuery = $;
  const staffImageConfig = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };
    const options = {
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
    };
  const getImages = () => {
    switch (props.scrollImages) {
      case 'partenerImages':
        return <div>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item"><img src={IMAGES.partner1} alt="partner1" /></div>
            <div className="item"><img src={IMAGES.partner2} alt="" /></div>
            <div className="item"><img src={IMAGES.partner3} alt="" /></div>
            <div className="item"><img src={IMAGES.partner5} alt="" /></div>
            <div className="item"><img src={IMAGES.partner6} alt="" /></div>
          </OwlCarousel>

        </div>
      case 'screenshotImages':
        return <div>
          <OwlCarousel className='owl-theme'{...options}>
            <div className='item' ><img src={IMAGES.screenshots1} alt="" /></div>
            <div className='item' ><img src={IMAGES.screenshots2} alt="" /></div>
            <div className='item' ><img src={IMAGES.screenshots3} alt="" /></div>
            <div className='item' ><img src={IMAGES.screenshots4} alt="" /></div>
            <div className='item' ><img src={IMAGES.screenshots5} alt="" /></div>
          </OwlCarousel>
        </div>
      case 'staffImages':
        return <div>
          <OwlCarousel className='owl-theme' {...staffImageConfig}  >
            {props?.data.map((item: any) => (
                  
              <div className='col-12 single-feedback-box'>
                <div className='row box-shadow '>
                          <div className='col-4 '>
                           

                    <img src={'/src/components/HomeContent/Content-img/HomeContentImages/' + item.image} alt="" className='feedback-img'/>
                            
                          </div>
                          <div className='col-8 feedback-content'>
                            <h4>{item.title}</h4> 
                          <span>{item.subtitle}</span> 
                        
                  </div>
                  <p>{item.para}</p>
                </div>
                  
              </div>
                    
             
              
            ))
             
            }
          </OwlCarousel>
        </div>
      default:
        return '';
    }
  }
  return (
    <>
      {getImages()}
      </>
    
  )
}

export default ImageCarousel
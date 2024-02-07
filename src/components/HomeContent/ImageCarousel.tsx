import React from 'react';
import IMAGES from './Content-img/HomeContentImages/Index';

import $ from 'jquery'; // Import jQuery
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const ImageCarousel = (props: { data:unknown, scrollImages: string; }) => {
    window.jQuery = $;
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
          <OwlCarousel className='owl-theme'{...options}>
            {props?.data.map((item: any) => (
              <div className='container'>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col-4'>
                            <div className='item' >

                              <img src={'/src/components/HomeContent/Content-img/HomeContentImages/' + item.image} alt="" />
                            </div>
                          </div>
                          <div className='col-8'>
                            <h4>{item.title}</h4> 
                            {item.subtitle}
                          </div>
                        </div>


                      </div>

                    </div>
                  </div>
                  
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
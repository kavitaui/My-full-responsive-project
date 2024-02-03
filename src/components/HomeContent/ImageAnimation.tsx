import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import React, { useEffect } from 'react';
import IMAGES from './Content-img/HomeContentImages/Index';
const ImageAnimation = () => {
  useEffect(() => {

    $("my-mobile-img").animate({
      top: '10px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, 1000);

    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
    });


  }, [])
  
  return (
    <>
      <div className='software-itegrations-list'>
        <img src={IMAGES.bgshape2} alt="" className='img-fluid' />
        <ul>
          <li data-aos="fade-down" className='aos-init aos-animate'>
          <img src={IMAGES.atlassian1} alt="" className='img-fluid atlassian1'  />
          </li>
         
          <li  data-aos="fade-right" className='aos-init aos-animate'>
            <img src={IMAGES.skype} alt="" className='img-fluid skype' />
          </li>
          <li data-aos="fade-up" className='aos-init aos-animate'>
            <img src={IMAGES.gdrive} alt="" className='img-fluid ddrive' />
          </li>
          <li data-aos="fade-down" className='aos-init aos-animate'>
            <img src={IMAGES.slack} alt="" className='img-fluid slack' />
          </li>
          <li data-aos="fade-up" className='aos-init aos-animate'>
            <img src={IMAGES.jira} alt="" className='img-fluid' />
          </li>
        </ul>
    
      </div>
    


    </>
  )
}

export default ImageAnimation
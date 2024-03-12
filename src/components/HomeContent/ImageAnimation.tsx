import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import React, { useEffect } from 'react';
import IMAGES from './Content-img/HomeContentImages/Index';
const ImageAnimation = (props: { data: unknown, SlideImages: string }) => {
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


  }, []);

  const scrollAnimation = () => {
    switch (props.SlideImages) {
      case "myscrollImages":
        return <div>
          <div className='software-itegrations-list'>
            <img src={IMAGES.bgshape2} alt="" className='img-fluid main-pic' />
            <ul>
              <li data-aos="fade-down" className='aos-init aos-animate'>
                <img src={IMAGES.atlassian1} alt="" className='img-fluid atlassian1' />
              </li>

              <li data-aos="fade-right" className='aos-init aos-animate'>
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
              <li data-aos="fade-up" className='aos-init aos-animate'>
                <img src={IMAGES.frame} alt="" className='img-fluid logoCentre' />
              </li>
            </ul>

          </div>
        </div>
      case "slidedata":
        return <div>
       
           
              <img src={IMAGES.appprogress1} alt="" data-aos="fade-down" className='aos-init aos-animate' />
        
            
              <img src={IMAGES.appprogress2} alt="" data-aos="fade-right" className='aos-init aos-animate' />
        
              <img src={IMAGES.appprogress4} alt="" data-aos="fade-up" className='aos-init aos-animate' />
       
              <img src={IMAGES.appprogress3} alt="" data-aos="fade-left" className='aos-init aos-animate' />
        
        </div>
        
      
      default:
        return '';
      



    }
  }
  return (
    <>
      kjgigiug
      {scrollAnimation()}

    </>
  )
}

export default ImageAnimation
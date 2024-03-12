import Footer from 'components/Footer/Footer';
import HomeContent from 'components/HomeContent/HomeContent';
import "components/HomeContent/HomeContent.css";
import ImageCarousel from 'components/HomeContent/ImageCarousel';
import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import { useConfig } from 'config/config';
import useTitle from 'hooks/useTitle';
import $ from 'jquery';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IMAGESH from './HomeImages/index';



const Home: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [imageAnimation, setimageAnimation] = useState(false);
  const handleAnimation = () => {
    setimageAnimation(!imageAnimation);
  }

  useEffect(() => {
    $(".my-mobile-img").animate({
      'margin-top': '-50px',
      'opacity': '1',
    }, 2000);


  }, [])
 

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
 
      <div className="main-banner-area">
        <Navbar color="black" logotype='logo' />
     
          <div className="container main-area">
      

              <div className="row">
                <div className="col-lg-8 col-md-12 main-content">
                  <div className='spiralAnimation shape5' >


                    <img src={IMAGESH.shape7} alt="" className='spiral' />
                  </div>
                  <button type="button" className="btn btn-primary trail-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                    #Get your 14 days free trail
                  </button>

                  <div className="content"><h1>The Revolutionary App That
                    Makes Your Life Easier Than Others Apps</h1></div>
                  <button type="button" className="btn btn-primary start trail-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Start Free Trail
                  </button>
                  <div className="trusted-by">
                    <div className="row  justify-content-center ">
                      <div className="col-lg-2 col-md-12 ">Trusted by:</div>
                      <div className="col-lg-10 col-md-12">  <ImageCarousel data="" scrollImages="partenerImages" /></div>
                    </div>
                  </div>
                  <div className="shape-overlay">

                  </div>

                </div>
                <div className="col-lg-4 col-md-12 app">

              <img src={IMAGESH.banner1} className='my-mobile-img img-fluid' />
                </div>
              </div>
            
          </div>
      
        
       
      </div>
      <HomeContent/>
       
        <Footer/>
      
     
      
    </>
  )
}

export default memo(Home)

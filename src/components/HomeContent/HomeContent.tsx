import React, { useEffect, useState } from 'react';
import IMAGES from './Content-img/HomeContentImages/Index';
import "./HomeContent.css";
import IconDisplay from './IconDisplay';
import ImageCarousel from './ImageCarousel';
import { JSONContent } from './JSONContent';
import ImageAnimation from './ImageAnimation';


const HomeContent = () => {
  const [imageAnimation, setimageAnimation] = useState(false);
  const handleAnimation = () => {
    setimageAnimation(!imageAnimation);
  }

  useEffect(() => {

    setimageAnimation(true)
    const timeoutId = setTimeout(() => {
      setimageAnimation(false);

    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [setimageAnimation]);



  return (
    <>
     
      <div className="contianer main-container1" >
        <div className="main-content">
         <div className="col-12 justify-content-md-centre">
          <div className="row">
            <div className="col-lg-8 col-md-12 main-content">
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
                    <div className="col-lg-10 col-md-12">  <ImageCarousel scrollImages="partenerImages" /></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 app">
              <div className={`${imageAnimation ? "animate" : ""}`}  >
                <img src={IMAGES.banner1} alt='' className='img-fluid w-60 float-start animated-image'
                /></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div >
        <div className='container jystify-content-md-center '>
          <div className='col-12 friendly-icons'>
            <div className="row gx-5 mb-5">
              <IconDisplay data={JSONContent.Myitems} design="icon-design2" />

            </div>
          </div>
        </div>

      </div>

      <div className="col-12">
        <div className="row justify-content-md-center">
          <div className="col-lg-12 col-md-12 col-12   img-fluid ">
            <img src={IMAGES.video} alt='' className='video' />
          </div>
        </div>
      </div>
      <div className=' ptb-100'>
        <div className='container '>
          <div className='row justify-content-md-center features-area '>
            <div className='col-12 col-lg-6 col-md-12'>
              <div className='content-list'>
                <div className='heading'>
                  <h2>Most Probably You Are Getting Best App Ever</h2>
                  <p>Cloud based storage for your data backup just log in with your mail account
                    from play store and using whatever you want for your business purpose orem ipsum dummy text.
                    Never missyour chance its just began.</p>

                </div>

              </div>

              <IconDisplay data={JSONContent.MyIcons} design="icon-design" />

              <div className='col-12'>
                <div className='row'>
                  <div className="col-4">
                    <button type="button" className="btn btn-primary start trail-button icon-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                      Start Free Trail
                    </button>
                  </div>
                  <div className='col-8 icon-button-relate'>
                    See All Features
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 col-12'>
              <div className='features-img '>
                <img src={IMAGES.app} alt='' className=' phone-img img-fluid' />
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className='feature-area ptb-100'>
        <div className='continer justify-content-md-center key-feature'>
          <div className='section-title'>
            <span>KEY FEATURES</span>
            <h2>Most Probably Included Best Features Ever</h2>


          </div>
        </div>
        <div className='col-12'>
          <div className="row">
            <IconDisplay data={JSONContent.MyFeatureItems} design="icon-design1" />
          </div>
        </div>
        
      </div>
      <div className='app-progress-area ptb-100'>
      <div className='container '>
       
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12 '>
              <div className='app-progress-img text-center'>
                <img src={IMAGES.app2} alt="" className='img-fluid' />
                </div>
            </div>
            <div className='col-lg-6 col-md-12 '>
              <span>APP PROGRESS</span>
              <h2>Set Up The Challenges and Track Your Progress</h2>
              <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.

                Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy backup just log in with your mail account from.</p>
              <button type="button" className="btn btn-primary trail-button" data-toggle="button" aria-pressed="false" autocomplete="off"> Start Free Trail</button>
            </div>

          </div>
        </div>
      </div>
      <div className='app-download-area'>
        <div className='container'>
          <div className='app-download-inner'>
            <div className='row align-items-center app-content-area'>
              <div className='col-lg-6 col-md-12'>
                <span className='sub-title'>DOWNLOAD APP</span>
                <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                <p>Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.</p>
                <div className='btn-box'>
                  <a href="#" className='playstore-btn' target='_blank'>
                    <img src={IMAGES.playstore} alt="" />
                   
                   Get It On
                      <span> Google Play</span>
                  </a>
                  <a href="#" className='applestore-btn' target='_blank'>
                    <img src={IMAGES.applestore} alt="" />
                 
                     Download On The
                      <span>Apple Store</span>
                  </a>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <img src ={IMAGES.app3} alt="" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='screenshot-area bg-color ptb-100'>
         <div className='container'>
          <div className='section-title'>
            <span className='sub-title'>
              APP SCREENS
            </span>
            <h2>Beautifully Crafted All App Screenshots</h2>
           
          </div>
          <div className='owl-carousel owl-loaded '>
            <ImageCarousel scrollImages="screenshotImages" />
            </div>
        </div>
     
      </div>
      <div className='software-integration-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              < div className="software-integration-content">
                <span className='sub-title'>
                  SOFTWARE INTEGRATIONS
                </span>
                <h2>Easy & Perfect Solution With Latest Software Integrations</h2>
                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.

                  Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy.</p>
                <button type="button" className="btn btn-primary start trail-button icon-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                  Start Free Trail
                </button>
              </div>
            </div>
            <div className='col-lg-6 clo-md-12'>
              <ImageAnimation />
            </div>
          </div>
        </div>
       
      </div>
        


    </>
  )
}
export default HomeContent;

import AppProgress from 'components/HomeContent/AppProgress';
import 'components/HomeContent/HomeContent.css';
import IconDisplay from 'components/HomeContent/IconDisplay';
import { JSONContent } from 'components/HomeContent/JSONContent';
import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import { useConfig } from 'config/config';
import useTitle from 'hooks/useTitle';
import $ from 'jquery';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IMAGES2 from './homeDemo-imges/index';
import './Homedemo1.css';


const Homedemo1: React.FC =() => {
    const { app } = useConfig()
    const { t, i18n } = useTranslation()
    const setTitle = useTitle()
    
   

    useEffect(() => {
        setTitle(t('home.head-title'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage])
    useEffect(() => {
        $(".my-downward-image").animate({
            'margin-top': '100px',
            'opacity':1,
           
           
           
       
        }, 1000);

    //     AOS.init({
    //         duration: 1000,  // Animation duration in milliseconds
    //     });
     },[])

    return (
        <>
           
            <div className='banner-area'>
                <Navbar color='orange' color1='white' logotype='blacklogo' />
                <div className='container-fluid'>
                    <div className='row align-items-center m-0'>
                        <div className='col-lg-6 col-md-12 p-0'>
                            <div className='banner-content' >
                                <span className='sub-title' >
                                    Get your 14 days free trail
                                </span>
                                <h1>The Revolutionary App That Makes Your Life Easier Than Others</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>
                                <a href="prcing.html" >
                                <button type="button" className="btn btn-primary trail-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                                    start free trail
                                </button></a>
                           </div>
                        </div>
                      
                        <div className='col-lg-6 col-md-12 p-0  '>
                            {/* <div className='img-fluid  aos-init aos-animate' data-aos="fade-down"></div> */}
                            <img src={IMAGES2.bannerapp2} alt="" className='my-downward-image '  />
                        </div>
                        </div>
                  
                </div>
                <div className='banner-shape'>
                    <img src={IMAGES2.shape2} alt="" />
                </div>
                <div className='banner-shape2'>
                    <img src={IMAGES2.shape11} alt="" />
                </div>
                <div className='banner-shape3'>
                    <img src={IMAGES2.shape11} alt="" />
                </div>
                <div className='banner-shape4'>
                    <img src={IMAGES2.shape16} alt="" />
                </div>
                <div className='banner-shape5'>
                    <img src={IMAGES2.shape19} alt="" />
                </div> 
            </div> 
            <div className='feature-area1 pb-75'>
                <div className='container' >
                    <div className='col-12'>
                    <div className='row justify-content-center'>
                     <IconDisplay data={JSONContent.MyFeaturesArea}  design='IconDesign3' /> 
                        </div>
                        </div>
               </div>
            </div>
            <div className='container features5' >
                <div className='col-12'>
                    < div className="row align-items-center">
                     <div className='col-lg-6 col-md-12 col-sm-12'>
                        <span className='sub-title'>KEY FEATURES</span>
                         <h1>Most Probably Included Best Features Ever</h1>
                        <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.

                            Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want chance its just began.</p>
                         <button type="button" className="btn btn-primary start trail-button2" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Start Free Trail
                         </button>
                        <span>See All Features</span>
                      </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 feature-content'>
                       
                            <div className='row content-width' >
                               <IconDisplay data={JSONContent.MyFeatureItems2} design={'feature-design'} /></div>
                                           
                                       
                    </div>
                    </div>
                </div>
            </div>
                        
            <AppProgress/>    
                 
        
         

            
         
         
            
         
        </>
    )
}

export default memo(Homedemo1);

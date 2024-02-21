import { memo, useEffect } from 'react'
import React,{useState} from 'react';
import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import useTitle from 'hooks/useTitle'
import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import IMAGES2 from './homeDemo-imges/index';
import './Homedemo1.css';
import { JSONContent } from 'components/HomeContent/JSONContent';
import IconDisplay from 'components/HomeContent/IconDisplay';


const Homedemo1: React.FC =() => {
    const { app } = useConfig()
    const { t, i18n } = useTranslation()
    const setTitle = useTitle()
    
   

    useEffect(() => {
        setTitle(t('home.head-title'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage])

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
                        <div className='col-lg-6 col-md-12 p-0'>
                           <img src ={IMAGES2.bannerapp2}  alt="" className='img-fluid'/>
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
            <div className='feature-area pb-75'>
                <div className='container' >
                    <div className='col-12'>
                    <div className='row justify-content-center'>
                     <IconDisplay data={JSONContent.MyFeaturesArea}  design='IconDesign3' /> 
                        </div>
                        </div>
               </div>
            </div>
            
            
         
         
            
         
        </>
    )
}

export default memo(Homedemo1);

import { memo, useEffect } from 'react'

import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import Footer from 'components/Footer/Footer'
import { HeaderBase } from 'components/HeaderBase/HeaderBase'
import IconDisplay from 'components/HomeContent/IconDisplay'
import { JSONContent } from 'components/HomeContent/JSONContent'
import Navbar from 'components/Navbar/Navbar'
import useTitle from 'hooks/useTitle'
import React from 'react'
import IMAGES6 from './AboutImage/index'

const About: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return <><div><Navbar color='red' logotype='blacklogo' />
    <HeaderBase />
  </div>
    <div className='abt-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            <div className='abt-content'>
              <span className='sub-title'>
                ABOUT PAKAP
                <h2>A Few Words About Us</h2>
                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
              </span>
              
            </div>
            <div className='feature-text'>
              <h6>Our App</h6>
              <p>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
            </div>
            <div className='feature-text'>
              <h6>Our Mission</h6>
              <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
            </div>
            <div className='button-box'>
            <button type="button" className="btn btn-primary start trail-button" data-toggle="button" aria-pressed="false" autocomplete="off">
              Start Free Trail
              </button>
              <span>See All Features</span>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <img src={IMAGES6.appimg7} alt='' className='img-fluid'/>
          </div>

        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row  '>
      
          <IconDisplay data={JSONContent.ReviewCountArea} design='reviewDesign' />
       
      </div>
    </div>
  
  
  
    <Footer/>
  </>
}

export default memo(About)

import { useConfig } from 'config/config';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Footer from 'components/Footer/Footer';
import IconDisplay from 'components/HomeContent/IconDisplay';
import { JSONContent } from 'components/HomeContent/JSONContent';
import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import useTitle from 'hooks/useTitle';


const BlogGrid: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()



  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Navbar color='red' logotype='blacklogo' />
      <div className='page-title-area'>

        <div className='container'>


          <div className='page-title-content'>
            <h2>Blog Grid</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Blog Grid</li>
            </ul>
          </div>

        </div>

        <div className='divider'>

        </div>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
</div>
      </div>
      <div className='blog-area'>
        <div className='container'>
          <div className='col-12'>
           <div className='row align-items-center'>
              <IconDisplay data={JSONContent.BlogPost} design="design4" />
             </div>
          </div>
        </div>
      </div>
    
   <Footer/>
    </>
   

 
  )
}

export default memo(BlogGrid);
import { memo, useEffect } from 'react'

import Footer from 'components/Footer/Footer'
import HomeContent from 'components/HomeContent/HomeContent'
import Navbar from 'components/Navbar/Navbar'
import { useConfig } from 'config/config'
import useTitle from 'hooks/useTitle'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
 
      <div className="main-banner-area">
        <Navbar color=""/>
        <HomeContent />
        <Footer/>
      </div>
     
      
    </>
  )
}

export default memo(Home)

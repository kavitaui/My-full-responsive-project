import { memo, useEffect } from 'react'

import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import Footer from 'components/Footer/Footer'
import { HeaderBase } from 'components/HeaderBase/HeaderBase'
import Navbar from 'components/Navbar/Navbar'
import useTitle from 'hooks/useTitle'
import React from 'react'

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
    <Footer/>
  </>
}

export default memo(About)

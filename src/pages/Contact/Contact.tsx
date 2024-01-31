import { memo, useEffect } from 'react'

import { useConfig } from 'config/config'
import { useTranslation } from 'react-i18next'

import useTitle from 'hooks/useTitle'

const Contact: React.FC = () => {
  const { app } = useConfig()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <div>hello</div>
    </>
  )
}

export default memo(Contact)

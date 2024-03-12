import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import useTitle from 'hooks/useTitle';



import Footer from 'components/Footer/Footer';
import { HeaderBase } from 'components/HeaderBase/HeaderBase';
import { useConfig } from 'config/config';


const ProductList: React.FC = () => {
    const { app } = useConfig()
    const { t, i18n } = useTranslation()
    const setTitle = useTitle()



    useEffect(() => {
        setTitle(t('home.head-title'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage])


    return (
        <div>
            <Navbar color='red' />
            <HeaderBase />
            
            <Footer/>
        </div>
    )
}

    export default memo(ProductList);
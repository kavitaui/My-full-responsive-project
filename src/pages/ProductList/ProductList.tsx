import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


import Navbar from 'components/Navbar/Navbar';
import 'components/Navbar/Navbar.css';
import useTitle from 'hooks/useTitle';
import './ProductList.css';


import Footer from 'components/Footer/Footer';
import { HeaderBase } from 'components/HeaderBase/HeaderBase';
import OdometerAnimationFile from 'components/OdometerAnimation/OdometerAnimationFile';
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
            <div className='container'>
                <div className='row pakap-grid-sorting  align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <p>We found <span className="number">6 </span>products available for you</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      
                        <div className='select-box ordering' >
                            <label>
                                Sort By:</label>
                             <select className='form-select' >
                                <option selected>Default</option>
                                <option value="1">Popularity</option>
                                <option value="1">Latest</option>
                                <option value="1">Price:high to low</option>
                                <option value="1">Price: low to high</option>
                            </select>   
                        </div> 
                     
                        </div>

                </div>   
            </div>
            <Footer />
            <Footer />
            
            <OdometerAnimationFile />
            <Footer />
            <Footer />
            
        </div>
    )
}

    export default memo(ProductList);
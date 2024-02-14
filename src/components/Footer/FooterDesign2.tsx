import IMAGES from 'components/HomeContent/Content-img/HomeContentImages/Index';

import React from 'react';
import { BsMessenger, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
             
                    <div className='col-12'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 '>
                            <div className='footer-content'>
                                <a href="index.html" className='logo' >
                                    <img src={IMAGES.logo2} alt="" />
                                </a>
                                <p>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit, auctor nam elit nulla.</p>
                                <ul className='social-links'>
                                    <li>
                                        <a href="#" target="_blank">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <BsTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <BsMessenger />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            
                             </div>  
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-2'>

                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-2'>

                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-2'>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>

                        </div>
                        
                    </div>
                </div>
                
                <hr className='horizontel' />
                    
                    <p className='copyright'>Copyright @2024 Pakap. All Rights Reserved by <span>EnvyTheme</span></p>
                </div>




            </div>
     
    )
}

export default Footer

import IMAGES from 'components/HomeContent/Content-img/HomeContentImages/Index';

import React from 'react';
import { BsMessenger, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer-area-design'>
            <div className='container'>
             
                    <div className='col-12'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 '>
                            <div className='footer-content'>
                                <a href="index.html" className='logo' >
                                    <img src={IMAGES.logo2} alt="" />
                                </a>
                                <p className='footet-2para'>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit, auctor nam elit nulla.</p>
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
                            <div className='single-footer-widget pl-2'>
                                <h3>Company</h3>
                                <ul className="link-list">
                                    <li>
                                        <a href="about-simple.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="featurs-2.html">Core Services</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="feedback.html">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-2'>
                            <div className='single-footer-widget pl-2'>
                            <h3>Support</h3>
                            <ul className="link-list">
                                <li>
                                    <a href="about-simple.html">Services</a>
                                </li>
                                <li>
                                    <a href="featurs-2.html">Support</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">privacy Policy</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ's</a>
                                </li>
                                <li>
                                    <a href="feedback.html">Contact</a>
                                </li>
                                </ul>
                                </div>

                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-2'>
                            <div className='single-footer-widget pl-2'>
                            <h3>Useful Links</h3>
                                <ul className="link-list">
                                <li>
                                    <a href="about-simple.html">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="featurs-2.html">Return Policy</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="faq.html">How It Work?</a>
                                </li>
                                <li>
                                    <a href="feedback.html">Contact Us</a>
                                </li>
                                </ul>
                                </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-footer-widget pl-2'>
                                <h3>Newsletter</h3>
                                <p>Best solution for your it startup business, consecteturadipiscing elit.</p>
                                </div>
                            

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

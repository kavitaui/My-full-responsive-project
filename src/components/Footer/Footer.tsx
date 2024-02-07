import IMAGES from 'components/HomeContent/Content-img/HomeContentImages/Index';

import { BsMessenger, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import "./Footer.css";
import React from 'react';
const Footer = () => {
  return (
    <div className='footer-area'>
      <div className='container'>
        <div className='footer-content'>
          <a href="index.html" className='logo' >
            <img src={IMAGES.logo2} alt="" />
          </a>
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
          <hr className='horizontel' />
          <ul className='navbar-footer'>
            <li>
              Services
            </li>
            <li >
              Support
            </li>
            <li >
            Privacy Policy
            </li>
            <li >
              FAQ's
            </li>
            <li >
            Contact
            </li>

          </ul>
          <p className='copyright'>Copyright @2024 Pakap. All Rights Reserved by <span>EnvyTheme</span></p>
        </div>

        

       
      </div>
    </div>
  )
}

export default Footer
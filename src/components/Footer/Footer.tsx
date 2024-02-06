import React from 'react'
import IMAGES from './Navbar/img/LandingPage-images'

const Footer = () => {
  return (
      <div className='footer-area'>
          <div className='container'>
              <div className='footer-content'>
                  <a href="index.html" className='logo' >
                      <img src={IMAGES.logo} alt=""/>
                </a>
              </div>
          </div>
    </div>
  )
}

export default Footer
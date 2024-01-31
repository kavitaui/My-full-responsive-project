
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import DropdownMenu from './DropdownMenu';
import IMAGES from './img/LandingPage-images/index';
import './MyNavbarItems';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="container">
        <div className="col-12 ">
          <div className="row justify-content-md-centre">
            <div className="navbar">
              <div className="col-md-6 col-6  col-lg-2 order-1 order-md-1 order-lg-1">
                <div className="navbar-brand"> <img src={IMAGES.logo} alt="" /></div>
              </div>
              <div className={` col-lg-8  order-3 order-md-3 order-lg-2  d-lg-block  ${!isVisible ? "d-none" : ""}`}>
                <div className="navbar-component ">
                  <div className="container">
                    <div className="col-12">
                      <div className="row justify-content-md-centre">
                        <DropdownMenu />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-6  order-2 order-md-2 order-lg-3">
                <div className="col-12 justify-content-md-center">
                  <div className="row ">
                    <div className="col-8">
                      <div className="sign-up">
                        <button type="button" className="btn btn-primary sign-up-button" data-toggle="button" aria-pressed="false" >
                          Get Started
                        </button>

                      </div>
                    </div>
                    <div className="col-4 d-lg-none hamburger-menu">
                      <AiOutlineMenu onClick={() => { setIsVisible(!isVisible) }} />


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* <HomeContent /> */}
          <div className="shape-overlay">
           
          </div>
       
        </div>
      </div>

    </>
  )
}
export default Navbar;
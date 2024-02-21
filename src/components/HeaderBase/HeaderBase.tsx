import React from 'react';
import '../../pages/Contact/Contact.css';
import './HeaderBase.css';

export const HeaderBase = () => {
  return (
      <div><div className='page-title-area'>

          <div className='container'>


              <div className='page-title-content'>
                  <h2>Contact Us</h2>
                  <ul>
                      <li>
                          <a href="index.html">Home</a>
                      </li>
                      <li>Contact Us</li>
                  </ul>
              </div>

          </div>

          <div className='divider'>

          </div>
          <div className='lines'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>

          </div>


      </div></div>
  )
}

import React from 'react';
import './HomeContent.css';
import ImageAnimation from './ImageAnimation';

const AppProgress = () => {
  return (
      <>
          <div className='outer-box'>
              <div className='container'>
              <div className='row'>
              <div className='col-lg-6 col-md-12'>
                      <ImageAnimation SlideImages={'slidedata'} data={undefined} />
              </div>
                      <div className='col-lg-6 col-md-12'>
                          <div className='title'>
                              APP PROGRESS
                              <h2>Set Up The Challenges and Track Your Progress</h2>
                              <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.

                                  Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy backup just log in with your mail account from.</p>
                              <button type="button" className="btn btn-primary trail-button" data-toggle="button" aria-pressed="false" autocomplete="off"> Start Free Trail</button>
                          </div>
</div>
                  </div>
                  </div>

              
          </div>
      </>
  )
}

export default AppProgress
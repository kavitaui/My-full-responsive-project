import React from 'react'
import ImageAnimation from './ImageAnimation'

export const SoftwareIntegrationArea = () => {
  return (
      <>
          <div className='software-integration-area ptb-100'>
              <div className='container'>
                  <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12'>
                          < div className="software-integration-content">
                              <span className='sub-title'>
                                  SOFTWARE INTEGRATIONS
                              </span>
                              <h2>Easy & Perfect Solution With Latest Software Integrations</h2>
                              <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.

                                  Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy.</p>
                              <button type="button" className="btn btn-primary start trail-button icon-button" data-toggle="button" aria-pressed="false" autocomplete="off">
                                  Start Free Trail
                              </button>
                          </div>
                      </div>
                      <div className='col-lg-6 col-md-12 img-fluid'>
                          <ImageAnimation SlideImages={'myscrollImages'} data={undefined} />

                      </div>

                  </div>
              </div>

          </div></>
  )
}

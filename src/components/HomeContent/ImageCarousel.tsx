import React from 'react'
import IMAGES from './Content-img/HomeContentImages/Index'

import $ from 'jquery' // Import jQuery
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import OwlCarousel from 'react-owl-carousel'

const ImageCarousel = (props: { scrollImages: string }) => {
  window.jQuery = $
  const options = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
  }
  const getImages = (contentType: string) => {
    switch (contentType) {
      case 'partenerImages':
        return (
          <div>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <img src={IMAGES.partner1} alt="partner1" />
              </div>
              <div className="item">
                <img src={IMAGES.partner2} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.partner3} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.partner5} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.partner6} alt="" />
              </div>
            </OwlCarousel>
          </div>
        )
      case 'screenshotImages':
        return (
          <div>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <img src={IMAGES.screenshots1} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.screenshots2} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.screenshots3} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.screenshots4} alt="" />
              </div>
              <div className="item">
                <img src={IMAGES.screenshots5} alt="" />
              </div>
            </OwlCarousel>
          </div>
        )
      default:
        return ''
    }
  }
  return <>{getImages(props.scrollImages)}</>
}

export default ImageCarousel

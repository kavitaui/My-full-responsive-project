import React from 'react';

import IMAGES3 from 'pages/BlogGrid/BlogGridImages/index';
import { BiMobileAlt } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { PiCloud } from 'react-icons/pi';
import {
  RiCustomerService2Fill, RiEarthLine, RiEyeLine,
  RiFingerprintLine,
  RiLeafLine, RiMapPin2Line, RiPieChart2Line,
  RiSecurePaymentLine,
  RiVipDiamondLine
} from "react-icons/ri";
import { SlCloudDownload } from 'react-icons/sl';
import { TbStack2 } from 'react-icons/tb';
import "./HomeContent.css";

const IconDisplay = (props: { design: string; data: unknown[]; }) => {

  const IconDisplay = (icontype: string) => {
    switch (icontype) {
      case 'BiMobileAlt':
        return <BiMobileAlt />
      case 'FiAward':
        return <FiAward />
      case 'RiFingerprintLine':
        return <RiFingerprintLine />
      case 'RiVipDiamondLine':
        return <RiVipDiamondLine />
      case 'SlCloudDownload':
        return <SlCloudDownload />
      case 'PiCloud':
        return <PiCloud />
      case 'RiEyeLine':
        return <RiEyeLine />
      case 'TbStack2':
        return <TbStack2 />
      case 'RiLeafLine':
        return <RiLeafLine />
      case 'RiSecurePaymentLine':
        return <RiSecurePaymentLine />
      case 'RiPieChart2Line':
        return <RiPieChart2Line />
      case 'RiCustomerService2Fill':
        return <RiCustomerService2Fill />
      case 'RiEarthLine':
        return <RiEarthLine />
      case 'RiMapPin2Line':
        return <RiMapPin2Line />


      default:
        return null
    }
  }
  const BlogImage = (contentType: string) => {
    switch (contentType) {
      case 'blog1':
        return IMAGES3.blog1;
      case 'blog2':
        return IMAGES3.blog2;
      case 'blog3':
        return IMAGES3.blog3;
      case 'blog4':
        return IMAGES3.blog4;
      case 'blog5':
        return IMAGES3.blog5;
      case 'blog6':
        return IMAGES3.blog6;
      case 'blog7':
        return IMAGES3.blog7;
      case 'blog8':
        return IMAGES3.blog8;
      case 'blog9':
        return IMAGES3.blog9;
      default:
        return null;
    }


  }

  const getContent = (contentType: string, item: unknown) => {
    switch (contentType) {
      case 'icon-design1':
        return (
          <div
            className={`col-lg-4 col-md-6 col-12 main-features-area ${props.design}`}
            key={item.id}
          >
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <div className="row">
                      <div
                        className={`${item.imageClass} icon-size  `}
                        style={{ background: item.color }}
                      >
                        {IconDisplay(item.imageClass)}
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'icon-design':
        return (
          <div className="col-12">
            <div
              key={item.id}
              className={`row boxes mb-5 justify-content-md-center ${props.design}`}
            >
              <div className="icon col-12   col-md-3">
                <div
                  className={`${item.imageClass} icon-size  `}
                  style={{ background: item.color }}
                >
                  {IconDisplay(item.imageClass)}
                </div>
              </div>
              <div className="col-12 col-md-9">
                <h2 className="title ">{item.title}</h2>
                <p className="content">{item.subtitle}</p>
              </div>
            </div>
          </div>
        )
      case 'icon-design2':
        return (
          <div
            key={item.id}
            className={`col-lg-3 col-xl-3 col-md-6 col-sm-6 ${props.design}`}
          >
            <div className="row boxes mb-5 justify-content-md-center">
              <div className="icon ">
                <div
                  className={`${item.imageClass} icon-size`}
                  style={{ background: item.color }}
                >
                  {IconDisplay(item.imageClass)}
                </div>
              </div>
              <div className="icon-content">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div>{item.subtitle}</div>
              </div>
            </div>
          </div>
        )
      case 'my-design3':
        return (

          <div className={'col-lg-4 col-md-6 col-12 '}>

            <div className='single-contact-info-box'>

              <div className='icon bg'>{IconDisplay(item.image)}</div>
              <div >{item.phoneno1}
              </div>
              < div >{item.phoneno2}
              </div>
            </div>
          </div>
        )
      case 'icon-design1':
        return (
          <div
            className={`col-lg-4 col-md-6 col-12 main-features-area ${props.design}`}
            key={item.id}
          >
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <div className="row">
                      <div
                        className={`${item.imageClass} icon-size  `}
                        style={{ background: item.color }}
                      >
                        {IconDisplay(item.imageClass)}
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'IconDesign3':
        return (
          <div
            key={item.id}
            className={`col-lg-3 col-md-3 col-sm-6 c0l-6 ${props.design}`}
          >
            <div
              className={`${item.imageClass} icon-size  `}
              style={{ background: item.color }}
            >
              {IconDisplay(item.imageClass)}
              <div>  <h2 className="title ">{item.title}</h2></div>
            </div>
          </div>
        )
      case 'design4':
        return (
          <div
            key={item?.id}
            className={`col-lg-4 col-md-4 col-sm-6 col-6 ${props.design}`}>
            <div> <img src={BlogImage(item.image)} alt='' className='img-fluid' /></div>
            <div className="blogContent"><h3>{ item.subtitle}</h3></div>
            
          </div>
        )
       default:
        return ''
      }
  }
  
  return (
    <>{props?.data?.map((item: unknown) => getContent(props.design, item))}
    </>
  )
}

export default IconDisplay;

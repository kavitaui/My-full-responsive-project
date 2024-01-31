
import React from "react";

const BasicStructure = () => {
  return (
    <>
      <div className="container">
        <div className="col-12">
          <div className="row justify-content-md-center ">
            <div className="navbar">
              <div className=" col-md-2 col-6 bg-red   order-1 order-md-1">
                <div className="navbar-brand ">logo Pakap</div>
              </div>
              <div className=" col-md-8  order-3 order-md-2 ">
                <div className="navbar-item">NavbarItems</div>
              </div>
              <div className="col-md-2 col-6 bg-blue  order-2 order-md-3 ">
                <div className="Nav-sign ">Get Started</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12 main-content">
              <button>#Get your 14 days free trail</button>

              <div className="content">Main Content</div>
              <button>Start Free Trail</button>
              <div className="trusted-by">
                <div className="row  justify-content-center">
                  <div className="col-lg-2 col-md-12">Trusted by:</div>
                  <div className="col-lg-10 col-md-12">pics</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12"> mobile pic</div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">1</div>
            <div className="col-lg-3 col-md-6 col-12">2</div>
            <div className="col-lg-3 col-md-6 col-12">3</div>
            <div className="col-lg-3 col-md-6 col-12">4</div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-12 audio ">audio</div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-md-6  col-12 app-features ">
              <div className="col-12">
                Most Probably You Are Getting Best App Ever
              </div>
              <div className="col-12">1 content</div>
              <div className="col-12">2 content</div>
              <div className="col-12">3 content</div>
              <div className="col-12">4 content</div>
              <div className="col-12">button</div>
            </div>
            <div className="col-md-6  col-12 display-app ">mobile pic</div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-12 key-features ">key Features</div>
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">content1</div>
                <div className="col-lg-4 col-md-6 col-12">content2</div>
                <div className="col-lg-4 col-md-6 col-12">content3</div>
                <div className="col-lg-4 col-md-6 col-12">content1</div>
                <div className="col-lg-4 col-md-6 col-12">content2</div>
                <div className="col-lg-4 col-md-6 col-12">content3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicStructure

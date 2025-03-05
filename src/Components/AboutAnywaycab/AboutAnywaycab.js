import React from 'react'
import dotted from "../../Assets/Images/bg/dotted-round-bg.png"
import anchor from "../../Assets/Images/bg/anchor-img.png"
import secModal1 from "../../Assets/Images/bg/sec-modal-img-01.jpg"
import secModal2 from "../../Assets/Images/bg/sec-modal-img-02.jpg"
import { Button } from 'react-bootstrap'

const AboutAnywaycab = () => {
  return (
    <>
      <section className="abouttAnyWaySec">
        <div className="aboutSecRound">
          <span className="bg-orange round-small"></span>
          <span className="bg-dark-blue round-small"></span>
          <span className="bg-dark-blue round-small"></span>
          <span className="bg-dark-blue round-big"></span>
        </div>
        <div className="aboutSecBg">
          <img src={dotted} alt="Bg" />
          <img src={anchor} alt="Bg" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="aboutSecColLeftImg">
                <span className="sec-left-one"><img src={secModal1} className="img-fluid" alt="Img" /></span>
                <span className="sec-left-two"><img src={secModal2} className="img-fluid" alt="Img" /></span>
                <div className="experience-info">
                  <h5>15+ <span>Years of <br /> Experience</span></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutSecHeaderTwo">
                <h2>About Anywaycab | One Way Cab Service</h2>
                <p>
                  The Best Taxi Service Provider Since 15+ Years. We are one of the leading one way cab, outstation cab & roud-trip taxi service provider in India.
                </p>
                <p>We provide one way cab service in all major cities in India & connect people from different cities of the India.</p>
                <p>Whether you want to take one way cab, outstation cabs, local city cabs or round-trip taxi. Anywaycab offers you best taxi booking experience. We provide you personal taxis and cabs for best travel experience. Anywaycab guranteed lowest price in the market with no any cancellation fees or hidden cost, We are transparent and secure one way cab service provider.</p>
                <Button type='submit' className="btn learnMore d-flex align-items-center">
                  {/* <i className="bx bx-bar-chart me-2"></i> */}
                  <i className="fa-solid fa-signal-bars-good me-2"></i>
                  Learn More
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutAnywaycab

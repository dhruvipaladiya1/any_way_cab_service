import React from 'react'
import dotted from "../../Assets/Images/bg/dotted-round-bg.png"
import anchor from "../../Assets/Images/bg/anchor-img.png"
import secModal1 from "../../Assets/Images/bg/sec-modal-img-01.jpg"
import secModal2 from "../../Assets/Images/bg/sec-modal-img-02.jpg"

const AboutAnywaycab = () => {
  return (
    <>
      <section class="abouttAnyWaySec">
        <div class="aboutSecRound">
          <span class="bg-orange round-small"></span>
          <span class="bg-dark-blue round-small"></span>
          <span class="bg-dark-blue round-small"></span>
          <span class="bg-dark-blue round-big"></span>
        </div>
        <div class="aboutSecBg">
          <img src={dotted} alt="Bg" />
          <img src={anchor} alt="Bg" />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="aboutSecColLeftImg">
                <span class="sec-left-one"><img src={secModal1} class="img-fluid" alt="Img" /></span>
                <span class="sec-left-two"><img src={secModal2} class="img-fluid" alt="Img" /></span>
                <div class="experience-info">
                  <h5>15+ <span>Years of <br /> Experience</span></h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="aboutSecHeaderTwo">
                <h2>About Anywaycab | One Way Cab Service</h2>
                <p>
                  The Best Taxi Service Provider Since 15+ Years. We are one of the leading one way cab, outstation cab & roud-trip taxi service provider in India.
                </p>
                <p>We provide one way cab service in all major cities in India & connect people from different cities of the India.</p>
                <p>Whether you want to take one way cab, outstation cabs, local city cabs or round-trip taxi. Anywaycab offers you best taxi booking experience. We provide you personal taxis and cabs for best travel experience. Anywaycab guranteed lowest price in the market with no any cancellation fees or hidden cost, We are transparent and secure one way cab service provider.</p>
                <a href="#!" class="btn btn-primary d-flex align-items-center"><i class="bx bx-bar-chart me-2"></i>Learn More</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutAnywaycab

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Assets/Css/home.css"
import BookCab from './BookCab/BookCab'
import car1 from "../Assets/Images/car1.png"
import list from "../Assets/Images/list.png"
import taxiDriver from "../Assets/Images/taxi-driver.png"
import tag from "../Assets/Images/tag.png"
import hours from "../Assets/Images/24-hours.png"

import catSec2 from "../Assets/Images/bg/any-cat-sec-bg-02.png"
import catSec3 from "../Assets/Images/bg/any-cat-sec-bg-03.png"
import cars1 from "../Assets/Images/car1.jpg"
import cars2 from "../Assets/Images/car2.jpg"
import cars3 from "../Assets/Images/car3.png"
import { Link } from 'react-router'
import OurTaxiRoutesHome from './OurTaxiRoutes/OurTaxiRoutesHome'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import AboutAnywaycab from './AboutAnywaycab/AboutAnywaycab'

const Home = () => {

  return (
    <>
      {/* banner section */}
      <div className='mainBannerSec position-relative'>
        <div className='mainBannerBg'>
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className='text-center'>
                <BookCab />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Clean and Hygienic Car Section */}
      <section className='mt-4'>
        <Container>
          <div className='mainClean'>
            <div className='secondClean'>
              <div className='thiredClean'>
                <span><img src={car1} width="35" /></span>
                <span>Clean and Hygienic Car</span>
              </div>
              <div className='thiredClean'>
                <span><img src={list} width="35" /></span>
                <span>Transparent Billing</span>
              </div>
              <div className='thiredClean'>
                <span><img src={taxiDriver} width="35" /></span>
                <span>Professional Drivers</span>
              </div>
              <div className='thiredClean'>
                <span><img src={tag} width="35" /></span>
                <span>Lowest Price Guarantee</span>
              </div>
              <div className='thiredClean'>
                <span><img src={hours} width="35" /></span>
                <span>24*7 Helpline Number</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Special Benefits Section */}
      <section className="benefits-sec">
        <div className="benefitsSec-bg">
          <img src={catSec2} className="vector-round" alt="Img" />
          <img src={catSec3} className="design-round" alt="Img" />
        </div>
        <div className="benefitsRoundSec-colors">
          <span className="bg-orange round-small"></span>
          <span className="bg-orange round-small"></span>
          <span className="bg-dark-blue round-small"></span>
          <span className="bg-dark-blue round-small"></span>
        </div>
        <div className="container">
          <div className="benefitsSec-header">
            <h2>Special Benefits & Offers On Outstation, Round-Trip & One Way Cab Service</h2>
            <p>Book One Way Cab, Outstation Taxi Or Round-Trip Cab With Anywaycab & Get Special Benefits & Offers e.g No Return Fare Charge, No Any Convenience (Booking Or Cancellation) Charges, No Any Hidden Cost, Get Up To 40% Discount On Your First Ride.</p>
          </div>
          <Row className="wow fadeInUp" data-wow-duration="1s">
            <Col md={4} sm={4} lg={4}>
              <div className="benefitsCatGrid">
                <div className="benefitsCardImg">
                  <a href="/"><img src={cars1} className="img-fluid" /></a>
                </div>
                <div className="benefitsCardContent d-flex align-items-center justify-content-between">
                  <div>
                    <h4><a href="/">Return Fare, Not Fair! Pay only one-side fare for your one-way drop journey.</a></h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={4} lg={4}>
              <div className="benefitsCatGrid">
                <div className="benefitsCardImg">
                  <a href="/"><img src={cars2} className="img-fluid" /></a>
                </div>
                <div className="benefitsCardContent d-flex align-items-center justify-content-between">
                  <div>
                    <h4><a href="/">Book taxi to your favourite destination with no convenience fee.</a></h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} sm={4} lg={4}>
              <div className="benefitsCatGrid">
                <div className="benefitsCardImg">
                  <a href="/"><img src={cars3} className="img-fluid" /></a>
                </div>
                <div className="benefitsCardContent d-flex align-items-center justify-content-between">
                  <div>
                    <h4><a href="/">Book Your First Ride & Get Up to <br /> 40% Discount!</a></h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* One Way Taxi Routes Section */}
      <OurTaxiRoutesHome />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/*About Anywaycab Section */}
      <AboutAnywaycab />

    </>
  )
}

export default Home

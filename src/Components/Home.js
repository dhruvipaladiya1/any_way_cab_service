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

import customer1 from "../Assets/Images/c1.png"
import customer2 from "../Assets/Images/c2.png"
import customer3 from "../Assets/Images/c3.png"
import customer4 from "../Assets/Images/c4.png"
import CountUp from 'react-countup'
import LocalPackages from './LocalPackages/LocalPackages'
import OneWayCabRoutes from './OneWayCabRoutes/OneWayCabRoutes'
import Blogs from './Blogs/Blogs'
import OurTopCabRoot from './OurTaxiRoutes/OurTopCabRoot'
import CustomerReviews from './CustomerReviews/CustomerReviews'

import anyCatSec from "../Assets/Images/bg/any-cat-sec-bg-03.png"
import Slider1 from "../Assets/Images/g1.png"
import Slider2 from "../Assets/Images/g2.png"
import Slider3 from "../Assets/Images/g3.png"
import Slider4 from "../Assets/Images/g4.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {

  const testimonials = [Slider1, Slider2, Slider3, Slider4, Slider1]

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

      {/* Customers count Section */}
      <section className="customerSec">
        <div className="customerSec-colors">
          <span className="bg-orange round-small"></span>
          <span className="bg-orange round-small"></span>
          <span className="bg-dark-blue round-small"></span>
          <span className="bg-dark-blue round-big"></span>
        </div>
        <Container>
          <div className="counter-group customerCounterGroup m-0">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 d-flex">
                <div className="customerGroup flex-fill">
                  <div className="customerCount d-flex align-items-center">
                    <div className="countImg">
                      <img src={customer1} alt="Icon" />
                    </div>
                    <div className="countContent">
                      {/* <h4><span className="counterUp">6,800</span>+</h4> */}
                      <h4><CountUp start={0} end={6800} duration={3} separator="," />+</h4>
                      <p>Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex">
                <div className="customerGroup flex-fill">
                  <div className="customerCount d-flex align-items-center">
                    <div className="countImg">
                      <img src={customer2} alt="Icon" />
                    </div>
                    <div className="countContent">
                      {/* <h4><span className="counterUp">5000</span>k</h4> */}
                      <h4><CountUp start={0} end={5000} duration={3} separator="," />k</h4>
                      <p>One Way Cab Routes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex">
                <div className="customerGroup flex-fill">
                  <div className="customerCount d-flex align-items-center">
                    <div className="countImg">
                      <img src={customer3} alt="Icon" />
                    </div>
                    <div className="countContent">
                      {/* <h4><span className="counterUp">4.88</span></h4> */}
                      <h4><CountUp start={0} end={4.88} duration={3} separator="," /></h4>
                      <p>User Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex">
                <div className="customerGroup flex-fill">
                  <div className="customerCount d-flex align-items-center">
                    <div className="countImg">
                      <img src={customer4} alt="Icon" />
                    </div>
                    <div className="countContent">
                      {/* <h4><span className="counterUp">50,000</span>+</h4> */}
                      <h4><CountUp start={0} end={50000} duration={3} separator="," />+</h4>
                      <p>Successful Trip</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Local Packages Section */}
      <LocalPackages />

      {/* One Way Cab Routes Section */}
      <OneWayCabRoutes />

      {/* Blog Section */}
      <Blogs />

      {/* Our Top Cab Root Section */}
      <OurTopCabRoot />

      {/* Customer Reviews Anywaycab Section */}
      <CustomerReviews />

      {/* Slider Section */}
      <section class="top-features-anys bg-light">
        <div class="sec-bg">
          <img src={anyCatSec} class="design-round" alt="Img" />
        </div>

        <div class="container">
          <div class="charter-company-slider owl-carousel">
            <div class="charter-company-logo">
              <span> <img src={Slider1} /></span>
            </div>
            <div class="charter-company-logo">
              <span> <img src={Slider2} /></span>
            </div>
            <div class="charter-company-logo">
              <span> <img src={Slider3} /></span>
            </div>
            <div class="charter-company-logo">
              <span> <img src={Slider4} /></span>
            </div>
          </div>
        </div>

        <Container>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials?.length > 0 && testimonials?.map((item, id) => {
              return (
                <SwiperSlide>
                  <div className='item' key={id}>
                    <div className='charter-company-slider'>
                      <div class="charter-company-logo">
                        <span> <img src={item} /></span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </section>


    </>
  )
}

export default Home

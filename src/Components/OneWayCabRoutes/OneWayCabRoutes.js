import React from 'react'
import { Col, Row } from 'react-bootstrap'
import m1 from "../../Assets/Images/m.jpg"

const OneWayCabRoutes = () => {
  return (
    <>
      <section class="commonSection cabRoutesSec">
        <div class="container">
          <div class="cabRoutesSecHeading">
            <h2>Our Most Popular One Way Cab Routes</h2>
            <p>This one way taxi route through India is one of the most popular routes for travellers. We offer a one way cab service for various popular tourist routes in India.
            </p>
          </div>

          <Row>
            {/* <div class="popular-slider-group">
              <Row> */}
            <Col md={6} lg={3} sm={6} class="rental-car-item">
              <div class="cabRoutesItem mb-0">
                <div class="cabRoutesImg">
                  <a href="/"><img src={m1} class="img-fluid" /></a>
                  {/* <div class="fav-item justify-content-end">
                        <a href="javascript:void(0)" class="fav-icon"><i class="feather-heart"></i></a>
                      </div> */}
                </div>
                <div class="cabRoutesContent">
                  <div class="cabRoutesFeatures">
                    <div class="list-rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 class="cabRoutesTitle">
                      <a href="#!">Ahmedabad to Mumbai Cab</a>
                    </h3>
                  </div>
                  <div class="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div class="listing-button">
                    <a href="#!" class="btn bookTaxi"><span><i class="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} class="rental-car-item">
              <div class="cabRoutesItem mb-0">
                <div class="cabRoutesImg"><a href="/"><img src={m1} class="img-fluid" /></a></div>
                <div class="cabRoutesContent">
                  <div class="cabRoutesFeatures">
                    <div class="list-rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 class="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div class="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div class="listing-button">
                    <a href="#!" class="btn bookTaxi"><span><i class="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} class="rental-car-item">
              <div class="cabRoutesItem mb-0">
                <div class="cabRoutesImg"><a href="/"><img src={m1} class="img-fluid" /></a></div>
                <div class="cabRoutesContent">
                  <div class="cabRoutesFeatures">
                    <div class="list-rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 class="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div class="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div class="listing-button">
                    <a href="#!" class="btn bookTaxi"><span><i class="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} class="rental-car-item">
              <div class="cabRoutesItem mb-0">
                <div class="cabRoutesImg"><a href="/"><img src={m1} class="img-fluid" /></a></div>
                <div class="cabRoutesContent">
                  <div class="cabRoutesFeatures">
                    <div class="list-rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 class="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div class="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div class="listing-button">
                    <a href="#!" class="btn bookTaxi"><span><i class="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            {/* </Row>
            </div> */}
          </Row>

        </div>
      </section>
    </>
  )
}

export default OneWayCabRoutes

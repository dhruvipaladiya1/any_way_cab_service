import React from 'react'
import { Col, Row } from 'react-bootstrap'
import m1 from "../../Assets/Images/m.jpg"

const OneWayCabRoutes = () => {
  return (
    <>
      <section className="commonSection cabRoutesSec">
        <div className="container">
          <div className="cabRoutesSecHeading">
            <h2>Our Most Popular One Way Cab Routes</h2>
            <p>This one way taxi route through India is one of the most popular routes for travellers. We offer a one way cab service for various popular tourist routes in India.
            </p>
          </div>

          <Row>
            {/* <div className="popular-slider-group">
              <Row> */}
            <Col md={6} lg={3} sm={6} className="rental-car-item">
              <div className="cabRoutesItem mb-0">
                <div className="cabRoutesImg">
                  <a href="/"><img src={m1} className="img-fluid" /></a>
                  {/* <div className="fav-item justify-content-end">
                        <a href="javascript:void(0)" className="fav-icon"><i className="feather-heart"></i></a>
                      </div> */}
                </div>
                <div className="cabRoutesContent">
                  <div className="cabRoutesFeatures">
                    <div className="list-rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 className="cabRoutesTitle">
                      <a href="#!">Ahmedabad to Mumbai Cab</a>
                    </h3>
                  </div>
                  <div className="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div className="listing-button">
                    <a href="#!" className="btn bookTaxi"><span><i className="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} className="rental-car-item">
              <div className="cabRoutesItem mb-0">
                <div className="cabRoutesImg"><a href="/"><img src={m1} className="img-fluid" /></a></div>
                <div className="cabRoutesContent">
                  <div className="cabRoutesFeatures">
                    <div className="list-rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 className="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div className="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div className="listing-button">
                    <a href="#!" className="btn bookTaxi"><span><i className="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} className="rental-car-item">
              <div className="cabRoutesItem mb-0">
                <div className="cabRoutesImg"><a href="/"><img src={m1} className="img-fluid" /></a></div>
                <div className="cabRoutesContent">
                  <div className="cabRoutesFeatures">
                    <div className="list-rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 className="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div className="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div className="listing-button">
                    <a href="#!" className="btn bookTaxi"><span><i className="feather-calendar me-2"></i></span>Book Taxi Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={6} className="rental-car-item">
              <div className="cabRoutesItem mb-0">
                <div className="cabRoutesImg"><a href="/"><img src={m1} className="img-fluid" /></a></div>
                <div className="cabRoutesContent">
                  <div className="cabRoutesFeatures">
                    <div className="list-rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <span>(5.0) 1220 reviews</span>
                    </div>
                    <h3 className="cabRoutesTitle"><a href="#!">Ahmedabad to Mumbai Cab</a></h3>
                  </div>
                  <div className="cabRoutesDetails">
                    <p>Book Premium Quality Ahmedabad to Mumbai Cab At The Best Price. Get up to 20% Discount On Your First Ride. Best & Top Rated One Way Cab In Ahmedabad.</p>
                  </div>
                  <div className="listing-button">
                    <a href="#!" className="btn bookTaxi"><span><i className="feather-calendar me-2"></i></span>Book Taxi Now</a>
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

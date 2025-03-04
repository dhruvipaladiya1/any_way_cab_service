import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import serviceRight from "../../Assets/Images/bg/service-right.svg"
import serviceIcone1 from "../../Assets/Images/icons/services-icon-01.svg"
import serviceIcone2 from "../../Assets/Images/icons/services-icon-02.svg"
import serviceIcone3 from "../../Assets/Images/call.png"

const WhyChooseUs = () => {
  return (
    <>
      <section className="commonSection whyChoose position-relative">
        <div className="whyChoose-right">
          <img src={serviceRight} className="img-fluid" alt="services right" />
        </div>
        <Container>
          <div className="whyChoose-heading">
            <h2>Why Choose Us</h2>
            <p>We aim to provide a first-className taxi service, getting you from door-to-destination in style and comfort all for a low fixed price.</p>
          </div>
          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 d-flex">
                <div className="services-group service-date flex-fill">
                  <div className="services-icon border-secondary">
                    <img className="icon-img bg-secondary" src={serviceIcone1} alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>Best Price Guarantee</h3>
                    <p>With low fixed prices on all journeys, we can offer a service that you can trust with no hidden fees.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 d-flex">
                <div className="services-group service-loc flex-fill">
                  <div className="services-icon border-warning">
                    <img className="icon-img bg-warning" src={serviceIcone2} alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>Easy & Quick Booking</h3>
                    <p>Book taxi on call or use our online booking portal and book your next journey in three simple step.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 d-flex">
                <div className="services-group service-book flex-fill">
                  <div className="services-icon border-dark">
                    <img src={serviceIcone3} className="icon-img bg-dark" />
                  </div>
                  <div className="services-content">
                    <h3>Customer Care 24/7</h3>
                    <p>Our booking expert available 24/7 to book your taxi online. Need any help? Contact now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default WhyChooseUs

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import car1 from "../../Assets/Images/blog/blog-4.jpg"
import car2 from "../../Assets/Images/blog/blog-3.jpg"
import car3 from "../../Assets/Images/blog/blog-10.jpg"

const Blogs = () => {
  return (
    <>
      <section className="blog-section blogSec news-section blogNewSec mt-120 zindex-1 bg-light">
        <Container>
          <div className="cabRoutesSecHeading">
            <h2>Blogs</h2>
          </div>
          <Row>
            <Col md={6} lg={4} sm={4} className='d-lg-flex'>
              <div className="blog blogGrid grid-blog">
                <div className="blogImg blog-image">
                  <a href="blog-details.html"><img className="img-fluid" src={car1} alt="Post Image" /></a>
                </div>
                <div className="blogContent">
                  <p className="blogCategory">
                    <a href="javascript:void(0)"><span>Journey</span></a>
                  </p>
                  <h3 className="blogTitle"><a href="blog-details.html">The 2023 Ford F-150 Raptor – A First Look</a></h3>
                  <p className="blogDescription">Covers all aspects of the automotive industry with a focus on accessibility and consumer relevance.....</p>
                  <ul className="blogMetaItem mb-0">
                    <li className="date-icon"><i className="fa-solid fa-calendar-days"></i> <span>October 6, 2022</span></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} sm={4} className='d-lg-flex'>
              <div className="blog blogGrid grid-blog">
                <div className="blogImg blog-image">
                  <a href="blog-details.html"><img className="img-fluid" src={car2} alt="Post Image" /></a>
                </div>
                <div className="blogContent">
                  <p className="blogCategory">
                    <a href="javascript:void(0)"><span>Journey</span></a>
                  </p>
                  <h3 className="blogTitle"><a href="blog-details.html">Tesla Model S: Top Secret Car Collector’s Garage</a></h3>
                  <p className="blogDescription">Catering to driving enthusiasts, Road & Track provides engaging content on.....</p>
                  <ul className="blogMetaItem mb-0">
                    <li className="date-icon"><i className="fa-solid fa-calendar-days"></i> <span>March 6, 2023</span></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} sm={4} className='d-lg-flex'>
              <div className="blog blogGrid grid-blog">
                <div className="blogImg blog-image">
                  <a href="blog-details.html"><img className="img-fluid" src={car3} alt="Post Image" /></a>
                </div>
                <div className="blogContent">
                  <p className="blogCategory">
                    <a href="javascript:void(0)"><span>Journey</span></a>
                  </p>
                  <h3 className="blogTitle"><a href="blog-details.html">Dedicated To Cars, Covering Everything</a></h3>
                  <p className="blogDescription">Known for its irreverent take on car culture, offers a mix of news, reviews.....</p>
                  <ul className="blogMetaItem mb-0">
                    <li className="date-icon"><i className="fa-solid fa-calendar-days"></i> <span>March 6, 2023</span></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Blogs

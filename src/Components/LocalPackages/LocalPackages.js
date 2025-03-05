import React from 'react'
import destination1 from "../../Assets/Images/bg/destination-bg-01.png"
import destination2 from "../../Assets/Images/bg/destination-bg-02.png"
import { Button, Container } from 'react-bootstrap'
import s1 from "../../Assets/Images/s1.jpg"
import s2 from "../../Assets/Images/s2.jpg"
import s3 from "../../Assets/Images/s3.jpeg"
import s4 from "../../Assets/Images/s4.jpeg"

const LocalPackages = () => {
  return (
    <>
      <section className="commonSection destinationSec">
        <div className="destinationBg">
          <img src={destination1} className="img-fluid shape-01" alt="img" />
          <img src={destination2} className="img-fluid shape-02" alt="img" />
        </div>
        <Container>
          <div className="destinationSecHeading mw-100">
            <h2>Sightseeing, Tour Packages, Outstation Tour & Local Packages            </h2>
            <p>Book Cabs for Sightseeing, Tour Package, outstation tour, full day half day cab service in India. Avail upto 50% off on full day cab booking. Make your Journey safe and hassle free with Anywaycab.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6 order-lg-1 order-sm-1">
              <div className="destinationWrap">
                <div className="destinationImg"><img src={s1} className="img-fluid" /></div>
                <div className="destinationContent">
                  <h5>Surat</h5>
                  {/* <a href="special-packages.html" className="btn btn-primary">View More<i className="bx bx-right-arrow-alt"></i></a> */}
                  <Button className="btn ViewMore">View More<i className="fa-regular fa-arrow-right"></i></Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 order-lg-1 order-sm-1">
              <div className="destinationWrap">
                <div className="destinationImg"><img src={s2} className="img-fluid" /></div>
                <div className="destinationContent">
                  <h5>Vadodara</h5>
                  {/* <a href="special-packages.html" className="btn btn-primary">Read More<i className="bx bx-right-arrow-alt"></i></a> */}
                  <Button className="btn ViewMore">View More<i className="fa-regular fa-arrow-right"></i></Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 order-lg-1 order-sm-1">
              <div className="destinationWrap">
                <div className="destinationImg"><img src={s3} className="img-fluid" /></div>
                <div className="destinationContent">
                  <h5>Rajkot</h5>
                  {/* <a href="special-packages.html" className="btn btn-primary">Read More <i className="bx bx-right-arrow-alt"></i></a> */}
                  <Button className="btn ViewMore">View More<i className="fa-regular fa-arrow-right"></i></Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 order-lg-1 order-sm-1">
              <div className="destinationWrap">
                <div className="destinationImg"><img src={s4} className="img-fluid" /></div>
                <div className="destinationContent">
                  <h5>Ahmedabad</h5>
                  {/* <a href="special-packages.html" className="btn btn-primary">Read More<i className="bx bx-right-arrow-alt"></i></a> */}
                  <Button className="btn ViewMore">View More<i className="fa-regular fa-arrow-right"></i></Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default LocalPackages

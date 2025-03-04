import React, { useState } from 'react'
import { Link } from 'react-router';
import ah from "../../Assets/Images/ah.jpg"
import { Col, Container, Row } from 'react-bootstrap';

const OurTaxiRoutesHome = () => {

  const [activeTab, setActiveTab] = useState('ahmedabad');
  const handleTabClick = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      window.scrollTo({
        top: 1200,
        behavior: 'smooth',
      });
    }, 100);
  };

  // const scrollPosition = window.scrollY;
  // console.log("Current Scroll Position:", scrollPosition);

  return (
    <>
      {/* One Way Taxi Routes Section Start */}
      <section className="commonSection bg-light taxiPopularServices">
        <Container>
          <div className="taxiSec-heading">
            <h2>Discover From 5000+ One Way Taxi Routes</h2>
            <p>Explore our routes below, select trip and choose your preferred taxi to book one way taxi for your journey.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="taxiListingGroup">
                <ul className="nav listing-buttons gap-3" data-bs-tabs="tabs">
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'ahmedabad' ? 'active' : ''}`}
                      onClick={() => handleTabClick('ahmedabad')} role="tab" aria-selected={activeTab === 'ahmedabad'}>
                      Ahmedabad
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'mumbai' ? 'active' : ''}`}
                      onClick={() => handleTabClick('mumbai')} role="tab" aria-selected={activeTab === 'mumbai'}>
                      Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'rajkot' ? 'active' : ''}`}
                      onClick={() => handleTabClick('rajkot')} role="tab" aria-selected={activeTab === 'rajkot'}>
                      Rajkot
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'surat' ? 'active' : ''}`}
                      onClick={() => handleTabClick('surat')} role="tab" aria-selected={activeTab === 'surat'}>
                      Surat
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'udaipur' ? 'active' : ''}`}
                      onClick={() => handleTabClick('udaipur')} role="tab" aria-selected={activeTab === 'udaipur'}>
                      Udaipur
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" className={`nav-link text-center ${activeTab === 'vadodara' ? 'active' : ''}`}
                      onClick={() => handleTabClick('vadodara')} role="tab" aria-selected={activeTab === 'vadodara'}>
                      Vadodara
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {(activeTab === "ahmedabad" || activeTab === "mumbai" || activeTab === "rajkot" || activeTab === "surat" || activeTab === "udaipur" || activeTab === "vadodara") && (
            <div className="">
              <div className="tab-pane" id="Carmazda">
                <Row>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                  <Col lg={3} md={6} sm={6}>
                    <a href="/" className="taxiAboutList">
                      <div className="taxiInstyIcon">
                        <img src={ah} className="img-fluid" />
                      </div>
                      <div className="taxiInstryText">
                        <h4 className="taxiSubHead">Ahmedabad to Mumbai</h4>
                      </div>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          )}

        </Container>
      </section>
      {/* One Way Taxi Routes Section End */}
    </>
  )
}

export default OurTaxiRoutesHome

import React, { useState } from 'react'
import { Badge, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { themeSelect, selectStyle, handleNumKeyDown } from "../../Configs/Utils/APIs/User_Apis"
import Select from 'react-select'
import cabact from "../../Assets/Images/cabact.png"
import cabun from "../../Assets/Images/cabun.png"
import outact from "../../Assets/Images/outact.png"
import outun from "../../Assets/Images/outun.png"
import lotaact from "../../Assets/Images/lotaact.png"
import lotaun from "../../Assets/Images/lotaun.png"
import airact from "../../Assets/Images/airact.png"
import airun from "../../Assets/Images/airun.png"
import spaact from "../../Assets/Images/spaact.png"
import spaun from "../../Assets/Images/spaun.png"

const BookCab = () => {

  const [activeTab, setActiveTab] = useState('oneWayCab');
  const [tripType, setTripType] = useState("roundtrip");
  const [HourType, setHourType] = useState("4hour");

  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');

  const [FromList, setFromList] = useState([]);
  const [from, setFrom] = useState({ value: '', label: 'Select From' });
  const [FromError, setFromError] = useState('');

  const [ToList, setToList] = useState([]);
  const [To, setTo] = useState({ value: '', label: 'Select To' });
  const [ToError, setToError] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className='search-wrapper'>
        <div>
          <div className='search-header'>
            <div className='search-nav'>
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link className={`nav-link text-center ${activeTab === 'oneWayCab' ? 'active' : ''}`}
                    onClick={() => handleTabClick('oneWayCab')}
                    role="tab" aria-selected={activeTab === 'oneWayCab'}>
                    <img alt='' src={activeTab === "oneWayCab" ? cabact : cabun} className='me-1' /> <br />
                    <span className={activeTab === "oneWayCab" ? "blueWay" : "blackWay"}>One Way Cab</span>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className={`nav-link text-center ${activeTab === 'outStation' ? 'active' : ''}`}
                    onClick={() => handleTabClick('outStation')}
                    role="tab" aria-selected={activeTab === 'outStation'}>
                    <img alt='' src={activeTab === "outStation" ? outact : outun} className='me-1' /> <br />
                    <span className={activeTab === "outStation" ? "blueWay" : "blackWay"}>Out Station</span>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className={`nav-link text-center ${activeTab === 'localTaxi' ? 'active' : ''}`}
                    onClick={() => handleTabClick('localTaxi')}
                    role="tab" aria-selected={activeTab === 'localTaxi'}>
                    <img alt='' src={activeTab === "localTaxi" ? lotaact : lotaun} className='me-1' /> <br />
                    <span className={activeTab === "localTaxi" ? "blueWay" : "blackWay"}>Local Taxi</span>
                  </Link>
                </li>
                <li className="nav-item d-lg-block d-none" role="presentation">
                  <Link className={`nav-link text-center ${activeTab === 'airportTransfer' ? 'active' : ''}`}
                    onClick={() => handleTabClick('airportTransfer')}
                    role="tab" aria-selected={activeTab === 'airportTransfer'}>
                    <img alt='' src={activeTab === "airportTransfer" ? airact : airun} className='me-1' /> <br />
                    <span className={activeTab === "airportTransfer" ? "blueWay" : "blackWay"}>Airport Transfer</span>
                  </Link>
                </li>
                <li className="nav-item d-lg-block d-none" role="presentation">
                  <Link className={`nav-link text-center ${activeTab === 'specialPackage' ? 'active' : ''}`}
                    onClick={() => handleTabClick('specialPackage')}
                    role="tab" aria-selected={activeTab === 'specialPackage'}>
                    <img alt='' src={activeTab === "specialPackage" ? spaact : spaun} className='me-1' /> <br />
                    <span className={activeTab === "specialPackage" ? "blueWay" : "blackWay"}>Special Package</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {activeTab === "oneWayCab" && (
            <div className='bannerSearchDiv mt-0 mt-lg-0'>
              <Form className='bannerSearchForm'>
                <Row>
                  <Col md={12} lg={12} className='my-lg-2 my-lg-0'>
                    <div className="d-flex flex-wrap align-items-center mb-3 gap-1">
                      <Form.Check
                        type="radio"
                        label="One-Way"
                        name="tripType"
                        id="oneWay"
                        className={tripType === "oneway" ? "firstRadioBtn me-2" : "secondEadioBtn me-2"}
                        checked={tripType === "oneway"}
                        onChange={() => setTripType("oneway")}
                      />
                      <Form.Check
                        type="radio"
                        label="Round-Trip"
                        name="tripType"
                        id="roundTrip"
                        className={tripType === "roundtrip" ? "firstRadioBtn" : "secondEadioBtn"}
                        checked={tripType === "roundtrip"}
                        onChange={() => setTripType("roundtrip")}
                      />
                      <Badge bg="danger" className="mx-4 new d-none d-lg-block">New</Badge>
                    </div>
                  </Col>
                  <div className='d-lg-flex flex-wrap  bannerSelectDiv'>
                    <Col md={12} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>From</Form.Label>
                          <Select
                            options={FromList}
                            value={from}
                            onChange={(e) => setFrom(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            className='fromSelect'
                            styles={selectStyle}
                          />
                          {FromError && <p className="error-message">{FromError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={12} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>To</Form.Label>
                          <Select
                            options={ToList}
                            value={To}
                            onChange={(e) => setTo(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            styles={selectStyle}
                            className='fromSelect'
                          />
                          {ToError && <p className="error-message">{ToError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={12} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Mobile Number</Form.Label>
                          <Form.Control type='number' placeholder='Enter Phone Number' required autoComplete='false' value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={12} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol' style={{ borderRight: "solid 1px #e7e7e7" }}>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Pickup Date</Form.Label>
                          <Form.Control type='date' placeholder='Enter Pickup Date' required autoComplete='false' value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className='addStops'>+ ADD STOPS</div>
                    <Badge bg="danger" className="mx-3 new1 d-none d-lg-block">New</Badge>
                  </div>
                </Row>
                <Button type='submit' className='input-block-btn'>Search</Button>
              </Form>
            </div>
          )}

          {activeTab === "outStation" && (
            <div className='bannerSearchDiv mt-0 mt-lg-0'>
              <Form className='bannerSearchForm'>
                <Row>
                  <Col md={12} lg={12} className='my-lg-2 my-lg-0'>
                    <div className="d-flex align-items-center mb-3 gap-1">
                      <Form.Check
                        type="radio"
                        label="One-Way"
                        name="tripType"
                        id="roundtrip"
                        className={tripType === "roundtrip" ? "firstRadioBtn me-2" : "secondEadioBtn me-2"}
                        checked={tripType === "roundtrip"}
                        onChange={() => setTripType("roundtrip")}
                      />
                    </div>
                  </Col>
                  <div className='d-flex flex-wrap  bannerSelectDiv'>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>From</Form.Label>
                          <Select
                            options={FromList}
                            value={from}
                            onChange={(e) => setFrom(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            className='fromSelect'
                            styles={selectStyle}
                          />
                          {FromError && <p className="error-message">{FromError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>To</Form.Label>
                          <Select
                            options={ToList}
                            value={To}
                            onChange={(e) => setTo(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            styles={selectStyle}
                            className='fromSelect'
                          />
                          {ToError && <p className="error-message">{ToError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Mobile Number</Form.Label>
                          <Form.Control type='number' placeholder='Enter Phone Number' required autoComplete='false' value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol' style={{ borderRight: "solid 1px #e7e7e7" }}>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Pickup Date</Form.Label>
                          <Form.Control type='date' placeholder='Enter Pickup Date' required autoComplete='false' value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className='addStops'>+ ADD STOPS</div>
                    <Badge bg="danger" className="mx-3 new1 d-none d-lg-block">New</Badge>
                  </div>
                </Row>
                <Button type='submit' className='input-block-btn'>Search</Button>
              </Form>
            </div>
          )}

          {activeTab === "localTaxi" && (
            <div className='bannerSearchDiv mt-0 mt-lg-0'>
              <Form className='bannerSearchForm'>
                <Row>
                  <Col md={12} lg={12} className='my-lg-2 my-lg-0'>
                    <div className="d-flex align-items-center mb-3 gap-1">
                      <Form.Check
                        type="radio"
                        label="4 Hour"
                        name="HourType"
                        id="4hour"
                        className={HourType === "4hour" ? "firstRadioBtn me-2" : "secondEadioBtn me-2"}
                        checked={HourType === "4hour"}
                        onChange={() => setHourType("4hour")}
                      />
                      <Form.Check
                        type="radio"
                        label="8 Hour"
                        name="HourType"
                        id="8hour"
                        className={HourType === "8hour" ? "firstRadioBtn" : "secondEadioBtn"}
                        checked={HourType === "8hour"}
                        onChange={() => setHourType("8hour")}
                      />
                      <Form.Check
                        type="radio"
                        label="12 Hour"
                        name="HourType"
                        id="12hour"
                        className={HourType === "12hour" ? "firstRadioBtn" : "secondEadioBtn"}
                        checked={HourType === "12hour"}
                        onChange={() => setHourType("12hour")}
                      />
                    </div>
                  </Col>
                  <div className='d-flex flex-wrap  bannerSelectDiv'>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>From</Form.Label>
                          <Select
                            options={FromList}
                            value={from}
                            onChange={(e) => setFrom(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            className='fromSelect'
                            styles={selectStyle}
                          />
                          {FromError && <p className="error-message">{FromError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>To</Form.Label>
                          <Select
                            options={ToList}
                            value={To}
                            onChange={(e) => setTo(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            styles={selectStyle}
                            className='fromSelect'
                          />
                          {ToError && <p className="error-message">{ToError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Mobile Number</Form.Label>
                          <Form.Control type='number' placeholder='Enter Phone Number' required autoComplete='false' value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol' style={{ borderRight: "solid 1px #e7e7e7" }}>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Pickup Date</Form.Label>
                          <Form.Control type='date' placeholder='Enter Pickup Date' required autoComplete='false' value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className='addStops'>+ ADD STOPS</div>
                    <Badge bg="danger" className="mx-3 new1 d-none d-lg-block">New</Badge>
                  </div>
                </Row>
                <Button type='submit' className='input-block-btn'>Search</Button>
              </Form>
            </div>
          )}

          {activeTab === "airportTransfer" && (
            <div className='bannerSearchDiv mt-0 mt-lg-0'>
              <Form className='bannerSearchForm'>
                <Row>
                  <div className='d-flex flex-wrap  bannerSelectDiv'>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>From</Form.Label>
                          <Select
                            options={FromList}
                            value={from}
                            onChange={(e) => setFrom(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            className='fromSelect'
                            styles={selectStyle}
                          />
                          {FromError && <p className="error-message">{FromError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>To</Form.Label>
                          <Select
                            options={ToList}
                            value={To}
                            onChange={(e) => setTo(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            styles={selectStyle}
                            className='fromSelect'
                          />
                          {ToError && <p className="error-message">{ToError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Mobile Number</Form.Label>
                          <Form.Control type='number' placeholder='Enter Phone Number' required autoComplete='false' value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol' style={{ borderRight: "solid 1px #e7e7e7" }}>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Pickup Date</Form.Label>
                          <Form.Control type='date' placeholder='Enter Pickup Date' required autoComplete='false' value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className='addStops'>+ ADD STOPS</div>
                    <Badge bg="danger" className="mx-3 new1 d-none d-lg-block">New</Badge>
                  </div>
                </Row>
                <Button type='submit' className='input-block-btn'>Search</Button>
              </Form>
            </div>
          )}

          {activeTab === "specialPackage" && (
            <div className='bannerSearchDiv mt-0 mt-lg-0'>
              <Form className='bannerSearchForm'>
                <Row>
                  <div className='d-flex flex-wrap  bannerSelectDiv'>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>From</Form.Label>
                          <Select
                            options={FromList}
                            value={from}
                            onChange={(e) => setFrom(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            className='fromSelect'
                            styles={selectStyle}
                          />
                          {FromError && <p className="error-message">{FromError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2'>
                          <Form.Label className='mb-0 d-lg-block d-none'>To</Form.Label>
                          <Select
                            options={ToList}
                            value={To}
                            onChange={(e) => setTo(e)}
                            // isSearchable={false}
                            theme={themeSelect}
                            styles={selectStyle}
                            className='fromSelect'
                          />
                          {ToError && <p className="error-message">{ToError}</p>}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol'>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Mobile Number</Form.Label>
                          <Form.Control type='number' placeholder='Enter Phone Number' required autoComplete='false' value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md={6} lg={3} className='my-2 my-lg-0'>
                      <div className='bannerSearchCol' style={{ borderRight: "solid 1px #e7e7e7" }}>
                        <Form.Group className='bannerSelect mt-2 '>
                          <Form.Label className='mb-0 d-lg-block d-none'>Pickup Date</Form.Label>
                          <Form.Control type='date' placeholder='Enter Pickup Date' required autoComplete='false' value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)} onKeyDown={(e) => handleNumKeyDown(e)} />
                        </Form.Group>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className='addStops'>+ ADD STOPS</div>
                    <Badge bg="danger" className="mx-3 new1 d-none d-lg-block">New</Badge>
                  </div>
                </Row>
                <Button type='submit' className='input-block-btn'>Search</Button>
              </Form>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default BookCab

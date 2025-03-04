import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      {/* banner start */}
      <div classNameName='mainBannerSec position-relative'>
        <div classNameName='mainBannerBg'>
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} classNameName='text-center'>
                {/* <BookCab /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home

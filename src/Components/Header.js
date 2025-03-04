import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router';
import ROUTES from '../Configs/Routes';
import logo from "../Assets/Images/logo.png"
// import MainContext from "../Configs/Context/MainContext"

const Header = () => {

  // const controllers = [];
  // const userToken = localStorage.getItem('anyWayCabUserToken');
  // const context = useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.querySelector('.mainNavbar').classList.add('fixed-top');
      } else {
        document.querySelector('.mainNavbar').classList.remove('fixed-top');
      }
    });
  }, [])

  return (
    <>
      <div className='headerMainDiv'>
        <div className='topHeader d-lg-block d-none'>
          <Container>
            <div className='headerTopLeft d-flex justify-content-between align-items-center gap-3'>
              <div className='d-flex gap-2'>
                <div className='headerContact'>
                  <a href='tel:+91-7600740092'><span className='me-2'><i className='far fa-phone-arrow-down-left' /></span>+91-7600740092</a>
                </div>
                <div className='headerContact'>
                  <a href='to:anywaycab@gmail.com'><span className='me-2'><i className='far fa-envelopes' /></span>anywaycab@gmail.com</a>
                </div>
              </div>
              <div className='headerSocials d-none d-lg-block'>
                <a href='/'><i className='fab fa-facebook-f' /></a>
                <a href='/'><i className='fab fa-twitter' /></a>
                <a href='/'><i className='fab fa-youtube' /></a>
                <a href='/'><i className='fab fa-instagram' /></a>
              </div>
            </div>
          </Container>
        </div>

        <div className='mainHeader'>
          <Navbar expand='lg' className='mainNavbar py-0' variant='dark'>
            <Container className='position-relative'>
              <Navbar.Brand className='headerLogo'>
                <Link to={ROUTES.HOME}>
                  <img src={logo} alt='siteLogo' />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='navbarScroll' />
              <Navbar.Collapse id='navbarScroll' className='navbarHeader'>
                <Nav className='ms-auto my-2 my-lg-0' style={{ maxHeight: '220px' }} navbarScroll>
                  <Nav.Link to={ROUTES.HOME} as={NavLink}>Home</Nav.Link>
                  <Nav.Link as={NavLink}>About Us</Nav.Link>
                  <Nav.Link as={NavLink}>Book Cab</Nav.Link>
                  <Nav.Link as={NavLink}>Our Routes</Nav.Link>
                  <Nav.Link as={NavLink}>Services</Nav.Link>
                  <Nav.Link as={NavLink}>Blog</Nav.Link>
                  <Nav.Link as={NavLink}>Get In Touch</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="becomeDriverBtn d-none d-lg-block">
                <Link className="becomeDriverReg" href="/become-driver">
                  <span><i className="fa-solid fa-plus"></i></span>Become A Driver
                </Link>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  )
}

export default Header

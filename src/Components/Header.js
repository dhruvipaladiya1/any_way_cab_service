import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
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
    <div>
      Header
    </div>
  )
}

export default Header

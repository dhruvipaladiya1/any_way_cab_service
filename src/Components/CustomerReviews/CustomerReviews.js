import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';

const CustomerReviews = () => {

  const options = {
    nav: true,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    },
    navText: [
      '<i class="far fa-long-arrow-left" />',
      '<i class="far fa-long-arrow-right" />',
    ],
  };

  // const testimonialList = [desti1, desti2, blog1, resort2, room3];

  return (
    <>
      <section class="clientReviewSec">
        <div class="clienReviewColors">
          <span class="bg-orange round-small"></span>
        </div>
        <Container>
          <div class="clienReviewHeader">
            <h2>Customer Reviews Anywaycab</h2>
            <p>Throughout the years, Anywaycab has received more than 500 satisfied customer reviews on website, and more than 600 revies on google business. Check why customers have choosen Anywaycab!            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CustomerReviews

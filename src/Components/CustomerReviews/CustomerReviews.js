import React from 'react'
import { Container } from 'react-bootstrap'
import quatation from "../../Assets/Images/icons/quatation-mark.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const CustomerReviews = () => {
  const testimonials = [
    {
      name: "OM shah",
      text: "The service was excellent, Thank you for everything. My taxi driver was waiting at arrivals for us with a clean sign. Driver was polite and friendly.",
    },
    {
      name: "Anjali Patel",
      text: "I really appreciate next level of taxi service of Anywaycab driver mathur. It was a great experience. Driver was polite and helpful. He delivered us to Mumbai airport on time..",
    },
    {
      name: "Daanish Kumar",
      text: "We had a very good experience with Anywaycab. It's a good option with reasonable rates compared to other taxi service providers. The taxi is well maintained, neat, and clean.",
    },
    {
      name: "Ankita Shah",
      text: "Fantastic trip to Udaipur. Helpful, Kind and courteous English's speaking driver. He was arrived in time. Would not use another company. Fantastic Experience.",
    },
    {
      name: "OM shah",
      text: "The service was excellent, Thank you for everything. My taxi driver was waiting at arrivals for us with a clean sign. Driver was polite and friendly.",
    },
    {
      name: "Anjali Patel",
      text: "I really appreciate next level of taxi service of Anywaycab driver mathur. It was a great experience. Driver was polite and helpful. He delivered us to Mumbai airport on time..",
    },
    {
      name: "Daanish Kumar",
      text: "We had a very good experience with Anywaycab. It's a good option with reasonable rates compared to other taxi service providers. The taxi is well maintained, neat, and clean.",
    },
    {
      name: "Ankita Shah",
      text: "Fantastic trip to Udaipur. Helpful, Kind and courteous English's speaking driver. He was arrived in time. Would not use another company. Fantastic Experience.",
    },
  ];

  return (
    <>
      <section className="clientReviewSec">
        <div className="clientReviewColors">
          <span className="bg-orange round-small"></span>
        </div>
        <Container>
          <div className="clientReviewHeader">
            <h2>Customer Reviews Anywaycab</h2>
            <p>Throughout the years, Anywaycab has received more than 500 satisfied customer reviews on website, and more than 600 revies on google business. Check why customers have choosen Anywaycab!            </p>
          </div>

          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials?.length > 0 && testimonials?.map((item, id) => {
              return (
                <SwiperSlide>
                  <div className='item row' key={id}>
                    <div className='col-md-12'>
                      <div class="clienReviewTestimonial d-flex">
                        <div class="clientReviewCard flex-fill">
                          <div class="clientReviewContent">
                            <div class="clientImg mb-2">
                              <p>{item?.text}</p>
                              <h5><a href="/">{item?.name}</a></h5>
                              <div class="clientQuataionMark">
                                <img src={quatation} class="img-fluid" alt="Img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </section >
    </>
  )
}

export default CustomerReviews

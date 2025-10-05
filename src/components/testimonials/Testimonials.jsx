import React from 'react'
import './Testimonials.css'
import VATR1 from '../../assets/avatar1.jpg'
import VATR2 from '../../assets/avatar2.jpg'
import VATR3 from '../../assets/avatar3.jpg'
import VATR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: VATR1,
    name: 'dgfdgdgdgdfgdg',

    review: 'dfgdfgfgdfgdfgdfgdfgdfgdgdfgdgdfgdfgdfgdgdgdgdfgdgdgdgdfgd'
  }, {
    avatar: VATR2,
    name: 'dfgdfgfd',

    review: 'dfgdfgdgdfgdgdfgdfgdfgdfgdfdgdfgdgdgfdg'
  }, {
    avatar: VATR3,
    name: 'dfgdfg',

    review: 'dklgflgdfgjd'
  }, {
    avatar: VATR4,
    name: 'dfgdfgdfgdg',

    review: 'dsdfsdfsdfsdfsfdsfss;skdfsdfnsdlfsjdjfjksdfjskdjfksdfsdkfjshkfjhsjfhsj'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from Clint</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
   
     
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="clint__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>

            )
          })
        }

        {/* <article className="testimonial">
          <div className="clint__avatar">
            <img src={VATR2} alt="Avatar One" />

          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            dsgd dfgsdlfg dgl ddfgd dglskdfg dfgdsgdfg sdg sdfg,dfgdfg dfgljd g
            dfg ldgdgk df gdg dfkgk l;dd dgdjgk  djgk ghu s xc  sfs f
          </small>
        </article>

        <article className="testimonial">
          <div className="clint__avatar">
            <img src={VATR3} alt="Avatar One" />

          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            dsgd dfgsdlfg dgl ddfgd dglskdfg dfgdsgdfg sdg sdfg,dfgdfg dfgljd g
            dfg ldgdgk df gdg dfkgk l;dd dgdjgk  djgk ghu s xc  sfs f
          </small>
        </article>

        <article className="testimonial">
          <div className="clint__avatar">
            <img src={VATR4} alt="Avatar One" />

          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            dsgd dfgsdlfg dgl ddfgd dglskdfg dfgdsgdfg sdg sdfg,dfgdfg dfgljd g
            dfg ldgdgk df gdg dfkgk l;dd dgdjgk  djgk ghu s xc  sfs f
          </small>
        </article> */}

      </Swiper>
    </section>
  )
}

export default Testimonials
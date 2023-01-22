import React from 'react';
import Bee from '../../assets/bee.png';
import Cat from '../../assets/cat.jpg';
import Dog from '../../assets/dog.png';
import Pig from '../../assets/pig.jpeg';

import './Testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


export const data = [
  {
    avatar: Bee,
    name: 'Marvin',
    review: 'Sum sum ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab aliquam, laudantium amet veritatis a quasi vero blanditiis dignissimos nemo fugit libero assumenda distinctio eaque perspiciatis eveniet repellat! Nulla, voluptatum.'
  },

  {
    avatar: Cat,
    name: 'Taz',
    review: 'Miau miau ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab aliquam, laudantium amet veritatis a quasi vero blanditiis dignissimos nemo fugit libero assumenda distinctio eaque perspiciatis eveniet repellat! Nulla, voluptatum.'
  },

  {
    avatar: Dog,
    name: 'Frank',
    review: 'Wuff wuff ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab aliquam, laudantium amet veritatis a quasi vero blanditiis dignissimos nemo fugit libero assumenda distinctio eaque perspiciatis eveniet repellat! Nulla, voluptatum.'
  },

  {
    avatar: Pig,
    name: 'Bacon',
    review: 'Oink oink ... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab aliquam, laudantium amet veritatis a quasi vero blanditiis dignissimos nemo fugit libero assumenda distinctio eaque perspiciatis eveniet repellat! Nulla, voluptatum.'
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clients about me in the</h5>
      <h2>testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        
      {
        data.map((
          {avatar, name, review}, index
        ) => {
          return (
            
            <SwiperSlide key={index} className='testimonial'>
            
              <div className="client__avatar">
                <img src={avatar} alt={name}></img>
              </div>
    
              <h5 className='client__name'>{name}</h5>
              
              <small className='client__review'>
                {review}
              </small>

          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

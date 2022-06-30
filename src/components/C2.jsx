import React from 'react'


import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
// import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './C2.css';

const C2 = () => {


    var menu = ['Slide 1', 'Slide 2', 'Slide 3']
    var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })



  return (
    
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <div className='Carrousel__nav'>
            <div class="swiper-pagination"></div>
        </div>

</div>
  )
}

export default C2
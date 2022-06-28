import React from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carrousel.css';

const Carrousel = () => {

  const slides = [];
  // const images = [
  //   {
  //     image: `../images/mercedesphotos/carrousels/carrousel1-1.jpg`,
  //     alt: 'mercedes-front'
  //   },
  //   {
  //     image: `../images/mercedesphotos/carrousels/carrousel1-2.jpg`,
  //     alt: 'mercedes-side'
  //   },
  //   {
  //     image: `../images/mercedesphotos/carrousels/carrousel1-3.jpg`,
  //     alt: 'mercedes-rear'
  //   },
  // ];

  //i < 5 zmienic 5 pozniej na props
  for(let i=0; i<3; i+=1){
    slides.push(
      <SwiperSlide className='SwiperSlide' key={`slide-${i}`}>
        <div className='SwiperSlide__text'>
          <p className='SwiperSlide__text__title'>The front-end design.</p>
          <p className='SwiperSlide__text__paragraph'>The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.</p>
        </div>
        <img className='SwiperSlide__img' src={require(`../images/mercedesphotos/carrousels/carrousel1-${i+1}.jpg`)} alt='mercedes image'  />
      </SwiperSlide>
    )
  }


  return (
    <div className='Carrousel'>
    <Swiper id='main' className='Carrousel__swiper'>
      {slides}

    </Swiper>
    </div>
  )
}

export default Carrousel;
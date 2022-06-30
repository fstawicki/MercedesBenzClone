import React from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carrousel.css';

import { Pagination } from "swiper";

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


  //DUMMY FOR NOW
  const slides_texts = [
    {
      title: 'The front-end design.',
      paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.'
    },
    {
      title: 'The side design.',
      paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.'
    },
    {
      title: 'The rear-end design.',
      paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.'
    },
  ]


    // If we need pagination
    const pagination = {
			clickable: true,
      renderBullet: function (index, className) {
          return '<div class="' + className + '">' + (slides_texts[index].title) + '</div>';
        },
    };


  //i < 5 zmienic 5 pozniej na props
  for(let i=0; i<3; i+=1){
    slides.push(
      <SwiperSlide className='SwiperSlide' key={`slide-${i}`}>
        <div className='SwiperSlide__text'>
          <p className='SwiperSlide__text__title'>{slides_texts[i].title}</p>
          <p className='SwiperSlide__text__paragraph'>{slides_texts[i].paragraph}</p>
        </div>
        <img className='SwiperSlide__img' src={require(`../images/mercedesphotos/carrousels/carrousel1-${i+1}.jpg`)} alt='mercedes image'  />
        <div className='pagination__container'>

        </div>
      </SwiperSlide>
    )
  }


  return (
    <div className='Carrousel'>
    <Swiper 
      loop={true} 
      id='main'
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides}

    </Swiper>
    </div>
  )
}

export default Carrousel;
import React, { Fragment } from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carrousel.css';

import { Pagination } from "swiper";

import styled from 'styled-components';

import c1 from '../images/mercedesphotos/carrousels/carrousel1-1.jpg';
import c2 from '../images/mercedesphotos/carrousels/carrousel1-2.jpg';
import c3 from '../images/mercedesphotos/carrousels/carrousel1-3.jpg';

// export const SlideWrapper = styled.div`

// background-image: url('../images/mercedesphotos/carrousels/carrousel1-${i+1}.jpg${image}');

// `
 

const Carrousel = () => {

  
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
  // backgroundImage: `url(${Background})`

  //DUMMY FOR NOW
  const slides_texts = [
    {
      title: 'The front-end design',
      paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.',
      imageURL: c1
    },
    {
      title: 'The side design',
      paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.',
      imageURL: c2
    },
    {
      title: 'The rear-end design',
      paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
      imageURL: c3
    },
  ]


    // If we need pagination
    const pagination = {
			clickable: true,
      renderBullet: function (index, className) {
          let newClassName = className + ' bulletClass';
          return '<div class="' + newClassName + '">' + (slides_texts[index].title) + '</div>';
        },
    };




    const slides = [];

  //i < 5 zmienic 5 pozniej na props i i=0 tez na np 4 jak zaczniemy 2 sekcje karuzeli
  for(let i=0; i<3; i+=1){

    let wrapperStyle = {backgroundImage: `url(${slides_texts[i].imageURL})`};

    slides.push(
      <SwiperSlide className='SwiperSlide' key={`slide-${i}`}  style={wrapperStyle}>
        
        {/* <img className='SwiperSlide__img' src={require(`../images/mercedesphotos/carrousels/carrousel1-${i+1}.jpg`)} alt='mercedes image'  /> */}
        <div className='SwiperSlide__wrapper'>
          <div className='SwiperSlide__text'>
            <p className='SwiperSlide__text__title'>{slides_texts[i].title}</p>
            <p className='SwiperSlide__text__paragraph'>{slides_texts[i].paragraph}</p>
          </div>
        </div>
      </SwiperSlide>
    )
  }


  return (
    <Fragment>

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
    </Fragment>
  )
}

export default Carrousel;
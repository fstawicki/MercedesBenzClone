import React, { Fragment, useState, useEffect } from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carrousel.css';

import { Pagination } from "swiper";


const Carrousel = (props) => {


  const [winwidth, setwinwidth] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }

  
  // If we need pagination
  const pagination = {
			clickable: true,
      renderBullet: function (index, className) {
          let newClassName = 'slideTitle';
            return '<div class="' + className + '"><p class="' + newClassName + '">' + (props.slidesData[index].title) + '</p></div>';
        },
  };


  const slides = [];

  for(let i=0; i<`${props.slidesNumber}`; i+=1){

    let wrapperStyle = {backgroundImage: `url(${props.slidesData[i].imageURL})`};

    slides.push(
      <SwiperSlide className='SwiperSlide' key={`slide-${i}`}  style={wrapperStyle}>
        <div className='SwiperSlide__wrapper'>
          <div className='SwiperSlide__text'>
            <p className='SwiperSlide__text__title'>{props.slidesData[i].title}</p>
            <p className='SwiperSlide__text__paragraph'>{props.slidesData[i].paragraph}</p>
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
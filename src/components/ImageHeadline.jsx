import React from 'react';
import './ImageHeadline.css';

const ImageHeadline = (props) => {

  let imagedivStyle = {backgroundImage: `url(${props.imgheadlineData.imageURL})`};

  return (
    <div className='ImageHeadline'>
      <div className="ImageHeadline__container">
        <div className='ImageHeadline__container__imagediv'>
          <img src={props.imgheadlineData.imageURL} alt="" />

        </div>
        <div className='ImageHeadline__container__text'>
            <p className='ImageHeadline__container__text__paragraph'>{props.imgheadlineData.headlineParagraph}</p>
            <h2 className='ImageHeadline__container__text__title'>{props.imgheadlineData.headlineTitle}</h2>
        </div>
        <div className='ImageHeadline__container__arrow'>
            >
        </div>
      </div>
    </div>
  )
}

export default ImageHeadline;
import React from 'react';
import './ImageHeadline.css';

const ImageHeadline = (props) => {

  let imagedivStyle = {backgroundImage: `url(${props.imgheadlineData.imageURL})`};

  return (
    <div className='ImageHeadline'>
        <div className='ImageHeadline__imagediv' style={imagedivStyle}></div>
        <div className='ImageHeadline__text'>
            <p className='ImageHeadline__text__paragraph'>{props.imgheadlineData.headlineParagraph}</p>
            <h2 className='ImageHeadline__text__title'>{props.imgheadlineData.headlineTitle}</h2>
        </div>
        <div className='ImageHeadline__arrow'>
            arrow
        </div>
    </div>
  )
}

export default ImageHeadline;
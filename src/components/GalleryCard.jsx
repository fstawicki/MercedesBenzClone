import React from 'react';
import './Gallery.css';

const GalleryCard = (props) => {
  return (
    <div className="Gallery__wrapper__card">
        <img src={props.image} className="Gallery__wrapper__card__image" alt="" />
        <div className="Gallery__wrapper__card__textdiv">
            <p className="Gallery__wrapper__card__textdiv__title">
               {props.title}
            </p>
            <p className="Gallery__wrapper__card__textdiv__paragraph1">
                {props.paragraph1}
            </p>
            <p className="Gallery__wrapper__card__textdiv__paragraph2">
                {props.paragraph2}
            </p>
        </div>
    </div>
  )
}

export default GalleryCard;
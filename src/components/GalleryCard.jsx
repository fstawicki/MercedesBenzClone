import React from 'react';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGear, BsGeoAlt } from "react-icons/bs";
import { FaCar, FaRoad } from "react-icons/fa";
import './Gallery.css';

const GalleryCard = (props) => {

  let cardStyle = {backgroundImage: `url(${props.image})`};


  let icon ='ss';

  let p1 = `${<FontAwesomeIcon icon={faAngleRight}/>} aaaa`

  // <BsGear />
  // <BsGeoAlt />
  // <FaRoad />

  return (
    <a href='#' className="Gallery__wrapper__card">
        <div className="Gallery__wrapper__card__image" style={cardStyle}></div>
        <div className="Gallery__wrapper__card__textdiv">
            <p className="Gallery__wrapper__card__textdiv__title">
               {props.title}
            </p>
            <p className="Gallery__wrapper__card__textdiv__paragraph1">
            <FontAwesomeIcon className='Gallery__wrapper__card__textdiv__icon' icon={faAngleRight}/>{props.paragraph1}
            </p>
            <p className="Gallery__wrapper__card__textdiv__paragraph2">
            <FontAwesomeIcon className='Gallery__wrapper__card__textdiv__icon' icon={props.icon}/>{props.paragraph2}
            </p>
        </div>
    </a>
  )
}

export default GalleryCard;
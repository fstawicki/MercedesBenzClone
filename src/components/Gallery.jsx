import React from 'react'
import GalleryCard from './GalleryCard';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCar, faGears, faLocationDot, faRoad} from "@fortawesome/free-solid-svg-icons";



import './Gallery.css';

import img1 from '../images/mercedesphotos/gallery/gallery1.jpg'; 
import img2 from '../images/mercedesphotos/gallery/gallery2.jpg'; 
import img3 from '../images/mercedesphotos/gallery/gallery3.jpg'; 
import img4 from '../images/mercedesphotos/gallery/gallery4.jpg'; 

const galleryData = [
    {
        imageURL: img1,
        title: 'Explore the A-Class',
        paragraph1: 'Details of the A-Class in your country',
        paragraph2: 'Explore now',
        icon: faCar,
    },
    {
        imageURL: img2,
        title: 'Configurator',
        paragraph1: 'Your personal A-Class',
        paragraph2: 'Configure now',
        icon: faGears,
        // icon2: <FontAwesomeIcon icon="fa-solid fa-gears" />
    },
    {
        imageURL: img3,
        title: 'Retailer search',
        paragraph1: 'Mercedes-Benz retailers near you',
        paragraph2: 'Find a retailer now',
        icon: faLocationDot,
        // icon2: <FontAwesomeIcon icon="fa-solid fa-location-dot" />
    },
    {
        imageURL: img4,
        title: 'Test drive',
        paragraph1: 'Test the A-Class',
        paragraph2: 'Book a test drive now',
        icon: faRoad,
        // icon: <FaRoad />,
        // icon2: <FontAwesomeIcon icon="fa-solid fa-steering-wheel" />
    },
]

const Gallery = () => {
  return (
    <div className='Gallery'>
        <div className="Gallery__title">
            <h2 className="Gallery__title__h2">Mercedes-Benz in your country.</h2>
        </div>
        <ul className="Gallery__wrapper">
            {
                galleryData.map((card) => {
                    return (
                        <GalleryCard
                            key={card.title}
                            image={card.imageURL} 
                            title={card.title} 
                            paragraph1={card.paragraph1} 
                            paragraph2={card.paragraph2} 
                            icon={card.icon}/>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Gallery;
import React from 'react'
import GalleryCard from './GalleryCard';

const galleryData = [
    {
        title: 'Explore the A-Class',
        paragraph1: 'Details of the A-Class in your country',
        paragraph2: 'Explore now',
        icon: '<FontAwesomeIcon icon="fa-solid fa-car-mirrors" />'
    },
    {
        title: 'Configurator',
        paragraph1: 'Your personal A-Class',
        paragraph2: 'Configure now',
        icon: '<FontAwesomeIcon icon="fa-solid fa-gears" />'
    },
    {
        title: 'Retailer search',
        paragraph1: 'Mercedes-Benz retailers near you',
        paragraph2: '<FontAwesomeIcon icon="fa-solid fa-location-dot" />',
    },
    {
        title: 'Test',
        paragraph1: 'Test the A-Class',
        paragraph2: '<FontAwesomeIcon icon="fa-solid fa-steering-wheel" />',
    },
]

const Gallery = () => {
  return (
    <div className='Gallery'>
        <div className="Gallery__title">
            <h2>Mercedes-Benz in your country.</h2>
        </div>
        <div className="Gallery__wrapper">
            <GalleryCard
                title={'sss'} 
                paragraph1={'aaa'}
                paragraph2={'ppp'}
            />
        </div>
    </div>
  )
}

export default Gallery;
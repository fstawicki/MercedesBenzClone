import React from 'react'
import GalleryCard from './GalleryCard';

import './Gallery.css';

import { GalleryData } from '../data/GalleryData.js'

const Gallery = () => {
  return (
    <div className='Gallery' id='MercedesBenzInYourCountry'>
        <div className="Gallery__title">
            <h2 className="Gallery__title__h2">Mercedes-Benz in your country.</h2>
        </div>
        <ul className="Gallery__wrapper">
            {
                GalleryData.map((card) => {
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
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import GalleryCard from './GalleryCard';

import './Gallery.css';

import { GalleryData } from '../data/GalleryData.js'

const Gallery = () => {

  const [galleryRef, galleryInView] = useInView();

  return (
        <div className='Gallery' id='MercedesBenzInYourCountry'>
        <motion.div 
          ref={galleryRef} 
          animate={{ y: galleryInView ? 0 : 40, opacity: galleryInView ? 1 : 0, animationDelay: 0.3}} 
          transition={{ duration: 1 }}
        >
            <div className="Gallery__title">
                <h2 className="Gallery__title__h2">Mercedes-Benz in your country.</h2>
            </div>
            <ul className="Gallery__wrapper">
                {
                    GalleryData.map((card) => {
                        return (
                            <GalleryCard
                                key={card.title}
                                link={card.link}
                                image={card.imageURL} 
                                title={card.title} 
                                paragraph1={card.paragraph1} 
                                paragraph2={card.paragraph2} 
                                icon={card.icon}/>
                        )
                    })
                }
            </ul>
        </motion.div>
        </div>
  )
}

export default Gallery;
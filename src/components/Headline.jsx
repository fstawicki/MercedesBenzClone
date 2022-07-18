import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import './Headline.css';

const Headline = (props) => {

  const [headlineRef, headlineInView] = useInView();

  return (
    <div className="Headline" id={props.title}>
        <div className="Headline__container">
        <motion.div 
          ref={headlineRef} 
          animate={{ y: headlineInView ? 0 : 40, opacity: headlineInView ? 1 : 0, animationDelay: 0.5}} 
          transition={{ duration: 0.5 }}
        >
          <h2 className='Headline__container__title'>{props.title}</h2>
          <p className='Headline__container__text'>{props.paragraph}</p>
        </motion.div>
        </div>
    </div>
  )
}

export default Headline
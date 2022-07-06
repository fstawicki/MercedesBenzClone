import React from 'react'
import './Headline.css';

const Headline = (props) => {
  return (
    <div className="Headline">
        <div className="Headline__container">
            
            <h2 className='Headline__container__title'>{props.title}</h2>
            <p className='Headline__container__text'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default Headline
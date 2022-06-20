import React, { Fragment } from 'react'
import './HeroPage.css';

const HeroPage = (props) => {
  return (
    <div className='HeroPage'>
      <div className='HeroPage__overlay'>
        <div className='HeroPage__overlay__upperText'>
          <h1 className='HeroPage__overlay__upperText__h1'>A-Class Saloon.</h1>
          <p className='HeroPage__overlay__upperText__p'>Compact entry into the world of premium saloon cars.</p>
          </div>
        <div className='HeroPage__overlay__lowerText'>
          <div className='HeroPage__overlay__lowerText__left'>
            <p>Infotainment system</p>
            <h2>MBUX</h2>
          </div>
          <div className='HeroPage__overlay__lowerText__right'>
            <p>Available as</p>
            <h2>Plug-in Hybrid</h2>
          </div>
        </div>
    </div>
      {props.children}
    </div>
  )
}

export default HeroPage
import React from 'react';
import './HeroPage.css';

const HeroPage = (props) => {

  return (
    <div className='HeroPage'>
        <div className='HeroPage__overlay'>
          <div className='HeroPage__overlay__upperText' id='AClassSaloon'>
            <h1 className='HeroPage__overlay__upperText__h1'>A-Class Saloon.</h1>
            <p className='HeroPage__overlay__upperText__p'>Compact entry into the world of premium saloon cars.</p>
            </div>
          <div className='HeroPage__overlay__lowerText'>
            <div className='HeroPage__overlay__lowerText__left'>
              <p>Infotainment system</p>
              <p className='HeroPage__overlay__lowerText__left__large-text'>MBUX</p>
            </div>
            <div className='HeroPage__overlay__lowerText__right'>
              <p>Available as</p>
              <p className='HeroPage__overlay__lowerText__right__large-text'>Plug-in Hybrid</p>
            </div>
          </div>
      </div>
      {props.children}
    </div>
  )
}

export default HeroPage
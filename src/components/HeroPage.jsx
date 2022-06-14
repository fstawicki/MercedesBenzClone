import React, { Fragment } from 'react'
import './HeroPage.css';
import Navbar from './Navbar';

const HeroPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='banner'>HeroPage</div>
    </Fragment>
  )
}

export default HeroPage
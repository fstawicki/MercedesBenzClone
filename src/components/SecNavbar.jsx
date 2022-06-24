import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './SecNavbar.css';

const SecNavbar = () => {
  return (
    <div name="sec" className='SecNavbar'>
      <div className='SecNavbar__container'>
        <ul className='SecNavbar__container__ul'>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>A-Class Saloon</a>
            </li>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>Exterior</a>
            </li>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>Interior</a>
            </li>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>Technology</a>
            </li>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>Safety</a>
            </li>
            <li>
              <a href='#' activeclass="active" to="test1" spy='true' smooth='true' offset={50} duration={500}>Mercedes-Benz in your country</a>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default SecNavbar
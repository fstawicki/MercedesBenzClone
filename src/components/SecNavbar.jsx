import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll";

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './SecNavbar.css';

const SecNavbar = (props) => {
  return (
    <div name="sec" className={props.stickyClass}>
      <div className='SecNavbar__container'>
        <ul className='SecNavbar__container__ul'>
            <li>
              <a>A-Class Saloon</a>
            </li>
            <li>
              <a href='#'>Exterior</a>
            </li>
            <li>
              <a href='#'>Interior</a>
            </li>
            <li>
              <a href='#'>Technology</a>
            </li>
            <li>
              <a href='#'>Safety</a>
            </li>
            <li>
              <a href="">
            Mercedes-Benz in your country

              </a>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default SecNavbar
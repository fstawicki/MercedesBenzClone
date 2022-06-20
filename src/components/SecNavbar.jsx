import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './SecNavbar.css';

const SecNavbar = () => {
  return (
    <div name="sec" className='SecNavbar'>
        <ul className='SecNavbar__ul'>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>A-Class Saloon</Link>
          </li>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>Exterior</Link>
          </li>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>Interior</Link>
          </li>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>Technology</Link>
          </li>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>Safety</Link>
          </li>
          <li>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>Mercedes-Benz in your country</Link>
          </li>
        </ul>
    </div>
  )
}

export default SecNavbar
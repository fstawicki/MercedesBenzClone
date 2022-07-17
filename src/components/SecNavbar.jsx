import React from 'react'

import { Link } from "react-scroll";
import './SecNavbar.css';

const SecNavbar = (props) => {
  return (
    <div name="sec" className={props.stickyClass}>
      <div className='SecNavbar__container'>
        <ul className='SecNavbar__container__ul'>
            <li>
            <Link
              activeClass="active"
              to="AClassSaloon"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              A-Class Saloon
            </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="Exterior."
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >            
              Exterior
            </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="Interior."
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Interior
            </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="Technology."
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Technology
            </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="Safety."
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Safety
            </Link>
            </li>
            <li>
            <Link
              activeClass="active"
              to="MercedesBenzInYourCountry"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Mercedes-Benz in your country
            </Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default SecNavbar
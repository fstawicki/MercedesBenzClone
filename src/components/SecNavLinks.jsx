import React from 'react';
import { Link } from "react-scroll";
import './SecNavbar.css';


const SecNavLinks = (props) => {
  
    return (
    <ul className={props.linksClass}>
            <li>
            <Link
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}} 
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
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}} 
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
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}}
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
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}} 
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
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}} 
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
            <li >
            <Link
              onClick={() => {props.isMobile && props.closeHamburgerMenu()}} 
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
  )
}

export default SecNavLinks;
import React, {useState} from 'react'
import './SecNavbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

import SecNavLinks from './SecNavLinks.jsx';


const SecNavbar = (props) => {


  const [openHamburger, setOpenHamburger] = useState(false);


  const showHamburgerMenu = () =>{
    setOpenHamburger(!openHamburger);
  }

  const closeHamburgerMenu = () => {
    setOpenHamburger(false);
  }

  return (
    <div>
    <div name="sec" className={props.stickyClass}>
      <div className='SecNavbar__container'>
      <SecNavLinks linksClass='SecNavbar__container__ul' />
      </div>
    </div>
    {props.stickyClass.includes('stickNavbar') &&
    <div className='MobileSecNavbar'>
      <FontAwesomeIcon
        className='hamburgerMenuIcon'
        icon={faChevronDown}
        onClick={showHamburgerMenu}
      />
      
    {openHamburger ? <SecNavLinks isMobile={true} closeHamburgerMenu={closeHamburgerMenu} linksClass='MobileSecNavbar__container__ul' /> : ''}
      
    </div>
    }
</div>

  )
}

export default SecNavbar;

// import React from 'react'

// import SecNavLinks from './SecNavLinks';
// import { Link } from "react-scroll";
// import './SecNavbar.css';

// const SecNavbar = (props) => {
//   return (
//     <div name="sec" className={props.stickyClass}>
//       <div className='SecNavbar__container'>
//         <ul className='SecNavbar__container__ul'>
           
//       </div>
//     </div>
//   )
// }

// export default SecNavbar
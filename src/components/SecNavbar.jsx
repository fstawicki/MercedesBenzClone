import React, {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

import SecNavLinks from './SecNavLinks.jsx';

import './SecNavbar.css';

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
          {openHamburger ? 
            <FontAwesomeIcon
              className='hamburgerMenuIcon'
              icon={faChevronDown}
              onClick={showHamburgerMenu}
            /> : 
            <FontAwesomeIcon
              className='hamburgerMenuIcon'
              icon={faChevronUp}
              onClick={showHamburgerMenu}
            />
          }
      {openHamburger ? 
        <SecNavLinks 
          isMobile={true} 
          closeHamburgerMenu={closeHamburgerMenu} 
          linksClass='MobileSecNavbar__container__ul' 
        /> : ''
      }
      
      </div>
      
      }

</div>

  )
}

export default SecNavbar;
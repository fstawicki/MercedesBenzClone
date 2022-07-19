import React, { Fragment, useState } from 'react'
import './Navbar.css';
import './NavbarSmallMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faInfoCircle, faBars } from "@fortawesome/free-solid-svg-icons";

import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';


const Navbar = () => {

    const [language, setLanguage] = useState('Deutsch');
    const [isMenu, setIsMenu] = useState(false);

    const changeLanguage = (event) => {
        event.preventDefault();
        if(language === 'Deutsch'){
            setLanguage('English');
        }else{
            setLanguage('Deutsch');
        }
    }

    const viewMenu = (event) => {
        event.preventDefault();
        setIsMenu((prevState) => !prevState);
    }

    
    /*
    Line below referes to third party library called 'body-scroll-lock'. Prevents scroling, when small menu is open.
    Alternatively, overflow: hidden, on body element can be used in this situation. 
    Manipulating body doesn't equal manipulating DOM, because react manipulates DOM only in App component.
    I used this library tho, due to overflow: hidden not working on IOS mobile
    */
    isMenu ? disableBodyScroll(document) : enableBodyScroll(document)


  return (
    <Fragment>
    <nav className='nav' id='AClassSaloon'>
        <div className="navbar">
        <a href='https://www.mercedes-benz.com/en/' className="navbar__left">
            <div className="navbar__left__logo">
                <img className="navbar__left__logoIMG" src={require("../assets/images/logo.png")} alt="mercedes_logo" />
            </div>
            <div className="navbar__left__logoname">
                <img className="navbar__left__logonameIMG" src={require("../assets/images/napis.png")}  alt="s" />
            </div>
        </a>
        <div className="navbar__right">
            <div className="navbar__right__upper">
                <ul className='navbar__right__upper__list'>
                    <li><a href="#"><FontAwesomeIcon icon={faInfoCircle}/> <span className='big-screen'>Provider/Privacy Statement</span></a></li>
                    <li><a href="#" onClick={changeLanguage}>{language}</a></li>
                </ul>
            </div>
            <div className="navbar__right__lower">
                <ul className='navbar__right__lower__list'>
                    <li className='big-screen'><a href="#">Vehicles</a></li>
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/design/sensual-purity/">Design</a></li>
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/next/">Innovation</a></li>
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/classic/">Museum & History</a></li>
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/sports/">Sports</a></li>
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/events/">Events</a></li>             
                    <li className='big-screen'><a href="https://www.mercedes-benz.com/en/lifestyle/">Lifestyle</a></li>             
                    <li ><a href="#" className='navbar_style_icon' ><FontAwesomeIcon icon={faMagnifyingGlass}/></a></li>
                    <li className='media'><a href="#" onClick={viewMenu}><FontAwesomeIcon icon={faBars}/></a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
    {isMenu && (
            <div className="navbar__smallMenu">
                <ul className="navbar__smallMenu__ul">
                    <li className="navbar__smallMenu__ul__li"><a href="#">Vehicles</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/design/sensual-purity/">Design</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/next/">Innovation</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/classic/">Museum & History</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/sports/">Sports</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/events/">Events</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="https://www.mercedes-benz.com/en/lifestyle/">Lifestyle</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</a></li>
                </ul>
            </div>
        )
    }
    </Fragment>
  )
}

export default Navbar;
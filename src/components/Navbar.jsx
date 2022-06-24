import React, { Fragment, useState } from 'react'
import './Navbar.css';
import './NavbarSmallMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faInfoCircle, faBars } from "@fortawesome/free-solid-svg-icons";


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
    


  return (
    <Fragment>
    <nav className='nav'>
        <div className="navbar">
        <a href='#' className="navbar__left">
            <div className="navbar__left__logo">
                <img className="navbar__left__logoIMG" src={require("../images/mercedesphotos/logo.png")} alt="mercedes_logo" />
            </div>
            <div className="navbar__left__logoname">
                <img className="navbar__left__logonameIMG" src={require("../images/napis.png")}  alt="s" />
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
                    <li className='big-screen'><a href="#">Design</a></li>
                    <li className='big-screen'><a href="#">Innovation</a></li>
                    <li className='big-screen'><a href="#">Museum & History</a></li>
                    <li className='big-screen'><a href="#">Sports</a></li>
                    <li className='big-screen'><a href="#">Events</a></li>             
                    <li className='big-screen'><a href="#">Lifestyle</a></li>             
                    <li ><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/></a></li>
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
                    <li className="navbar__smallMenu__ul__li"><a href="#">Design</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#">Innovation</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#">Museum & History</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#">Sports</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#">Events</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#">Lifestyle</a></li>
                    <li className="navbar__smallMenu__ul__li"><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</a></li>
                </ul>
            </div>
        )
    }
    </Fragment>
  )
}

export default Navbar;
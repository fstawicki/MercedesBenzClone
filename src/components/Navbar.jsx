import React, {useState} from 'react'
import './Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faInfoCircle, faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {


    const [language, setLanguage] = useState('Deutsch');

    const changeLanguage = (event) => {
        event.preventDefault();
        if(language === 'Deutsch'){
            setLanguage('English');
        }else{
            setLanguage('Deutsch');
        }
    }

  return (
    <nav>
        <div className="navbar">
        <div className="navbar__left">
            <div className="navbar__left__logo"></div>
            <div className="navbar__left__logoname"></div>
        </div>
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
                    <li ><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                    <li className='no-margin'><a href="#"><FontAwesomeIcon icon={faBars} /></a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;
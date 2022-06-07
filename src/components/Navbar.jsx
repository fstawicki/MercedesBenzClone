import React, {useState} from 'react'
import './Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

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
                    <li><a href="#">Provider/Privacy Statement</a></li>
                    <li><a href="#" onClick={changeLanguage}>{language}</a></li>
                </ul>
            </div>
            <div className="navbar__right__lower">
                <ul className='navbar__left__upper__list'>
                    <li><a href="#">Vehicles</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Museum & History</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;
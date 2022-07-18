import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll } from "react-scroll";

import './Footer.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {

    const [footerRef, footerInView] = useInView();
    const [footerRef2, footerInView2] = useInView();
    const [footerRef3, footerInView3] = useInView();

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

  return (
    <div className='Footer'>
        <motion.div 
          ref={footerRef} 
          animate={{ y: footerInView ? 0 : 40, opacity: footerInView ? 1 : 0, animationDelay: 2}} 
          transition={{ duration: 0.7 }}
        >
        <section className='Links'>
        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>More Topics</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="https://www.mercedes-benz.com/en/next/">Innovation</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/design/">Design</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/exhibitions/">Exhibitions</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/classic/">Museum & History</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/sports/">Sports</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/events/driving-events/?csref=_sm-in_pnt_bnd_pc">Driving Events</a></li>
                    <li><a href="https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/mercedes-me.html">Mercedes me Portal</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>Shopping</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/dealer-locator.html?csref=mbcom_generic_pc">Dealer Search</a></li>
                    <li><a href="https://accessories.mercedes-benz.com/en-PL/accessories/passengercars">Mercedes-Benz Accessoires</a></li>
                    <li><a href="https://shop.mercedes-benz.com/de-de/collection/?csref=_port_mbcom:en&_ga=2.33437495.80300834.1657696713-1456440232.1655975730">Mercedes-Benz Collection</a></li>
                    <li><a href="https://shop.mercedes-benz.com/en-gb/connect/?_ga=2.219416977.984314379.1657559408-1288628366.1654546777">Mercedes me connect Store</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/service-parts/">Service & Parts</a></li>
                    <li><a href="https://shop.mercedesamgf1.com/en/home/?___store=eeur">Formula 1 Store</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/classic/classiccenter/">Mercedes-Benz Classic Center</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>All about cars</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="https://www.mercedes-benz.pl/passengercars.html?csref=mbcom_generic_pc&group=all&subgroup=all.BODYTYPE.hatchback&view=BODYTYPE#modeltabs_tab1_modelgroup_ed64">Model Overview</a></li>
                    <li><a href="https://www.mercedes-benz.pl/passengercars/configurator.html?csref=mbcom_generic_pc&group=all&subgroup=all.BODYTYPE.hatchback&view=BODYTYPE">Configurator</a></li>
                    <li><a href="https://www.mercedes-benz.pl/passengercars/test-drive.html?group=all&subgroup=all.BODYTYPE.hatchback&view=BODYTYPE">Test Drive</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/passenger-cars/mercedes-maybach/">Mercedes-Maybach</a></li>
                    <li><a href="https://www.mercedes-benz.com/pl/?owda=misc&shortener=true">Mercedes me connect</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/driving-aids/">Mercedes-Benz Ex-Factory Driving Aids</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/wltp/">WLTP</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/rde/">RDE</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/semiconductor/">Semiconductors supply situation</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/li-ion-un383/">Li-Ion UN38.3</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>Discover more</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="https://www.mercedes-benz.com/en/newsroom/">Newsroom</a></li>
                    <li><a href="https://group.mercedes-benz.com/press/?r=dai">Press</a></li>
                    <li><a href="https://group.mercedes-benz.com/careers/?_ga=2.188686113.80300834.1657696713-1456440232.1655975730">Career</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/heycar/">heycar</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/share-now/">SHARE NOW</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/whitehat/">Vulnerability Reporting Policy</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/mercedes-benz-energy/">Mercedes-Benz Energy</a></li>
                    <li><a href="https://www.mercedes-benz-bank.de/de.html">Mercedes-Benz Bank</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/vehicles/international-corporate-sales/">Fleet Sales</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/global-training/">Mercedes-Benz Global Training</a></li>
                </ul>
            </div>
        </div>
    </section>
    </motion.div>
    <motion.div 
          ref={footerRef2} 
          animate={{ y: footerInView2 ? 0 : 40, opacity: footerInView2 ? 1 : 0, animationDelay: 2}} 
          transition={{ duration: 0.7 }}
    >
    <section className="Social">
      <div className="Social__title">
        <h2>Stay Informed</h2>
      </div>
      <div className="Social__links">
        <p>Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Mercedes-Benz.</p>
        <ul className="Social__links__list">
          <li><a href="https://www.facebook.com/MercedesBenz"><FaFacebook className='socialIcon' /></a></li>
          <li><a href="https://twitter.com/mercedesbenz"><FaTwitter className='socialIcon' /></a></li>
          <li><a href="https://www.youtube.com/user/MercedesBenzTV"><FaYoutube className='socialIcon' /></a></li>
          <li><a href="https://www.instagram.com/accounts/login/?next=/mercedesbenz/"><FaInstagram className='socialIcon' /></a></li>
          <li><a href="https://www.linkedin.com/company/mercedes-benz_ag/"><FaLinkedin className='socialIcon' /></a></li>
        </ul>
      </div>
      <div className="Social__spacer"></div>
      <div className="Social__bottom">
        <div className="Social__bottom__paragraph">
          <p>This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website <a href="https://www.mbusa.com/en/home">www.mbusa.com</a>.</p>
        </div>
        <div className='Social__bottom__section'>
            <div className="Social__bottom_language">
                <p><a href="">Deutsch</a><span> | </span><a href="">English</a></p> 
            </div>
            <div className="Social__bottom__links">
                <ul className="Social__bottom__links__list">
                    <li><a href="">Provider</a></li>
                    <li><a href="">Legal Notice</a></li>
                    <li><a href="">Cookies</a></li>
                    <li><a href="">Privacy Statement</a></li>
                </ul>
                <ul className="Social__bottom__links__list">
                    <li><a href="https://www.mercedes-benz.com/en/newsfeed/">Newsfeed (RSS)</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="https://info.daimler.com/en/">Careers</a></li>
                    <li><a href="https://group.mercedes-benz.com/investors/?r=dai">Investor Relations</a></li>
                </ul>
                <a href="#" onClick={scrollToTop} className="Social__bottom__navigation">Top <FontAwesomeIcon icon={faChevronUp} /></a>
            </div>
        </div>
      </div>

    </section>
    </motion.div>
    </div>
  )
}

export default Footer
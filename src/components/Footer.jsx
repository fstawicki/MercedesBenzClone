import React from 'react'


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedIn, faChevronUp } from '@fortawesome/fontawesome-free-solid';

const Footer = () => {
  return (
    <div className='Footer'>
        <section className='Links'>
        
        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>More Topics</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Exhibitions</a></li>
                    <li><a href="#">Museum & History</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Driving Events</a></li>
                    <li><a href="#">Mercedes me Portal</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>Shopping</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="#">Dealer Search</a></li>
                    <li><a href="#">Mercedes-Benz Accessoires</a></li>
                    <li><a href="#">Mercedes-Benz Collection</a></li>
                    <li><a href="#">Mercedes me connect Store</a></li>
                    <li><a href="#">Service & Parts</a></li>
                    <li><a href="#">Formula 1 Store</a></li>
                    <li><a href="#">Mercedes-Benz Classic Center</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>All about cars</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="#">Model Overview</a></li>
                    <li><a href="#">Configurator</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Mercedes-Maybach</a></li>
                    <li><a href="#">Mercedes me connect</a></li>
                    <li><a href="#">Mercedes-Benz Ex-Factory Driving Aids</a></li>
                    <li><a href="#">WLTP</a></li>
                    <li><a href="#">RDE</a></li>
                    <li><a href="#">Semiconductors supply situation</a></li>
                    <li><a href="#">Li-Ion UN38.3</a></li>
                </ul>
            </div>
        </div>

        <div className="Links__column">
            <div className="Links__column__headline">
                <h2 className='Links__column__headline__title'>Discover more</h2>
            </div>
            <div className="Links__column__links">
                <ul className="Links__column__links__list">
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">heycar</a></li>
                    <li><a href="#">SHARE NOW</a></li>
                    <li><a href="#">Vulnerability Reporting Policy</a></li>
                    <li><a href="#">Mercedes-Benz Energy</a></li>
                    <li><a href="#">Mercedes-Benz Bank</a></li>
                    <li><a href="#">Fleet Sales</a></li>
                    <li><a href="#">Mercedes-Benz Global Training</a></li>
                </ul>
            </div>
        </div>

    </section>

    <section className="Social">
      <div className="Social__title">
        <h2>Stay Informed</h2>
      </div>
      <div className="Social__links">
        <p>Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Mercedes-Benz.</p>
        <ul className="Social__links__list">
          <li><a href="https://www.facebook.com/MercedesBenz"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://twitter.com/mercedesbenz"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.youtube.com/user/MercedesBenzTV"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://www.instagram.com/accounts/login/?next=/mercedesbenz/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.linkedin.com/company/mercedes-benz_ag/"><FontAwesomeIcon icon={faLinkedIn} /></a></li>
        </ul>
      </div>
      <div className="Social__spacer"></div>
      <div className="Social__bottom">
        <div className="Social__bottom__paragraph">
          <p>This is the International website of Mercedes-Benz AG. Visitors from the U.S., please visit our U.S. website <a href="https://www.mbusa.com/en/home">www.mbusa.com</a>.</p>
        </div>
        <div className="Social__bottom_language">
          <p><a href="">Deutsch</a><span>|</span><a href="">English</a></p> 
        </div>
        <div className="Social__bottom__links">
          <ul className="Social__bottom__links__list">
            <li><a href="">Provider</a></li>
            <li><a href="">Legal Notice</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">Privacy Statement</a></li>
            <li><a href="https://www.mercedes-benz.com/en/newsfeed/">Newsfeed (RSS)</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="https://info.daimler.com/en/">Careers</a></li>
            <li><a href="https://group.mercedes-benz.com/investors/?r=dai">Investor Relations</a></li>
          </ul>
        </div>
        <div className="Social__bottom__navigation">
          <button><a href="#">Top <FontAwesomeIcon icon={faChevronUp} /></a></button>
        </div>
      </div>

      

    </section>





    </div>
  )
}

export default Footer
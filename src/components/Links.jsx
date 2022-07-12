import React from 'react';
import './Footer.css';

const Links = () => {
  return (
    <div className='Links'>
        
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

    </div>
  )
}

export default Links;
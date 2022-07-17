import img1 from '../assets/images/gallery/gallery1.jpg'; 
import img2 from '../assets/images/gallery/gallery2.jpg'; 
import img3 from '../assets/images/gallery/gallery3.jpg'; 
import img4 from '../assets/images/gallery/gallery4.jpg'; 

import {faCar, faGears, faLocationDot, faRoad} from "@fortawesome/free-solid-svg-icons";

export const GalleryData = [
    {
        link: 'https://www.mercedes-benz.pl/passengercars/models/saloon/a-class/overview.html?csref=mbcom_v177_pc',
        imageURL: img1,
        title: 'Explore the A-Class',
        paragraph1: 'Details of the A-Class in your country',
        paragraph2: 'Explore now',
        icon: faCar,
    },
    {
        link: 'https://www.mercedes-benz.pl/passengercars/content-pool/tool-pages/car-configurator.html/motorization/CCci/PL/pl/A-KLASSE/LIMOUSINE',
        imageURL: img2,
        title: 'Configurator',
        paragraph1: 'Your personal A-Class',
        paragraph2: 'Configure now',
        icon: faGears,
    },
    {
        link: 'https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/dealer-locator.html?csref=mbcom_generic_pc',
        imageURL: img3,
        title: 'Retailer search',
        paragraph1: 'Mercedes-Benz retailers near you',
        paragraph2: 'Find a retailer now',
        icon: faLocationDot,
    },
    {
        link: 'https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/online-testdrive.html#/',
        imageURL: img4,
        title: 'Test drive',
        paragraph1: 'Test the A-Class',
        paragraph2: 'Book a test drive now',
        icon: faRoad,
    },
]
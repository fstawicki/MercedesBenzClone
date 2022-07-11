import './App.css';
import HeroPage from './components/HeroPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Wrapper from './components/Wrapper';
import Headline from './components/Headline';
import Carrousel from './components/Carrousel';
import ImageHeadline from './components/ImageHeadline';


import hi1image from './images/mercedesphotos/headlines/headline_a_class_design.jpg'
import hi2image from './images/mercedesphotos/headlines/headline_a_class_interior.jpg'
import hi3image from './images/mercedesphotos/headlines/headline_a_class_technology.jpg'
import hi4image from './images/mercedesphotos/headlines/headline_safety.jpg'

import c1_image1 from './images/mercedesphotos/carrousels/carrousel1-1.jpg';
import c1_image2 from './images/mercedesphotos/carrousels/carrousel1-2.jpg';
import c1_image3 from './images/mercedesphotos/carrousels/carrousel1-3.jpg';

import c2_image1 from './images/mercedesphotos/carrousels/carrousel2-1.jpg';
import c2_image2 from './images/mercedesphotos/carrousels/carrousel2-2.jpg';
import c2_image3 from './images/mercedesphotos/carrousels/carrousel2-3.jpg';
import c2_image4 from './images/mercedesphotos/carrousels/carrousel2-4.jpg';
import c2_image5 from './images/mercedesphotos/carrousels/carrousel2-5.jpg';
import c2_image6 from './images/mercedesphotos/carrousels/carrousel2-6.jpg';

import c3_image1 from './images/mercedesphotos/carrousels/carrousel3-1.jpg';
import c3_image2 from './images/mercedesphotos/carrousels/carrousel3-2.jpg';
import c3_image3 from './images/mercedesphotos/carrousels/carrousel3-3.jpg';
import c3_image4 from './images/mercedesphotos/carrousels/carrousel3-4.jpg';

import c4_image1 from './images/mercedesphotos/carrousels/carrousel4-1.jpg';
import c4_image2 from './images/mercedesphotos/carrousels/carrousel4-2.jpg';
import c4_image3 from './images/mercedesphotos/carrousels/carrousel4-3.jpg';
import c4_image4 from './images/mercedesphotos/carrousels/carrousel4-4.jpg';
import Gallery from './components/Gallery';

const carrousel1 = [
  {
    title: 'The front-end design',
    paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.',
    imageURL: c1_image1
  },
  {
    title: 'The side design',
    paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.',
    imageURL: c1_image2
  },
  {
    title: 'The rear-end design',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c1_image3
  },
];

//add proper text
const carrousel2 = [
  {
    title: 'Cockpit and steering wheel',
    paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.',
    imageURL: c2_image1
  },
  {
    title: 'Doors',
    paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.',
    imageURL: c2_image2
  },
  {
    title: 'Centre console',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c2_image3
  },
  {
    title: 'Control and display concept',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c2_image4
  },
  {
    title: 'Interior lighting',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c2_image5
  },
  {
    title: 'MBUX',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c2_image6
  },
];

const carrousel3 = [
  {
    title: 'Body',
    paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.',
    imageURL: c3_image1
  },
  {
    title: 'Suspension',
    paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.',
    imageURL: c3_image2
  },
  {
    title: 'Aerodynamics',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c3_image3
  },
  {
    title: 'Environment',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c3_image4
  },
];

const carrousel4 = [
  {
    title: 'Development',
    paragraph: 'The striking front section exudes more than ever an air of self-confidence and appeal at the same. The typical energetic look and thus the recognition value are underscored by the new generation of headlamps – with an impressive high-tech appearance.',
    imageURL: c4_image1
  },
  {
    title: 'Intelligent Drive',
    paragraph: 'The surface-oriented design gives the side view of the A-Class Saloon its special aura. Very few recesses in the stretched bodyshell – a puristic design that arouses emotions. With the elegant roofline as a further highlight.',
    imageURL: c4_image2
  },
  {
    title: 'Active Brake Assist',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c4_image3
  },
  {
    title: 'Driving assistance systems',
    paragraph: 'The two-part tail lamps underscore the clear rear end that emphasises width. The rear reflectors were relocated to the modular two-part rear bumper. Depending on the selected equipment, this rear bumper is available with a black diffuser or with chrome trim strip and chrome tailpipe tips.',
    imageURL: c4_image4
  },
];


const headlineData = {
  exterior: {
    headlineTitle: 'Exterior.',
    headlineParagraph: 'The A-Class as a personal, individual item – every customer is able to comprehensively individualise their vehicle and configure it to be more classic or lifestyle-oriented. The design and equipment lines define the direction here. Nevertheless, they provide plenty of scope for further special touches.'
  },
  interior: {
    headlineTitle: 'Interior.',
    headlineParagraph: 'The interior combines sportiness with an even more generous sense of space. At the same time, it meets the highest of aesthetic standards and adds this to a versatility of design for people with creative flair.'
  },
  technology: {
    headlineTitle: 'Technology.',
    headlineParagraph: ''
  },
  safety: {
    headlineTitle: 'Safety.',
    headlineParagraph: 'Mercedes-Benz Intelligent Drive combines safety and convenience innovations. With these intelligent systems, Mercedes-Benz is not only setting standards in automotive engineering, but is also taking another important step forward on the road to accident-free and autonomous driving.'
  }
}

const ImageHeadlineData = {
  design: {
    headlineTitle: 'A-Class Design',
    headlineParagraph: 'Learn more about the',
    imageURL: hi1image
  },
  interior: {
    headlineTitle: 'A-Class Interior',
    headlineParagraph: 'Learn more about the',
    imageURL: hi2image
  },
  technology: {
    headlineTitle: 'A-Class Technology',
    headlineParagraph: 'Learn more about the',
    imageURL: hi3image
  },
  safety: {
    headlineTitle: 'Safety',
    headlineParagraph: 'Learn more about',
    imageURL: hi4image
  }
}


function App() {
  return (
    <div className="App">
        <Navbar />
        <Wrapper>
          <HeroPage/>
          <SecNavbar />
        </Wrapper>
        <Headline title={headlineData.exterior.headlineTitle} paragraph={headlineData.exterior.headlineParagraph} />
        <Carrousel slidesData={carrousel1} slidesNumber={3} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.design} />
        <Headline title={headlineData.interior.headlineTitle} paragraph={headlineData.interior.headlineParagraph} />
        <Carrousel slidesData={carrousel2} slidesNumber={6} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.interior} />
        <Headline title={headlineData.technology.headlineTitle} paragraph={headlineData.technology.headlineParagraph} />
        <Carrousel slidesData={carrousel3} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.technology} />
        <Headline title={headlineData.safety.headlineTitle} paragraph={headlineData.safety.headlineParagraph} />
        <Carrousel slidesData={carrousel4} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.safety} />

        <Gallery />
    </div>
    
  );
}

export default App;

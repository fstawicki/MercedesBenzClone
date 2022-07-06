import './App.css';
import HeroPage from './components/HeroPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Wrapper from './components/Wrapper';
import Headline from './components/Headline';
import Carrousel from './components/Carrousel';
import C2 from './components/C2';


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

function App() {
  return (
    <div className="App">
        <Navbar />
        <Wrapper>
          <HeroPage/>
          <SecNavbar />
        </Wrapper>
        <Headline title={headlineData.exterior.headlineTitle} paragraph={headlineData.exterior.headlineParagraph} />
        <Carrousel />
        {/* element ze zdjęciem */}
        <Headline title={headlineData.interior.headlineTitle} paragraph={headlineData.interior.headlineParagraph} />
        {/* karuzela
        element ze zdjęciem */}
        <Headline title={headlineData.technology.headlineTitle} paragraph={headlineData.technology.headlineParagraph} />
        {/* karuzela
        element ze zdjęciem       */}
        <Headline title={headlineData.safety.headlineTitle} paragraph={headlineData.safety.headlineParagraph} />
        {/* karuzela
        element ze zdjęciem   */}

      <Container />
    </div>
    
  );
}

export default App;

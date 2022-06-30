import './App.css';
import HeroPage from './components/HeroPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Wrapper from './components/Wrapper';
import Headline from './components/Headline';
import Carrousel from './components/Carrousel';
import C2 from './components/C2';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Wrapper>
          <HeroPage/>
          <SecNavbar />
        </Wrapper>
        <Headline />
        {/* <C2 /> */}

        <Carrousel />

      <Container />
    </div>
    
  );
}

export default App;

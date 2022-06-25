import './App.css';
import HeroPage from './components/HeroPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Wrapper from './components/Wrapper';
import Headline from './components/Headline';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Wrapper>
          <HeroPage/>
          <SecNavbar />
        </Wrapper>
        <Headline />

      <Container />
    </div>
    
  );
}

export default App;

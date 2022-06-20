import './App.css';
import HeroPage from './components/HeroPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';

function App() {
  return (
    <div className="App">
      <Container >
        <Navbar />
        <HeroPage>

          <SecNavbar />
        </HeroPage>
      </Container>
    </div>
  );
}

export default App;

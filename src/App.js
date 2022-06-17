import './App.css';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';

function App() {
  return (
    <div className="App">
            <Navbar />
      <HeroPage />
      <SecNavbar />
    </div>
  );
}

export default App;

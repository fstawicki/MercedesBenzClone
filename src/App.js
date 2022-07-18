import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

import './App.css';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import SecNavbar from './components/SecNavbar';
import Wrapper from './components/Wrapper';
import Headline from './components/Headline';
import Carrousel from './components/Carrousel';
import ImageHeadline from './components/ImageHeadline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import { ImageHeadlineData } from './data/ImageHeadlineData';
import { HeadlineData } from './data/HeadlineData';
import { Carrousel1 } from './data/Carrousel1';
import { Carrousel2 } from './data/Carrousel2';
import { Carrousel3 } from './data/Carrousel3';
import { Carrousel4 } from './data/Carrousel4';

function App() {

  const {ref, inView } = useInView();
  const [stickNavbar, setStickNavbar] = useState();
 

  useEffect(() => {

    if(!inView){
      setStickNavbar(true);
    }else{
      setStickNavbar(false);
    }

  },[inView])

  let newClasses = 'SecNavbar';

  if(stickNavbar){
    newClasses += ' stickNavbar';
  }


  return (
    <div className="App">
        <Navbar  />
        
        <Wrapper  >
          <div ref={ref}>
          <HeroPage/>
          </div>
          <SecNavbar stickyClass={newClasses} />
        </Wrapper>
        <Headline title={HeadlineData.exterior.headlineTitle} paragraph={HeadlineData.exterior.headlineParagraph} />
        <Carrousel slidesData={Carrousel1} slidesNumber={3} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.design} />
        <Headline title={HeadlineData.interior.headlineTitle} paragraph={HeadlineData.interior.headlineParagraph} />
        <Carrousel slidesData={Carrousel2} slidesNumber={6} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.interior} />
        <Headline title={HeadlineData.technology.headlineTitle} paragraph={HeadlineData.technology.headlineParagraph} />
        <Carrousel slidesData={Carrousel3} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.technology} />
        <Headline title={HeadlineData.safety.headlineTitle} paragraph={HeadlineData.safety.headlineParagraph} />
        <Carrousel slidesData={Carrousel4} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.safety} />

        <Gallery />

        <Footer />
    </div>
    
  );
}

export default App;

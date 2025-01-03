import React from 'react';
import Comanies from './Comanies';
import Details from './Details';
import CanvasAnimation from './CanvasAnimation';
import Header from '../../component/header/Header';
// import Footer from '../../component/footer/Footer';
import Ready from './Ready';
import Globle from './Globle';
import GlobeScale from './GlobeScale';
import SliderComponent from './SliderComponent';
import Startup from './Startup';
import Ship from './Ship';

// import Hero from './Hero';

function Home() {
  return (
    <>
      <div className='relative'>
        <Header />
        <CanvasAnimation />
      </div>
      <Comanies />
      <Details />
      <GlobeScale />
      <SliderComponent />
      <Startup />
      <Ship />
      <Globle />
      <Ready />
    </>
  );
}

export default Home;

import React from 'react';
import Comanies from './Comanies';
import Details from './Details';
import CanvasAnimation from './CanvasAnimation';
import Header from '../../component/header/Header';
// import Footer from '../../component/footer/Footer';
import Ready from './Ready';
import Globle from './Globle';
import GlobeScale from './GlobeScale';

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
      <Globle />
      <Ready />
    </>
  );
}

export default Home;

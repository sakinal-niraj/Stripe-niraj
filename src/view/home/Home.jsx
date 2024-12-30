import React from 'react';
import Comanies from './Comanies';
import Details from './Details';
import CanvasAnimation from './CanvasAnimation';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import Ready from './Ready';

// import Hero from './Hero';

function Home() {
  return (
    <>
      <Header />
      <CanvasAnimation />
      <Comanies />
      <Details />
      <div className='relative  '>
        <Ready />
        <Footer />
      </div>
    </>
  );
}

export default Home;

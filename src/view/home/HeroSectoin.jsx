import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import hero1 from '../../assets/images/image.png'; // Replace with your image path
// import hero from '../assets/hero.jpeg'; // Replace with your image path

const HeroSection = () => {
  const [hovered, setHovered] = useState({ contactSales: false });

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10 flex">
        <img
          src={hero1}
          alt="Hero Background 1"
          className="hidden md:block w-full h-auto max-w-[1050px] 3xl:max-w-[1050px]"
        />
        {/* <img
          src={hero}
          alt="Hero Background 2"
          className="block md:hidden w-full h-auto max-w-[1050px] 3xl:max-w-[1050px]"
        /> */}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white h-screen">
        <h1 className="text-3xl sm:text-5xl font-bold max-w-[800px]">
          Welcome to Your Next Digital Solution
        </h1>
        <p className="mt-4 text-sm sm:text-lg max-w-[600px]">
          Transform your business with cutting-edge technology and tailor-made solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex mt-6 space-x-4">
          {/* Button 1 */}
          <button
            className={`flex items-center px-[16px] py-[7px] rounded-full bg-[#ffffff] text-[#000000] text-sm font-medium shadow-lg hover:bg-gray-200 transition-all duration-300`}
          >
            Get Started
            <BsArrowRightShort className="ml-2 text-lg" />
          </button>

          {/* Button 2 */}
          <button
            onMouseEnter={() => setHovered({ contactSales: true })}
            onMouseLeave={() => setHovered({ contactSales: false })}
            className={`flex items-center px-[16px] py-[7px] rounded-full bg-[#f56a79] text-white text-sm font-medium shadow-lg hover:bg-[#ff7887] transition-all duration-300`}
          >
            Contact Sales
            {hovered.contactSales ? (
              <MdKeyboardArrowRight className="ml-2 text-lg" />
            ) : (
              <BsArrowRightShort className="ml-2 text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import bmw from '../../assets/images/bmw.jpg';
import amazon from '../../assets/images/amazom.jpg';
import maersk from '../../assets/images/Maersk.jpg';
import twilio from '../../assets/images/Twilio.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';

function SliderComponent() {
  const [sliderRef, setSliderRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isHoverd , setIsHovered] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    fade: true,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const handleSVGClick = (index) => {
    sliderRef.slickGoTo(index);
  };

  const logoLinks = [
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 40"><path fill="var(--userLogoColor, #0166B1)" d="M111.852 20c0 6.55-5.302 11.852-11.852 11.852V20h11.852zM100 8.148V20H88.148c0-6.55 5.302-11.852 11.852-11.852z"></path><path fill="var(--userLogoColorAlt, #fff)" d="M100 8.149c6.55 0 11.852 5.302 11.852 11.85H100V8.15zm-11.852 11.85H100v11.853c-6.55 0-11.852-5.302-11.852-11.852z"></path><path fill="var(--userLogoColor, #6F6F6F)" d="M100 8.148v.65c6.176 0 11.202 5.025 11.202 11.202h.649c0-6.545-5.305-11.852-11.851-11.852zm0 23.054c-6.176 0-11.202-5.025-11.202-11.202h-.65c0 6.545 5.306 11.852 11.852 11.852M100 0C88.955 0 80 8.955 80 20s8.955 20 20 20 20-8.955 20-20-8.955-20-20-20zm18.7 20c0 10.327-8.372 18.7-18.7 18.7S81.3 30.327 81.3 20 89.673 1.3 100 1.3s18.7 8.373 18.7 18.7z"></path><path fill="var(--userLogoColor, #6F6F6F)" d="M91.453 10.351c.64-.668 1.001-1.44.363-2.178-.348-.4-.933-.487-1.416-.29l-.049.018.016-.042c.071-.19.117-.797-.404-1.215a1.206 1.206 0 00-.894-.248c-.6.06-1.062.468-2.318 1.86-.438.49-.86.994-1.264 1.511l3.453 3.253c1.144-1.258 1.61-1.725 2.513-2.67v.001zm-4.505-.795c.696-.846 1.434-1.612 1.769-1.915.105-.096.22-.19.36-.229.227-.062.46.098.514.33.053.232-.094.452-.257.634-.368.412-1.717 1.813-1.717 1.813l-.67-.634zM88.3 10.83s1.313-1.38 1.742-1.82c.17-.175.28-.281.397-.339.152-.073.317-.088.466.01a.406.406 0 01.175.43c-.043.196-.205.384-.34.528L89 11.489l-.7-.66zm12.095-4.358l1.105-2.46.071-.218-.02.228.116 3.286c.396.038.791.09 1.183.156l-.18-4.868a26.011 26.011 0 00-1.651-.127L99.93 5.153l-.038.2-.04-.2-1.088-2.684c-.55.023-1.1.066-1.652.127l-.18 4.868c.393-.065.788-.117 1.184-.156l.116-3.286-.02-.228.07.22 1.106 2.458h1.007zm9.181 5.088c.272.29.663.756.883 1.04l4.045-2.551a27 27 0 00-.765-.942l-2.562 1.682-.174.15.13-.19 1.132-2.242-.8-.795-2.26 1.124-.19.129.151-.174 1.696-2.543a24.621 24.621 0 00-.951-.762L107.343 9.5c.325.248.754.614 1.028.862l2.417-1.246.156-.113-.114.153-1.254 2.404z"></path><title>BMW logo</title></svg>),
      color: '#0067b1eb'
    },
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 40"><title>Amazon logo</title><g fill="none" fill-rule="evenodd"><path fill="var(--userLogoColor, #EFA82E)" d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"></path><path fill="var(--userLogoColor, #EFA82E)" d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"></path><path fill="var(--userLogoColor, #1B1A19)" d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"></path></g></svg>),
      color: '#EFA82E'
    },
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 40"><path fill="var(--userLogoColor, #000)" fill-rule="evenodd" d="M71.56 26.746V12.891h3.716l4.707 10.354L84.62 12.89h3.559v13.855h-3.064v-8.06l-3.534 8.06h-3.265l-3.58-8.016v8.016H71.56zm28.947-5.364l-2.563-5.874-2.505 5.873h5.068zm-7.359 5.364h-3.603l6.193-13.855h4.435l6.237 13.855h-3.556l-1.227-2.76h-7.29l-1.189 2.76zm14.699 0V12.891h13.329v2.77h-10.11v2.752h8.669v2.704h-8.669v2.858h10.135v2.771h-13.354zm19.211-7.493h7.004V15.66h-7.004v3.592zm-3.265 7.493V12.891h11.155c1.49 0 2.355.855 2.355 2.323v4.655c0 1.071-.955 2.039-2.808 2.039-.105.005-.212 0-.322 0l3.247 4.838h-3.583l-3.079-4.737h-3.7v4.737h-3.265zm19.384.008h-1.105c-1.443 0-2.138-.827-2.138-2.032v-1.81h3.243v1.072h6.89v-2.836h-7.903c-1.262 0-2.171-.842-2.171-2.01v-4.114c0-1.245.989-2.125 2.193-2.125h9.035c1.221 0 2.065.905 2.065 2.213v1.653h-3.219V15.67h-6.89v2.729h7.88c1.164 0 2.229.764 2.229 2.234v3.955c0 1.347-.752 2.166-2.16 2.166h-7.949zm13.221 0V12.897h3.31v5.542l6.304-5.542h4.481l-7.52 6.437 7.791 7.42h-4.64l-6.416-6.302v6.302h-3.31z" clip-rule="evenodd"></path><path fill="var(--userLogoColor, #42B0D5)" fill-rule="evenodd" d="M54.397 4H31.608c-.959 0-1.878.38-2.555 1.055A3.578 3.578 0 0028 7.6v24.307c0 1.981 1.615 3.588 3.608 3.588h22.79c1.995 0 3.613-1.61 3.613-3.594V7.594C58.011 5.609 56.393 4 54.397 4zm-.686 7.507l-5.924 7.357 8.56 4.079-.006.029h-9.503l2.118 9.166-.029.017-5.924-7.357-5.924 7.357-.024-.012 2.113-9.172H29.67l-.011-.028 8.56-4.08-5.924-7.356.017-.023 8.56 4.079 2.113-9.167h.035l2.113 9.167 8.56-4.08.018.024z" clip-rule="evenodd"></path><title>Maersk logo</title></svg>),
      color: '#42B0D5'
    },
    {
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 40"><path fill="var(--userLogoColor, #F22F46)" d="M64.4 16.3c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zm-3.1 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM80 20c0 8.3-6.7 15-15 15s-15-6.7-15-15S56.7 5 65 5s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11 11-4.9 11-11zm-7.3.6c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm0-7.4c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm51.6-2.3c.1 0 .2.1.3.2v3.2c0 .2-.2.3-.3.3H115c-.2 0-.3-.2-.3-.3v-3.1c0-.2.2-.3.3-.3h5.3zm-.1 4.5H110c-.1 0-.3.1-.3.3l-1.3 5-.1.3-1.6-5.3c0-.1-.2-.3-.3-.3h-4c-.1 0-.3.1-.3.3l-1.5 5-.1.3-.1-.3-.6-2.5-.6-2.5c0-.1-.2-.3-.3-.3h-8v-4.3c0-.1-.2-.3-.4-.2l-5 1.6c-.2 0-.3.1-.3.3v2.7h-1.3c-.1 0-.3.1-.3.3v3.8c0 .1.1.3.3.3h1.3v4.7c0 3.3 1.8 4.8 5.1 4.8 1.4 0 2.7-.3 3.6-.8v-4c0-.2-.2-.3-.3-.2-.5.2-1 .3-1.4.3-.9 0-1.4-.4-1.4-1.4v-3.4h2.9c.1 0 .3-.1.3-.3v-3.2L97.8 29c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l1.8-5.6.9 2.9.8 2.7c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l3.8-12.6V29c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.2-.3zm6.7-4.5h-5.1c-.1 0-.3.1-.3.3v17.7c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V11.1c0-.1-.1-.2-.3-.2zm6.8 0h-5.3c-.1 0-.3.1-.3.3v3.1c0 .1.1.3.3.3h5.3c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.2-.3-.2zm-.1 4.5h-5.1c-.1 0-.3.1-.3.3v13.1c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.3-.3zm16.1 6.8c0 3.8-3.2 7.1-7.7 7.1-4.4 0-7.6-3.3-7.6-7.1s3.2-7.1 7.7-7.1c4.4 0 7.6 3.3 7.6 7.1zm-5.4.1c0-1.4-1-2.5-2.2-2.4-1.3 0-2.2 1.1-2.2 2.4 0 1.3 1 2.4 2.2 2.4 1.3 0 2.2-1.1 2.2-2.4z"></path><title>Twilio logo</title></svg>),
      color: '#d55a5a'
    },

  ]
  return (
    <section className='pt-32 px-5 md:px-10 xl:px-24 2xl:px-56 py-16 w-full space-y-12 3xl:flex justify-center'>
      <div className='space-y-14 3xl:max-w-[1050px]'>
        {/* Content */}
        <div className="grid md:grid-cols-[3fr_1fr] md:pr-12">
          <div className='space-y-3'>
            <h1 className='text-[#635BFF] text-[18px] font-bold pb-2'>Enterprise reinvention</h1>

            <p className='text-[38px] font-bold tracking-tight pb-1 text-[#0a2540]'>
              Bring agility to your enterprise
            </p>

            <p className='text-[#425466] font-meduim text-[18px] '>Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our
              <span className='text-[#635BFF] font-semibold hover:text-[#000000ea] cursor-pointer'> professional services </span>
              team and
              <span className='text-[#635BFF] font-semibold hover:text-[#000000ea] cursor-pointer'> certified partners </span>
              , and connect Stripe to Salesforce, SAP, and more through the
              <span className='text-[#635BFF] font-semibold hover:text-[#000000ea] cursor-pointer'> Stripe App Marketplace. </span>
            </p>

            <div className='w-full pt-4'>
              <button
              onMouseEnter={()=> { setIsHovered(true)}}
              onMouseLeave={()=> { setIsHovered(false)}}
               className='gap-2 bg-[#635BFF] flex items-center pl-4 pr-2 py-1 pb-1.5 text-white font-bold rounded-full hover:bg-[#1a2657]'>
                Explore Stripe for enterprises
                <span 
                
                className='pt-[1px] font-bold'>{isHoverd ? <FiArrowRight style={{ width: '20px', fontWeight: '800', height: 'auto' }} /> : <MdKeyboardArrowRight style={{ width: '20px', fontWeight: '800', height: 'auto' }} />}</span>
              </button>
            </div>
          </div>

        </div>


        {/* slider */}
        <div>
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>

            {/* first slider */}
            <div className="w-full  relative z-0 rounded-lg group overflow-hidden cursor-pointer">
              <div className='grid md:grid-cols-[1fr_3fr]  gap-5'>
                {/* content */}
                <div className='w-full md:space-y-10 grid grid-cols-2 md:block'>
                  {/* first row */}
                  <div className='space-y-2'>
                    <h1 className='font-bold text-2xl border-l-[1px] border-[#635BFF] pl-3 py-0'>Millions</h1>
                    <p className='pr-[10px] text-[#425466] font-meduim pl-3'>BMW owners using ConnectedDrive Store</p>
                  </div>

                  {/* sec row */}
                  <div className='space-y-2'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 font-bold text-2xl'>350+</h1>
                    <p className='text-[#425466] font-meduim pr-[10px] pl-3 '>US dealerships</p>
                  </div>

                  {/* third row */}
                  <div className='space-y-2 md:block hidden'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 text-[16px] font-semibold pb-3'>Products used</h1>
                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Payments StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Payments</title>

                          <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-CustomerProfile-BMW-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-payments-CustomerProfile-BMW-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-CustomerProfile-BMW-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Payments
                    </p>

                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Connect StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Connect</title>

                          <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-CustomerProfile-BMW-a)"></path><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6"></path><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-connect-CustomerProfile-BMW-a" x1="13" y1="1.71" x2="13" y2="15.25" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-connect-CustomerProfile-BMW-b" x1="20" y1="15.72" x2="20" y2="27.24" gradientUnits="userSpaceOnUse"><stop stop-color="#00299C"></stop><stop offset="1" stop-color="#0073E6"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Connect
                    </p>
                  </div>
                </div>

                {/* img1 */}
                <div className='w-full h-[410px] relative z-0 rounded-lg group overflow-hidden cursor-pointer'>
                  <img src={bmw} alt="" className='w-full h-full object-cover rounded-lg shadow-gray-100 shadow-xl max-w-full scale-[1.04] group-hover:scale-[1] group-hover:translate-y-[-4px] transition-transform duration-700 ease-out;' />
                  {/* for opacity */}
                  <div className="absolute inset-0 bg-[#0066B1] bg-gradient-to-t from-[#2c5775] opacity-50 rounded-lg" />

                  {/* content on img */}
                  <div className='absolute inset-0 py-3 px-5 text-xl font-bold bg-gradient-to-t from-[#0067b1eb] group-hover:bg-gradient-to-t group-hover:from-[#0066B1] transition-all duration-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="absolute left-5 top-5 " preserveAspectRatio="xMinYMin meet" viewBox="80 0 200 40"><path fill="white" d="M111.852 20c0 6.55-5.302 11.852-11.852 11.852V20h11.852zM100 8.148V20H88.148c0-6.55 5.302-11.852 11.852-11.852z"></path><path fill="none" d="M100 8.149c6.55 0 11.852 5.302 11.852 11.85H100V8.15zm-11.852 11.85H100v11.853c-6.55 0-11.852-5.302-11.852-11.852z"></path><path fill="white" d="M100 8.148v.65c6.176 0 11.202 5.025 11.202 11.202h.649c0-6.545-5.305-11.852-11.851-11.852zm0 23.054c-6.176 0-11.202-5.025-11.202-11.202h-.65c0 6.545 5.306 11.852 11.852 11.852M100 0C88.955 0 80 8.955 80 20s8.955 20 20 20 20-8.955 20-20-8.955-20-20-20zm18.7 20c0 10.327-8.372 18.7-18.7 18.7S81.3 30.327 81.3 20 89.673 1.3 100 1.3s18.7 8.373 18.7 18.7z"></path><path fill="white" d="M91.453 10.351c.64-.668 1.001-1.44.363-2.178-.348-.4-.933-.487-1.416-.29l-.049.018.016-.042c.071-.19.117-.797-.404-1.215a1.206 1.206 0 00-.894-.248c-.6.06-1.062.468-2.318 1.86-.438.49-.86.994-1.264 1.511l3.453 3.253c1.144-1.258 1.61-1.725 2.513-2.67v.001zm-4.505-.795c.696-.846 1.434-1.612 1.769-1.915.105-.096.22-.19.36-.229.227-.062.46.098.514.33.053.232-.094.452-.257.634-.368.412-1.717 1.813-1.717 1.813l-.67-.634zM88.3 10.83s1.313-1.38 1.742-1.82c.17-.175.28-.281.397-.339.152-.073.317-.088.466.01a.406.406 0 01.175.43c-.043.196-.205.384-.34.528L89 11.489l-.7-.66zm12.095-4.358l1.105-2.46.071-.218-.02.228.116 3.286c.396.038.791.09 1.183.156l-.18-4.868a26.011 26.011 0 00-1.651-.127L99.93 5.153l-.038.2-.04-.2-1.088-2.684c-.55.023-1.1.066-1.652.127l-.18 4.868c.393-.065.788-.117 1.184-.156l.116-3.286-.02-.228.07.22 1.106 2.458h1.007zm9.181 5.088c.272.29.663.756.883 1.04l4.045-2.551a27 27 0 00-.765-.942l-2.562 1.682-.174.15.13-.19 1.132-2.242-.8-.795-2.26 1.124-.19.129.151-.174 1.696-2.543a24.621 24.621 0 00-.951-.762L107.343 9.5c.325.248.754.614 1.028.862l2.417-1.246.156-.113-.114.153-1.254 2.404z"></path><title>BMW logo</title>
                    </svg>

                    <svg class="absolute right-8 top-5 " role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path>
                    </svg>

                    <h1 className='px-2 leading-8 absolute left-5 max-w-[468px] text-[28px] bottom-5 text-white group-hover:translate-y-[-38px] transition-transform duration-[600ms] ease-in-out'>Learn why BMW chose Stripe to power e-commerce and payments</h1>

                    <span className='text-[15px] text-white absolute left-7 bottom-0 translate-y-10 group-hover:translate-y-[-20px] transition-transform duration-[600ms] ease-in-out'>Read story</span>
                  </div>
                </div>

              </div>
            </div>


            {/* Second slider */}
            <div className="w-full  relative z-0 rounded-lg group overflow-hidden cursor-pointer">
              <div className='grid  md:grid-cols-[1fr_3fr]  gap-5'>
                {/* content */}
                <div className='w-full md:space-y-10 grid grid-cols-2 md:block'>
                  {/* first row */}
                  <div className='space-y-2'>
                    <h1 className='font-bold text-2xl border-l-[1px] border-[#635BFF] pl-3 py-0'>5+</h1>
                    <p className='pr-[10px] text-[#425466] font-meduim pl-3'>Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.</p>
                  </div>

                  {/* sec row */}
                  <div className='space-y-2'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 font-bold text-2xl'>50+</h1>
                    <p className='text-[#425466] font-meduim pr-[10px] pl-3 '>Payment methods available on Stripe</p>
                  </div>

                  {/* third row */}
                  <div className='space-y-2 md:block hidden'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 text-[16px] font-semibold pb-3'>Products used</h1>
                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Payments StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Payments</title>

                          <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-CustomerProfile-BMW-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-payments-CustomerProfile-BMW-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-CustomerProfile-BMW-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Payments
                    </p>

                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Connect StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Connect</title>

                          <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-CustomerProfile-BMW-a)"></path><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6"></path><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-connect-CustomerProfile-BMW-a" x1="13" y1="1.71" x2="13" y2="15.25" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-connect-CustomerProfile-BMW-b" x1="20" y1="15.72" x2="20" y2="27.24" gradientUnits="userSpaceOnUse"><stop stop-color="#00299C"></stop><stop offset="1" stop-color="#0073E6"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Connect
                    </p>
                  </div>
                </div>

                {/* img1 */}
                <div className='w-full h-[410px] relative z-0 rounded-lg group overflow-hidden cursor-pointer'>
                  <img src={amazon} alt="" className='w-full h-full object-cover rounded-lg shadow-gray-100 shadow-xl max-w-full scale-[1.04] group-hover:scale-[1] group-hover:translate-y-[-4px] transition-transform duration-700 ease-out;' />
                  {/* for opacity */}
                  <div className="absolute inset-0 bg-[#EFA82E] opacity-50 rounded-lg" />

                  {/* content on img */}
                  <div className='absolute inset-0 py-3 px-5 text-xl font-bold bg-gradient-to-t from-[#EFA82E] group-hover:bg-gradient-to-t group-hover:from-[#EFA82E] transition-all duration-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="53.987 12.06 200 40"><title>Amazon logo</title><g fill="white" fill-rule="evenodd"><path fill="white" d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"></path><path fill="white" d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"></path><path fill="white" d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"></path></g>
                    </svg>

                    <svg class="absolute right-8 top-5 " role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path>
                    </svg>

                    <h1 className='px-2 leading-8 absolute left-5 max-w-[468px] text-[28px] bottom-5 text-white group-hover:translate-y-[-38px] transition-transform duration-[600ms] ease-in-out'>See how Amazon simplied cross-border payments with Stripe</h1>

                    <span className='text-[15px] text-white absolute left-7 bottom-0 translate-y-10 group-hover:translate-y-[-20px] transition-transform duration-[600ms] ease-in-out'>Read story</span>
                  </div>
                </div>

              </div>
            </div>


            {/* third slider */}
            <div className="w-full  relative z-0 rounded-lg group overflow-hidden cursor-pointer">
              <div className='grid  md:grid-cols-[1fr_3fr]  gap-5'>
                {/* content */}
                <div className='w-full md:space-y-10 grid grid-cols-2 md:block'>
                  {/* first row */}
                  <div className='space-y-2'>
                    <h1 className='font-bold text-2xl border-l-[1px] border-[#635BFF] pl-3 py-0'>130</h1>
                    <p className='pr-[10px] text-[#425466] font-meduim pl-3'>Countries in logistics network</p>
                  </div>

                  {/* sec row */}
                  <div className='space-y-2'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 font-bold text-2xl'>$10+</h1>
                    <p className='text-[#425466] font-meduim pr-[10px] pl-3 '>Billion worth of goods moved around the world each year</p>
                  </div>

                  {/* third row */}
                  <div className='space-y-2 md:block hidden'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 text-[16px] font-semibold pb-3'>Products used</h1>
                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Payments StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Payments</title>

                          <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-CustomerProfile-BMW-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-payments-CustomerProfile-BMW-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-CustomerProfile-BMW-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Payments
                    </p>

                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Connect StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Connect</title>

                          <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-CustomerProfile-BMW-a)"></path><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6"></path><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-connect-CustomerProfile-BMW-a" x1="13" y1="1.71" x2="13" y2="15.25" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-connect-CustomerProfile-BMW-b" x1="20" y1="15.72" x2="20" y2="27.24" gradientUnits="userSpaceOnUse"><stop stop-color="#00299C"></stop><stop offset="1" stop-color="#0073E6"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Connect
                    </p>
                  </div>
                </div>

                {/* img1 */}
                <div className='w-full h-[410px] relative z-0 rounded-lg group overflow-hidden cursor-pointer'>
                  <img src={maersk} alt="" className='w-full h-full object-cover rounded-lg shadow-gray-100 shadow-xl max-w-full scale-[1.04] group-hover:scale-[1] group-hover:translate-y-[-4px] transition-transform duration-700 ease-out;' />
                  {/* for opacity */}
                  <div className="absolute inset-0 bg-[#42B0D5]  opacity-50 rounded-lg" />

                  {/* content on img */}
                  <div className='absolute inset-0 py-3 px-5 text-xl font-bold bg-gradient-to-t from-[#42B0D5] group-hover:bg-gradient-to-t group-hover:from-[#42B0D5] transition-all duration-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="28 4 200 40"><path fill="white" fill-rule="evenodd" d="M71.56 26.746V12.891h3.716l4.707 10.354L84.62 12.89h3.559v13.855h-3.064v-8.06l-3.534 8.06h-3.265l-3.58-8.016v8.016H71.56zm28.947-5.364l-2.563-5.874-2.505 5.873h5.068zm-7.359 5.364h-3.603l6.193-13.855h4.435l6.237 13.855h-3.556l-1.227-2.76h-7.29l-1.189 2.76zm14.699 0V12.891h13.329v2.77h-10.11v2.752h8.669v2.704h-8.669v2.858h10.135v2.771h-13.354zm19.211-7.493h7.004V15.66h-7.004v3.592zm-3.265 7.493V12.891h11.155c1.49 0 2.355.855 2.355 2.323v4.655c0 1.071-.955 2.039-2.808 2.039-.105.005-.212 0-.322 0l3.247 4.838h-3.583l-3.079-4.737h-3.7v4.737h-3.265zm19.384.008h-1.105c-1.443 0-2.138-.827-2.138-2.032v-1.81h3.243v1.072h6.89v-2.836h-7.903c-1.262 0-2.171-.842-2.171-2.01v-4.114c0-1.245.989-2.125 2.193-2.125h9.035c1.221 0 2.065.905 2.065 2.213v1.653h-3.219V15.67h-6.89v2.729h7.88c1.164 0 2.229.764 2.229 2.234v3.955c0 1.347-.752 2.166-2.16 2.166h-7.949zm13.221 0V12.897h3.31v5.542l6.304-5.542h4.481l-7.52 6.437 7.791 7.42h-4.64l-6.416-6.302v6.302h-3.31z" clip-rule="evenodd"></path><path fill="white" fill-rule="evenodd" d="M54.397 4H31.608c-.959 0-1.878.38-2.555 1.055A3.578 3.578 0 0028 7.6v24.307c0 1.981 1.615 3.588 3.608 3.588h22.79c1.995 0 3.613-1.61 3.613-3.594V7.594C58.011 5.609 56.393 4 54.397 4zm-.686 7.507l-5.924 7.357 8.56 4.079-.006.029h-9.503l2.118 9.166-.029.017-5.924-7.357-5.924 7.357-.024-.012 2.113-9.172H29.67l-.011-.028 8.56-4.08-5.924-7.356.017-.023 8.56 4.079 2.113-9.167h.035l2.113 9.167 8.56-4.08.018.024z" clip-rule="evenodd"></path><title>Maersk logo</title></svg>

                    <svg class="absolute right-8 top-5 " role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path>
                    </svg>

                    <h1 className='px-2 leading-8 absolute left-5 max-w-[468px] text-[28px] bottom-5 text-white group-hover:translate-y-[-38px] transition-transform duration-[600ms] ease-in-out'>See how Maersk tapped into new technology to make it easier to ship around the world</h1>

                    <span className='text-[15px] text-white absolute left-7 bottom-0 translate-y-10 group-hover:translate-y-[-20px] transition-transform duration-[600ms] ease-in-out'>Read story</span>
                  </div>
                </div>

              </div>
            </div>


            {/* fourth slider */}
            <div className="w-full  relative z-0 rounded-lg group overflow-hidden cursor-pointer">
              <div className='grid  md:grid-cols-[1fr_3fr]  gap-5'>
                {/* content */}
                <div className='w-full md:space-y-10 grid grid-cols-2 md:block'>
                  {/* first row */}
                  <div className='space-y-2'>
                    <h1 className='font-bold text-2xl border-l-[1px] border-[#635BFF] pl-3 py-0'>+5.5%</h1>
                    <p className='pr-[10px] text-[#425466] font-meduim pl-3'>Uplift from Stripe's Global Payments Infrastructure</p>
                  </div>

                  {/* sec row */}
                  <div className='space-y-2'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 font-bold text-2xl'>+1%</h1>
                    <p className='text-[#425466] font-meduim pr-[10px] pl-3 '>Uplift from Adaptive Acceptance</p>
                  </div>

                  {/* third row */}
                  <div className='space-y-2 md:block hidden'>
                    <h1 className='border-l-[1px] border-[#635BFF] pl-3 text-[16px] font-semibold pb-3'>Products used</h1>
                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Payments StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Payments</title>

                          <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-CustomerProfile-BMW-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-payments-CustomerProfile-BMW-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-CustomerProfile-BMW-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Payments
                    </p>

                    <p className='text-[#425466] pl-3 font-meduim flex gap-2'>
                      <span className='pt-[1px]'>
                        <svg class="ProductIcon ProductIcon--Connect StripeProductUsed__productLogo" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <title>Connect</title>

                          <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-CustomerProfile-BMW-a)"></path><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6"></path><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-CustomerProfile-BMW-b)"></path><defs><linearGradient id="product-icon-connect-CustomerProfile-BMW-a" x1="13" y1="1.71" x2="13" y2="15.25" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-connect-CustomerProfile-BMW-b" x1="20" y1="15.72" x2="20" y2="27.24" gradientUnits="userSpaceOnUse"><stop stop-color="#00299C"></stop><stop offset="1" stop-color="#0073E6"></stop></linearGradient></defs>
                        </svg>
                      </span>
                      Connect
                    </p>
                  </div>
                </div>

                {/* img1 */}
                <div className='w-full h-[410px] relative z-0 rounded-lg group overflow-hidden cursor-pointer '>
                  <img src={twilio} alt="" className='w-full h-full object-cover rounded-lg shadow-gray-100 shadow-xl max-w-full scale-[1.04] group-hover:scale-[1] group-hover:translate-y-[-4px] transition-transform duration-700 ease-out;' />
                  {/* for opacity */}
                  <div className="absolute inset-0 bg-[#d55a5a] bg-gradient-to-t from-[#d55a5a] opacity-50 rounded-lg" />

                  {/* content on img */}
                  <div className='absolute inset-0 py-3 px-5 text-xl font-bold bg-gradient-to-t from-[#d55a5a] group-hover:bg-gradient-to-t group-hover:from-[#d55a5a] transition-all duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" class="UserLogo variant--Flat CustomersCaseStudyCard__logo" preserveAspectRatio="xMinYMin meet" viewBox="50 5 200 40"><path fill="white" d="M64.4 16.3c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zm-3.1 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM80 20c0 8.3-6.7 15-15 15s-15-6.7-15-15S56.7 5 65 5s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11 11-4.9 11-11zm-7.3.6c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm0-7.4c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm51.6-2.3c.1 0 .2.1.3.2v3.2c0 .2-.2.3-.3.3H115c-.2 0-.3-.2-.3-.3v-3.1c0-.2.2-.3.3-.3h5.3zm-.1 4.5H110c-.1 0-.3.1-.3.3l-1.3 5-.1.3-1.6-5.3c0-.1-.2-.3-.3-.3h-4c-.1 0-.3.1-.3.3l-1.5 5-.1.3-.1-.3-.6-2.5-.6-2.5c0-.1-.2-.3-.3-.3h-8v-4.3c0-.1-.2-.3-.4-.2l-5 1.6c-.2 0-.3.1-.3.3v2.7h-1.3c-.1 0-.3.1-.3.3v3.8c0 .1.1.3.3.3h1.3v4.7c0 3.3 1.8 4.8 5.1 4.8 1.4 0 2.7-.3 3.6-.8v-4c0-.2-.2-.3-.3-.2-.5.2-1 .3-1.4.3-.9 0-1.4-.4-1.4-1.4v-3.4h2.9c.1 0 .3-.1.3-.3v-3.2L97.8 29c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l1.8-5.6.9 2.9.8 2.7c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l3.8-12.6V29c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.2-.3zm6.7-4.5h-5.1c-.1 0-.3.1-.3.3v17.7c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V11.1c0-.1-.1-.2-.3-.2zm6.8 0h-5.3c-.1 0-.3.1-.3.3v3.1c0 .1.1.3.3.3h5.3c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.2-.3-.2zm-.1 4.5h-5.1c-.1 0-.3.1-.3.3v13.1c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.3-.3zm16.1 6.8c0 3.8-3.2 7.1-7.7 7.1-4.4 0-7.6-3.3-7.6-7.1s3.2-7.1 7.7-7.1c4.4 0 7.6 3.3 7.6 7.1zm-5.4.1c0-1.4-1-2.5-2.2-2.4-1.3 0-2.2 1.1-2.2 2.4 0 1.3 1 2.4 2.2 2.4 1.3 0 2.2-1.1 2.2-2.4z"></path><title>Twilio logo</title>
                    </svg>

                    <svg class="absolute right-8 top-5 " role="presentation" width="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9.27c1.62 0 2.92 1.3 2.92 2.91v13.1c0 .8-.65 1.45-1.46 1.45H3.42c-2.15 0-3.24-1.05-3.24-2.83V6.4c0-2.45 2.18-3.2 4.12-3.2C4.3 1.57 5.6.26 7.21.26h9.7zM7.83 3.55a1.1 1.1 0 1 0 0 2.18h5.45a1.1 1.1 0 1 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 0 0 0-2.18H7.82zm0 4.36a1.1 1.1 0 1 0 0 2.18h8.73a1.1 1.1 0 1 0 0-2.18H7.82zM4 5.73c-.9 0-1.64.73-1.64 1.63v7.1c0 .6.5 1.09 1.1 1.09h1.09V5.73H4z" fill="#fff"></path>
                    </svg>

                    <h1 className='px-2 leading-8 absolute left-5 max-w-[468px] text-[28px] bottom-5 text-white group-hover:translate-y-[-38px] transition-transform duration-[600ms] ease-in-out'>See how Twilio increased authorization rates by 10% with stripe</h1>

                    <span className='text-[15px] text-white absolute left-7 bottom-0 translate-y-10 group-hover:translate-y-[-20px] transition-transform duration-[600ms] ease-in-out'>Read story</span>
                  </div>
                </div>

              </div>
            </div>


          </Slider>

          {/* Logos */}
          <div className='md:grid md:grid-cols-4 mt-10 cursor-pointer hidden'>
            {logoLinks.map((item, index) => (
              <div className={`p-5 text-center relative ${activeIndex === index ? "active" : ""
                }`}
                key={index}
                onClick={() => handleSVGClick(index)}
              >
                <div
                  className={`absolute top-0 left-0 h-[2px] transition-all duration-[2000ms] ${activeIndex === index ? "w-full" : "w-0"
                    }`}
                  style={{ backgroundColor: item.color }}
                ></div>

                {item.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderComponent;
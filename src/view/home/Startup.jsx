import React, { useState } from 'react';
import startupCard1 from '../../assets/images/startupCard1.jpg';
import startupCard2 from '../../assets/images/startupCard2.jpg';
import startupCard2_1 from '../../assets/images/startupCard2.1.jpg';
import startupCard3 from '../../assets/images/startupCard3.jpg';
import startupCard4 from '../../assets/images/startupCard4.jpg';
import startupCard4_1 from '../../assets/images/startupCard4.1.jpg.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";




function Startup() {
    const [isHoverd, setIsHovered] = useState(null);
    return (
        <section className='bg-[#f6f9fc]
        w-full 3xl:flex justify-center
        after:content-[""] after:block after:w-full after:bg-[#f6f9fc] after:absolute after:h-36 z-0 top-9 pb-[100px] 3xl:pb-[200px] md:top-[150px]'>
            <div className='px-6 md:px-10 xl:px-24 2xl:px-56 py-20 w-full space-y-12 flex justify-center '>
                <div className='3xl:max-w-[1050px] 3xl:ml-10 3xl:mt-10'>
                    {/* Content */}
                    <div className=' md:grid grid-cols-[3fr_1fr] mb-8'>
                        <div className='space-y-4 '>
                            <p className='text-[#635BFF] text-[18px] font-semibold'>Built for growth</p>

                            <h1 className='text-[34px] font-semibold tracking-tight'>Take your startup farther, faster</h1>

                            <p className='text-[18px] text-[#425466] md:pr-[132px] leading-7'>
                                Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        {/* Column 1 */}
                        <div className="flex flex-col space-y-10 sm:pt-28">
                            {/* Row 1 */}
                            <div className=" p-1 w-full bg-white shadow-md rounded-md shadow-[#cfcfcf] group relative overflow-hidden">
                                {/* Header Section */}
                                <header className=' bg-[#f3faff] lg:h-[340px] md:h-[250px] sm:h-[200px] overflow-hidden w-full'>
                                    <img
                                        src={startupCard1}
                                        className="pt-[70px] md:pt-[75px] pl-[70px] group-hover:rounded-t-lg group-hover:bg-[radial-gradient(circle_at_top_center,#ffcb57,_transparent_70%),_radial-gradient(circle_at_left_center,#D7B0B0,_transparent_40%)] transition-transform duration-300 group-hover:-translate-y-2"
                                        alt="Startup Card"
                                    />

                                </header>

                                {/* Content Section */}
                                <div className=" w-full p-5 bg-white transition-all duration-300 sm:-translate-y-0 -translate-y-2 group-hover:-translate-y-10 grid grid-rows-2 space-y-2">
                                    <p className='flex items-center gap-3  '>
                                        <span className='flex items-center gap-3 bg-[#f6f9fc] px-3 py-2.5 rounded-sm'>
                                            <svg class="ProductIcon ProductIcon--Atlas ProductBadge__icon" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <title>Atlas</title>

                                                <g clip-path="url(#product-icon-atlas--a)"><path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z" fill="#FB0"></path><path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z" fill="url(#product-icon-atlas--b)"></path><path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z" fill="url(#product-icon-atlas--c)"></path></g><defs><linearGradient id="product-icon-atlas--b" x1="16.03" y1="18.01" x2="15.94" y2="39.33" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD748"></stop><stop offset=".54" stop-color="#FFCD48"></stop><stop offset="1" stop-color="#FFCB48"></stop></linearGradient><linearGradient id="product-icon-atlas--c" x1="20.51" y1="34.72" x2="20.51" y2="15.01" gradientUnits="userSpaceOnUse"><stop stop-color="#FFAD00"></stop><stop offset="1" stop-color="#FF7600"></stop></linearGradient><clipPath id="product-icon-atlas--a"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs>
                                            </svg>
                                            <span className='text-[12px] text-[#2e3a55] font-semibold'>Atlas</span>
                                        </span>
                                    </p>

                                    <h1 className='text-[26px] font-bold text-[#0a2540]'>Incorporate your company</h1>

                                    <p className='text-[#425466] text-[18px]'>Form a legal entity, issue stock, and start accepting payments.</p>

                                    <p
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className='flex items-center cursor-pointer absolute -bottom-10 group-hover:-translate-y-4 left-5 text-[#635bff] font-semibold hover:text-[#0a2450]  '>Learn about Atlas  <span className='pt-[1.5px]'>{isHoverd ? <FaArrowRight className='pl-1 transition-all duration-300 ease-in-out' size={14} /> : <MdKeyboardArrowRight className='transition-all duration-300 ease-in-out' />} </span></p>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className=" p-1 w-full bg-white shadow-md rounded-md shadow-[#cfcfcf] group relative overflow-hidden">
                                {/* Header Section */}
                                <header className='bg-[rgb(240,247,254)] lg:h-[340px] md:h-[250px] sm:h-[200px] overflow-hidden w-full'>
                                    <img
                                        src={startupCard3}
                                        className="pt-[70px] rounded-t-xl md:pt-[75px] pl-[70px] group-hover:rounded-t-xl group-hover:bg-[radial-gradient(circle_at_top_center,#11EFE3,_transparent_70%),_radial-gradient(circle_at_bottom_center,white,_transparent_40%)] transition-transform duration-300 group-hover:-translate-y-2"
                                        alt="Startup Card"
                                    />

                                </header>

                                {/* Content Section */}
                                <div className=" w-full p-5 bg-white transition-all duration-300 sm:-translate-y-0 -translate-y-2 group-hover:-translate-y-10 grid grid-rows-2 space-y-2">
                                    <p className='flex items-center gap-3'>
                                        <div className='flex items-center gap-3 bg-[#f6f9fc] px-3 py-2.5 rounded-sm'>

                                            <svg class="ProductIcon ProductBadge__icon" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <title>Checkout</title>

                                                <path d="M31.54 4h-19.7c-.84 0-1.63.43-2.09 1.14a2.52 2.52 0 0 0-.18 2.39l5.1 11.46c.3.64.3 1.38 0 2.02L8 36h23.54c.97 0 1.86-.58 2.26-1.48l5.98-13.5c.3-.65.3-1.39 0-2.04L33.8 5.48A2.48 2.48 0 0 0 31.54 4z" fill="#96F"></path><path d="M7.23 36a2.3 2.3 0 0 1-.98-.22h.04a2.43 2.43 0 0 1-1.23-1.23L.22 23.53a2.54 2.54 0 0 1 .17-2.38A2.45 2.45 0 0 1 2.46 20h19.5c.97 0 1.84.57 2.23 1.46l4.8 10.85.68 1.53c.1.22.23.42.38.6.49.64 1.2 1.3 1.98 1.51-.11.03-.3.05-.55.05H7.22z" fill="url(#product-icon-checkout--a)"></path><path d="M21.97 20c.9 0 1.72.5 2.14 1.3l.08.16 4.8 10.85.68 1.53a4.43 4.43 0 0 0 2.3 2.01l.18.07c-.2.05-.4.08-.61.08H8L14.67 21c.15-.32.22-.66.22-1.01h7.08z" fill="url(#product-icon-checkout--b)"></path><defs><linearGradient id="product-icon-checkout--a" x1="16.01" y1="35.59" x2="16.01" y2="21.16" gradientUnits="userSpaceOnUse"><stop stop-color="#21CFE0"></stop><stop offset=".17" stop-color="#20D1E0"></stop><stop offset=".38" stop-color="#18E2E2"></stop><stop offset=".61" stop-color="#13ECE3"></stop><stop offset="1" stop-color="#11EFE3"></stop></linearGradient><linearGradient id="product-icon-checkout--b" x1="21.07" y1="43" x2="21.07" y2="14.5" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                                            </svg>
                                            <span className='text-[12px] text-[#2e3a55] font-semibold'>Checkout</span>
                                        </div>
                                    </p>

                                    <h1 className='text-[26px] font-bold text-[#0a2540]'>Sell to consumers</h1>

                                    <p className='text-[#425466] text-[18px]'>Launch a B2C business with a prebuilt payment page that’s optimized for conversion.</p>

                                    <p
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className='flex gap-1 items-center cursor-pointer absolute -bottom-10 group-hover:-translate-y-4 left-5 text-[#635bff] font-semibold hover:text-[#0a2450]'
                                    >
                                        Start with checkout  <span className='pt-[1.5px]'>{isHoverd ? <FaArrowRight className='pl-1' size={14} /> : <MdKeyboardArrowRight />} </span></p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-10">
                            {/* Row1 */}
                            <div className=" p-1 w-full bg-white shadow-md rounded-md shadow-[#cfcfcf] group relative overflow-hidden">
                                {/* Header Section */}
                                <header className='bg-[rgb(240,247,254)] lg:h-[340px] md:h-[250px] sm:h-[200px] overflow-hidden w-full'>
                                    <div className='group-hover:rounded-t-lg group-hover:bg-[radial-gradient(circle_at_top_center,#11EFE3,_transparent_40%),_radial-gradient(circle_at_left_center,#9966FF,_transparent_0%)] transition-transform duration-300'>
                                        {/* top */}
                                        <img
                                            src={startupCard2}
                                            className="w-[45%] group-hover:rounded-t-lg group-hover:bg-[radial-gradient(circle_at_top_center,#ffcb57,_transparent_70%),_radial-gradient(circle_at_left_center,#D7B0B0,_transparent_40%)] transition-transform duration-300 group-hover:-translate-y-2"
                                            alt="Startup Card"
                                        />

                                        {/* bottom */}
                                        <img
                                            src={startupCard2_1}
                                            className="pl-[55%] sm:-translate-y-[2.9rem] -translate-y-8 md:-translate-y-32 h-[67%] w-[100%] md:group-hover:-translate-y-[8.2rem] sm:group-hover:-translate-y-[3.1rem] group-hover:-translate-y-[2.1rem]"
                                            alt="Startup Card"
                                        />
                                    </div>

                                </header>

                                {/* Content Section */}
                                <div className=" w-full p-5 bg-white transition-all duration-300 sm:-translate-y-0 -translate-y-2 group-hover:-translate-y-10 grid grid-rows-2 space-y-2">
                                    <p className='flex items-center gap-3'>
                                        <span className=' flex items-center gap-3 bg-[#f6f9fc] px-3 py-2.5 rounded-sm'>
                                            <svg class="ProductIcon ProductIcon--PaymentLinks ProductBadge__icon" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5603 16.2116c-.3287-.8362.2877-1.7409 1.1862-1.7409h15.7828c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818c0-.1582-.0295-.3165-.0884-.4663l-3.6421-9.2635Z" fill="url(#product-icon-payment-links--a)"></path><path d="M.0896108 4.74087C-.239137 3.90471.377287 3 1.27575 3H14.6995c.0185 0 .0369.00039.0552.00117.0258-.00078.0517-.00117.0777-.00117h7.6402c1.0478 0 1.9889.6412 2.3723 1.61636l3.5076 8.92164c.1179.2998.1768.6162.1768.9327H12.7465c-.8985 0-1.5149.9047-1.1862 1.7409l3.6421 9.2635c.0589.1498.0884.3081.0884.4663H1.27575c-.898464 0-1.514886-.9047-1.1861386-1.7408L3.73167 14.9371c.11784-.2998.11784-.633 0-.9327L.0896108 4.74087Z" fill="url(#product-icon-payment-links--b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2908 25.9414c0 .1583-.0295.3165-.0884.4664l-3.6421 9.2635c-.3287.8361.2877 1.7408 1.1862 1.7408h21.1968c1.0478 0 1.9889-.6412 2.3723-1.6163l3.5076-8.9217c.2357-.5995.2357-1.2659 0-1.8654l-3.5076-8.9216c-.3834-.9752-1.3245-1.6164-2.3723-1.6164h-5.414c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818Z" fill="#96F"></path><defs><linearGradient id="product-icon-payment-links--a" x1="14.0622" y1="24.6669" x2="29.3565" y2="12.5589" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset=".63979" stop-color="#625AF5"></stop><stop offset="1" stop-color="#8A62FC"></stop></linearGradient><linearGradient id="product-icon-payment-links--b" x1="14.2646" y1="4.50656" x2="14.0622" y2="24.6669" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient></defs></svg>
                                            <span className='text-[12px] text-[#2e3a55] font-semibold'>Payment Links</span>
                                        </span>
                                    </p>

                                    <h1 className='text-[26px] font-bold text-[#0a2540]'>Validate your idea</h1>

                                    <p className='text-[#425466] text-[18px]'>Test your product idea by launching payments with little to no code.</p>

                                    <p
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className='flex gap-1 items-center cursor-pointer absolute -bottom-10 group-hover:-translate-y-4 left-5 text-[#635bff] font-semibold hover:text-[#0a2450]'>Try Payment Links  <span className='pt-[1.5px]'>{isHoverd ? <FaArrowRight className='pl-1' size={14} /> : <MdKeyboardArrowRight />} </span></p>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className=" p-1 w-full bg-white shadow-md rounded-md shadow-[#cfcfcf] group relative overflow-hidden">
                                {/* Header Section */}
                                <header className='bg-[rgb(240,247,254)] lg:h-[330px] md:h-[250px] sm:h-[200px] overflow-hidden w-full '>
                                    <div className='w-full h-full group-hover:rounded-t-lg group-hover:bg-[radial-gradient(circle_at_top_right,#FFD748,_transparent_70%),_radial-gradient(circle_at_top_left,#00a60086,_transparent_40%)] flex flex-col gap-0 p-0'>
                                        <span className='pt-10 pb-6 pl-16 transition-transform duration-300 group-hover:-translate-y-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 25" width="73" height="25" fill="none"><path d="M32.477 13.486V17H30.86V7.924h3.627c2.023 0 3.287.948 3.287 2.781 0 1.808-1.264 2.781-3.287 2.781h-2.01Zm0-1.39H34.4c1.163 0 1.782-.506 1.782-1.39 0-.898-.62-1.391-1.782-1.391h-1.922v2.78ZM44.44 13.688c0 2.06-1.327 3.451-3.197 3.451-1.871 0-3.198-1.39-3.198-3.45 0-2.061 1.327-3.451 3.198-3.451 1.87 0 3.197 1.39 3.197 3.45Zm-4.866 0c0 1.353.645 2.174 1.669 2.174 1.023 0 1.668-.821 1.668-2.174 0-1.352-.645-2.174-1.668-2.174-1.024 0-1.669.822-1.669 2.174ZM48.658 10.364h1.251l1.188 4.399 1.176-4.399h1.504L51.78 17h-1.315l-1.213-4.348L48.038 17h-1.314l-1.997-6.636h1.554l1.201 4.399 1.176-4.399ZM56.974 17.139c-1.858 0-2.92-1.567-2.92-3.45 0-1.884 1.062-3.451 2.92-3.451.86 0 1.492.34 1.909.834V7.924H60.4V17h-1.517v-.695c-.417.493-1.05.834-1.909.834Zm1.947-3.64c0-1.252-.708-1.934-1.643-1.934-1.1 0-1.694.86-1.694 2.123 0 1.264.594 2.124 1.694 2.124.935 0 1.643-.695 1.643-1.921v-.392ZM67.513 10.364V17h-1.517v-.708c-.38.443-.948.847-1.808.847-1.39 0-2.25-.948-2.25-2.376v-4.399h1.517v4.07c0 .809.354 1.327 1.176 1.327.682 0 1.365-.505 1.365-1.453v-3.944h1.517ZM72.878 10.351v1.517a3.842 3.842 0 0 0-.556-.038c-.96 0-1.694.62-1.694 1.681V17h-1.517v-6.636h1.517v.986c.29-.62.973-1.024 1.82-1.024.177 0 .316.013.43.025Z" fill="#2E3A55"></path><path d="M24.5 12.25c0 6.765-5.485 12.25-12.25 12.25S0 19.015 0 12.25 5.485 0 12.25 0 24.5 5.485 24.5 12.25Z" fill="#000"></path><path d="M13.13 6.18c-.456 0-.863.146-1.225.445-.346.294-.58.708-.7 1.235v6.958c.322.348.74.519 1.264.519.854 0 1.47-.407 1.844-1.216.375-.825.56-2.017.56-3.586 0-1.568-.153-2.687-.459-3.353-.298-.67-.725-1.003-1.285-1.003Zm1.18-.83c.696 0 1.308.179 1.844.539.547.36.974.898 1.284 1.618.306.72.463 1.6.463 2.641 0 1.84-.422 3.253-1.264 4.24-.83.976-1.957 1.464-3.387 1.464-.403 0-.781-.05-1.144-.155a2.62 2.62 0 0 1-.902-.46v1.927c0 .566.15.957.443 1.178.294.216.75.329 1.365.329v.406l-.54-.02A148.787 148.787 0 0 0 9.647 19c-.403 0-1.245.027-2.525.077v-.406c.439 0 .749-.097.922-.29.185-.183.282-.52.282-1.023V7.716c0-.592-.1-1.022-.302-1.293-.185-.27-.516-.406-.983-.406V5.61c.427.039.842.058 1.245.058 1.163 0 2.138-.089 2.927-.271V7.17a3.004 3.004 0 0 1 1.225-1.35c.523-.31 1.151-.47 1.872-.47Z" fill="#fff"></path></svg>
                                        </span>
                                        <img
                                            src={startupCard4}
                                            className=" rounded-lg w-[87%]  pl-16 transition-transform duration-300 group-hover:-translate-y-2"
                                            alt="Startup Card"
                                        />
                                    </div>

                                </header>

                                {/* Content Section */}
                                <div className=" w-full p-5 bg-white transition-all duration-300 sm:-translate-y-0 -translate-y-2 group-hover:-translate-y-10 grid grid-rows-2 space-y-2">
                                    <p className='flex items-center gap-3'>
                                        <div className='flex items-center gap-3 bg-[#f6f9fc] px-3 py-2.5 rounded-sm'>

                                            <svg class="ProductIcon ProductIcon--Invoicing ProductBadge__icon" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <title>Invoicing</title>

                                                <path d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z" fill="#00D924"></path><path d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z" fill="url(#product-icon-invoicing--a)"></path><path d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z" fill="url(#product-icon-invoicing--b)"></path><defs><linearGradient id="product-icon-invoicing--a" x1="17.3897" y1="20.25" x2="17.3893" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD748"></stop><stop offset="1" stop-color="#FFC148"></stop></linearGradient><linearGradient id="product-icon-invoicing--b" x1="21.5889" y1="12.7122" x2="21.5881" y2="38.6633" gradientUnits="userSpaceOnUse"><stop stop-color="#00A600"></stop><stop offset="1" stop-color="#00D924"></stop></linearGradient></defs>
                                            </svg>

                                            <span className='text-[12px] text-[#2e3a55] font-semibold'>Invoicing</span>
                                        </div>
                                    </p>

                                    <h1 className='text-[26px] font-bold text-[#0a2540]'>Sell to businesses</h1>

                                    <p className='text-[#425466] text-[18px]'>Launch a B2B business and collect one-time or recurring payments from customers.</p>

                                    <p
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        className='flex gap-1 items-center cursor-pointer absolute -bottom-10 group-hover:-translate-y-4 left-5 text-[#635bff] font-semibold hover:text-[#0a2450]'>Explore Invoicing <span className='pt-[1.5px]'>{isHoverd ? <FaArrowRight className='pl-1' size={14} /> : <MdKeyboardArrowRight />} </span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Startup;
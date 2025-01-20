import React, { useState } from 'react'
import { TiArrowRight } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa6";
import logo1 from '../../assets/images/icon_logo1.png'
import logo2 from '../../assets/images/icon_logo2.png'
import { FaArrowRight } from 'react-icons/fa';

<TiArrowRight />
function Ready() {
    const [isHoverd, setIsHovered] = useState({
        start: false,
        contact: false,
        pricing: false,
        api: false,
    })
    return (
        <div className='bg-[#f2f6f9] w-full text-white z-50 py-16 pb-28 flex justify-center'
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 87%, 0% 100%)',
                WebkitClipPath: 'polygon(0 0, 100% 0, 100% 87%, 0% 100%)',
            }}
        >
            <div className=" bg-[#f2f6f9] mb-10">
                <div className="text-black px-5 md:px-10 xl:px-1.54 2xl:px-56 6 w-full 3xl:ml-20">
                    <div className='3xl:max-w-[1050px]'>
                        <div className="grid grid-cols-[100%] md:grid-cols-[50%_25%_25%] gap-0 w-full space-y-10 md:space-y-0">
                            {/* First Grid: 50% Width */}
                            <div className="space-y-6">
                                <h1 className="sm:text-[24px] font-semibold text-[15px] text-[#0A2540] tracking-tight">
                                    Ready to get started?
                                </h1>
                                <p className="text-[#425466] text-[18px] w-full pr-10 md:pr-32 font-medium">
                                    Create an account instantly to get started or contact us to design a custom package for your business.
                                </p>
                                <div className='flex items-center gap-1'>
                                    <p
                                        onMouseEnter={() => setIsHovered({ ...isHoverd, start: true })}
                                        onMouseLeave={() => setIsHovered({ ...isHoverd, start: false })}
                                        className='bg-[#635BFF] cursor-pointer hover:bg-[#0a2450] text-white pr-3 pl-4 pb-1.5 py-1 text-[15px] flex items-center rounded-full '>Start now <span className='pt-[1.5px]'>{isHoverd.start ? <FaArrowRight size={10} className='transform translate-x-0.5 ml-1 ' /> : <MdKeyboardArrowRight />}</span></p>
                                    <p
                                        onMouseEnter={() => setIsHovered({ ...isHoverd, contact: true })}
                                        onMouseLeave={() => setIsHovered({ ...isHoverd, contact: false })}
                                        className='text-[#635BFF] cursor-pointer hover:text-[#0a2450] text-[15px] flex items-center pr-3 pl-4 pb-2 py-1 rounded-full'>Contact sales<span className=''>{isHoverd.contact ? <FaArrowRight size={10} className='transform translate-x-0.5 ml-1 ' /> : <MdKeyboardArrowRight />}</span></p>
                                </div>
                            </div>

                            {/* Second Grid: 25% Width */}
                            <div className="space-y-4">
                                <div className='pb-1.5 pl-3'>
                                    {/* img */}
                                    <img src={logo1} alt="" />
                                </div>
                                <div className=' relative flex items-center'>
                                    <span className='block top-[3px] left-0 w-[1px] h-[14px] bg-[#0a2450] absolute'></span>
                                    <div className='space-y-3 pl-3'>
                                        <p className='text-[#0A2540] md:pr-8 text-[14px] font-bold'>Always know what you pay</p>
                                        <p className='text-[#425466] md:pr-8 font-normal'>Integrated per-transaction pricing with no hidden fees.</p>
                                        <p
                                            onMouseEnter={() => setIsHovered({ ...isHoverd, pricing: true })}
                                            onMouseLeave={() => setIsHovered({ ...isHoverd, pricing: false })}
                                            className='flex items-center cursor-pointer hover:text-[#0a2450] pr-8 text-[#635BFF] text-[15px] font-[550]'>Pricing details <span className='3xl:pt-[1px]'>{isHoverd.pricing ? <FaArrowRight size={10} className='transform translate-x-1.5 ' /> : <MdKeyboardArrowRight />}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Third Grid: 25% Width */}
                            <div className="space-y-4 ">
                                <div className='pl-3'>
                                    <img src={logo2} alt="" />
                                </div>
                                <div className='flex items-center relative'>
                                    <span className='block top-[3px] left-0 w-[0.5px] h-[14px] bg-[#0a2450] absolute'></span>
                                    <div className='space-y-3 pl-3'>
                                        <p className='text-[#0A2540] text-[14px] font-bold pr-8'>Start your integration</p>
                                        <p className='text-[#425466] font-normal pr-8'>Get up and running with Stripe in as little as 10 minutes.</p>
                                        <p
                                            onMouseEnter={() => setIsHovered({ ...isHoverd, api: true })}
                                            onMouseLeave={() => setIsHovered({ ...isHoverd, api: false })}
                                            className='flex items-center pr-8 cursor-pointer hover:text-[#0a2450] text-[#635BFF] text-[15px]  font-[550]'>API reference <span className='pt-[1px]'>{isHoverd.api ? <FaArrowRight size={10} className='transform translate-x-1.5 ' /> : <MdKeyboardArrowRight />}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Ready;
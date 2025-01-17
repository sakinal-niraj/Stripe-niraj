import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
// import { TiArrowRight } from "react-icons/ti";
import { details } from '../../constant/Details';
import { TiArrowRight } from "react-icons/ti";


function DetailsComponent() {
    const [isHoverd, setIsHovered] = useState(null);
    return (
        <div className='space-y-20 lg:space-y-[280px]  3xl:space-y-[440px]'>
            {details.map((item) => (
                <div className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center" key={item.id}>
                    <>
                        {/* Content Section */}
                        <div className="space-y-8 md:w-1/2 w-full">
                            <div className='space-y-6'>
                                <h2 className="text-[#0a2450] font-bold text-xl pr-16 flex items-center gap-2">
                                    {/* svg */}
                                    {item.svg}
                                    {item.title}</h2>

                                <p className="font-bold px-2 md:px-0 text-[34px] md:text-[46px] tracking-tight lg:text-[38px] text-[#0A2540] leading-tight md:pr-16">
                                    {item.heading}
                                </p>

                                <p className="text-base px-2 md:px-0 text-[#425466] text-[18px] md:pr-[170px] pr-16 ">
                                    {item.content}
                                </p>

                                <p
                                    className='hover:bg-[#0a2450] mx-2 md:mx-0 text-white font-semibold flex items-center justify-center pb-[5px] gap-1 px-3 p-1 bg-[#635BFF] rounded-full w-fit'
                                    onMouseEnter={() => setIsHovered(item.id)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    {item.btn} <span className='pt-[4.5px] font-bold '>{isHoverd === item.id ? <TiArrowRight /> : <MdKeyboardArrowRight />}</span></p>

                            </div>
                            <div className='space-y-3 font-bold pt-8 pr-16 mx-2 md:mx-0'>
                                <p className='text-[15px] text-[#0A2540]'>See also</p>

                                <div className='space-y-1'>
                                    <p className='text-[#425466] font-normal'><span className='text-[#635BFF] font-semibold'>{item.dp1}</span> {item.p1}</p>
                                    <p className='text-[#425466] font-normal'><span className='text-[#635BFF] font-semibold'>{item.dp2}</span> {item.p2}</p>
                                    <p className='text-[#425466] font-normal'><span className='text-[#635BFF] font-semibold'>{item.dp3}</span> {item.p3}</p>
                                </div>
                            </div>


                        </div>

                        {/* Image or Content Section */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <div className="bg-gray-200 w-[65%] md:w-full  flex justify-center items-center">
                                <img src={item.img} alt='img1' />
                            </div>
                        </div>
                    </>
                </div>
            ))}
        </div>
    )
}

export default DetailsComponent;
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import code from '../../assets/images/code.jpg';
import { FaArrowRight } from "react-icons/fa";
import { shipData } from '../../constant/ShipData';


function Ship() {
    const [isHoverd, setIsHovered] = useState(false);
    const [isIconHoverd, setIsIconHoverd] = useState(null);
    return (
        <section
            className="
            bg-[#0a2540] z-20 2xl:-translate-y-32  -translate-y-20
            after:content-[''] after:block after:w-full after:h-40 ship_canvas"
            // style={{
            //     clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
            //     WebkitClipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
            // }}


        >
            <div className=' pt-36 md:pt-40 3xl:pb-20 px-5 md:px-4 md:pl-8 xl:px-24 2xl:px-56  w-full 3xl:flex justify-center text-white z-10 relative'>
                <div className='md:space-y-16 pt-5 max-w-[1100px] 3xl:ml-10'>
                    {/* row 1 */}
                    <div className='grid sm:grid-cols-2 grid-cols-1 space-y-6 md:pl-4'>
                        {/* col1 */}
                        <div className='space-y-6 md:pt-6 3xl:mt-6'>
                            <p className='text-[#00d4ff] font-semibold text-[18px] lg:pr-16'>Designed for develoeprs</p>

                            <h1 className='text-white text-4xl font-semibold leading-[2.8rem] lg:pr-16 tracking-tighter'>Ship more quickly with powerful and easy-to-use APIs</h1>

                            <p className=' pr-5 sm:pl-0 md:pr-20 text-[#adbdcc] leading-7 text-[18px] '>
                                Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.
                            </p>

                            <button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className='flex items-center gap-0 transition-all transform duration-[400ms] hover:bg-white bg-[#00d4ff] text-[#0a2540] text-[15px] font-[550] p-[6px_12px_6px_16px] rounded-full'>
                                Read the docs
                                {isHoverd ? <FaArrowRight size={10} className='transfrom ease-in-out duration-300 ml-1.5' /> : <MdKeyboardArrowRight className='ease-in-out transfrom duration-300' />}
                            </button>
                        </div>

                        {/* col2 */}
                        <div className='pb-10 '>
                            <img src={code} alt="" />
                        </div>
                    </div>


                    {/* row 2 */}
                    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 space-y-12 md:space-y-0'>
                        {/* col1 */}
                        {
                            shipData.map((item) => (
                                <div className='space-y-3'>
                                    <div className="pb-2 pl-1">
                                        <img src={item.icon} className='w-14' alt="" />
                                    </div>

                                    <div className='flex gap-4 relative'>
                                        <span className='block top-[3px] left-0 w-[1px] h-[14px] bg-[#00d4ff] absolute '></span>
                                        <p className='pl-4 text-[15px] font-semibold'>
                                            {item.title}
                                        </p>
                                    </div>

                                    <p className='pl-4 text-[#adbdcc] text-[15px] text-left pr-8'> {item.content}</p>

                                    <p
                                        onMouseEnter={() => setIsIconHoverd(item.id)}
                                        onMouseLeave={() => setIsIconHoverd(null)}
                                        className='flex transition-all duration-300 items-center text-[15px] pl-4 text-[#00d4ff] hover:text-white font-medium  ease-in-out'>
                                        {item.btn}
                                        <span className='pt-[1px]'>
                                            {isIconHoverd === item.id ? (
                                                <FaArrowRight
                                                    size={10}
                                                    className='transfrom translate-x-1 duration-0 ease-in-out ml-[0px] '
                                                />
                                            ) : (
                                                <MdKeyboardArrowRight
                                                    className='translate-x-0 transform duration-0 ease-in-out'
                                                />
                                            )}
                                        </span>
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ship;
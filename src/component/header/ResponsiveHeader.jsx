import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

function ResponsiveHeader({ isOpen }) {
    const [isHover, setIsHover] = useState(false);
    const [hovered, setHovered] = useState({ signIn: false, contactSales: false });


    const handleMouseEnter = (e) => {
        // Apply hover effect on individual li
        e.target.classList.add('text-gray-400');
    };

    const handleMouseLeave = (e) => {
        // Remove hover effect on individual li
        e.target.classList.remove('text-gray-400');
    };

    return (
        <>
            {isOpen && (
                <div className="lg:hidden absolute top-12 left-0 w-full h-[93vh] bg-white z-20 shadow-lg">
                    <div className="flex py-5 flex-col">
                        <ul className=" text-left pl-5 cursor-pointer w-full pt-8 space-y-7 text-[#3F4B66]">
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Products
                                <span className='text-3xl '><MdKeyboardArrowRight /></span>
                            </li>
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Solutions
                                <span className='text-3xl '><MdKeyboardArrowRight /></span>
                            </li>
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Developers
                                <span className='text-3xl '><MdKeyboardArrowRight /></span>
                            </li>
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Resources
                                <span className='text-3xl '><MdKeyboardArrowRight /></span>
                            </li>
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Contact sales
                            </li>
                            <li
                                className="text-lg font-bold flex items-center justify-between pr-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Pricing
                            </li>
                        </ul>


                        <div
                            onMouseEnter={() => setHovered({ ...hovered, signIn: true })}
                            onMouseLeave={() => setHovered({ ...hovered, signIn: false })}
                            className="flex items-center hover:bg-[#0a2540] gap-1 absolute bottom-4 bg-[#635BFF] py-1 pl-4 pr-3 pb-2 font-semibold text-white rounded-full left-0 right-0 mx-auto w-fit">
                            Sign in
                            <span className='pt-1 text-lg font-extrabold'>{hovered.signIn ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}</span>
                        </div>


                    </div>
                </div>
            )}
        </>
    );
}

export default ResponsiveHeader;

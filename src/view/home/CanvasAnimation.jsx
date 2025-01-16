import React, { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";


const CanvasAnimation = () => {
    const canvasRef = useRef(null);
    const [hovered, setHovered] = useState({ signIn: false, contactSales: false });
    const col = (x, y, r, g, b) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) => {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 1900 + t));
    };

    const G = (x, y, t) => {
        return Math.floor(
            192 +
            64 *
            Math.sin(
                (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 1000
            )
        );
    };

    const B = (x, y, t) => {
        return Math.floor(
            192 +
            64 *
            Math.sin(
                5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 2900
            )
        );
    };

    const run = () => {
        let t = 0;
        const animate = () => {
            const ctx = canvasRef.current.getContext('2d');
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.01;
            window.requestAnimationFrame(animate);
        };

        animate();
    };

    useEffect(() => {
        run();
    }, []);

    return (
        <div className=''>
            <canvas
                ref={canvasRef}
                width="32"
                height="32"
                className="absolute top-0 left-0 w-full h-full -z-20"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 83%)',
                }}
            >

            </canvas>
            <div className='-z-10 mt-5 md:mt-16 w-full flex justify-center pl-5 sm:pl-6 md:ml-10 lg:ml-0 2xl:pl-6 3xl:pl-0 3xl:ml-0'>
                <div className='flex 3xl:max-w-[1050px] overflow-hidden'>
                    <div className="text-black mr-[90px]">
                        {/* Preview Tag */}
                        <div className="flex justify-start items-center mb-10">
                            <h1 className="w-fit text-center px-3 py-2 rounded-sm md:py-[3px] md:px-[11px] md:rounded-full bg-gray-800/50 text-white text-[13px] font-bold tracking-wide">
                                Preview
                            </h1>
                        </div>

                        {/* Content Section */}
                        <div className="mt-8 max-w-[540px] space-y-9 ">
                            {/* Headline */}
                            <h1 className="text-[61px] md:text-[91px] tracking-[-0.06em] leading-[1] text-gray-800 font-bold">
                                Financial infrastructure to grow your revenue
                            </h1>

                            {/* Subheading */}
                            <p className="text-gray-700 font-medium text-lg leading-relaxed">
                                Join millions of companies of all sizes using Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
                            </p>

                            {/* Call-to-Action Button */}
                            <button
                                onMouseEnter={() => setHovered({ ...hovered, contactSales: true })}
                                onMouseLeave={() => setHovered({ ...hovered, contactSales: false })}
                                className="flex items-center text-[15px] gap-1 bg-[#0a2540] text-white rounded-full p-[7px_12px_6px_16px] font-semibold shadow-md hover:opacity-50"
                            >
                                Request an invite
                                <span className="text-lg transition-transform duration-300">
                                    {hovered.contactSales ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}
                                </span>
                            </button>
                        </div>
                    </div>



                    {/* images */}
                    <div className='relative'>
                        <div className='flex items-center'>
                            {/* Rockey side */}
                            <div class="HomepageDashboardGraphic__company flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20"><path fill="#FFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"></path></svg>
                                Rocket Rides
                                <svg width="10" height="4" viewBox="0 0 10 4"><polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"></polyline></svg>
                            </div>

                            {/* search bar */}
                            <div className="flex items-center h-[25px] px-3 w-[280px] bg-white">
                                <svg
                                    className="h-[14px] w-[15px] mr-2"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="3.5" fill="none" stroke="#62788d" />
                                    <path
                                        fill="#62788d"
                                        d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z"
                                    />
                                </svg>
                                <span className="text-sm text-[#62788d]">Search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CanvasAnimation;

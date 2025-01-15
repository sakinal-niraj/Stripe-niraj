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
            <div className='-z-10 mt-5 md:mt-16 w-full '>
                <div className="text-black px-4 md:px-8 xl:px-24 2xl:px-[220px] ml-2">
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
                                {hovered.contactSales ? <BsArrowRightShort  /> : <MdKeyboardArrowRight />}
                            </span>
                        </button>
                    </div>
                </div>



                {/* images */}
                <div>
                    <img src={'hello'} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CanvasAnimation;

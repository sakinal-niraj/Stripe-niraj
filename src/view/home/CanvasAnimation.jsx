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
        <div>
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
            <div className='-z-10 mt-16 w-full '>
                <div className="text-black px-4 md:px-8 xl:px-24 2xl:px-[220px] ml-2">
                    {/* Preview Tag */}
                    <div className="flex justify-start items-center">
                        <h1 className="w-fit text-center py-[6px] px-4 rounded-full bg-gray-800/50 text-white text-xs font-bold tracking-wide">
                            Preview
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="mt-8 max-w-[540px] space-y-9 font-sohne-var ">
                        {/* Headline */}
                        <h1 className="text-[32px] md:text-[80px] font-sohne-var tracking-tight leading-[5.1rem] text-gray-800 font-bold">
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
                            className="flex items-center gap-2 bg-gray-900 text-white rounded-full py-2 px-6 font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
                        >
                            Request an invite
                            <span className="text-lg">
                                {hovered.contactSales ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}
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

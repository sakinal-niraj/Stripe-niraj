import React, { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";
import phone from  '../../assets/images/Screenshot 2024-12-26 185431.png';
import Comanies from './Comanies';


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
        <>
            <canvas
                ref={canvasRef}
                width="32"
                height="32"
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 83%)',
                }}
            >

            </canvas>
            <div className='z-10 mt-16 w-full '>
                <div className='text-black px-2 md:px-4 xl:px-24 ml-3 2xl:px-[220px]'>
                    <h1 className='w-fit text-center py-[1px] px-2 pb-1 rounded-full bg-[#0000004d] flex items-center text-sm text-white font-bold'>Preview</h1>

                    <div className='mt-5 min-w-[400px] max-w-[540px] gap-0 space-y-8'>
                        <h1 className='text-[84px] tracking-tight leading-tight gap-[-1px] text-[#000000b7] font-bold'>Financial infrastructure to grow your revenue</h1>

                        <p className='text-[#3a3a3ae1] font-semibold text-lg'>Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>

                        <button
                            onMouseEnter={() => setHovered({ ...hovered, contactSales: true })}
                            onMouseLeave={() => setHovered({ ...hovered, contactSales: false })}
                            className='hover:opacity-80 gap-1 flex items-center bg-black rounded-full text-white py-1.5 px-4'>Request an invite
                            <span className='pt-1'>{hovered.contactSales ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}</span>
                        </button>

                    </div>
                </div>


                {/* images */}
                <div>
                    <img src={'hello'} alt="" />
                </div>

            </div>
            <Comanies /> 
        </>
    );
};

export default CanvasAnimation;

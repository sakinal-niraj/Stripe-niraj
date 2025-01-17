import React, { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";
import hero1 from '../../assets/images/hero1.png';
import hero from '../../assets/images/hero.png';


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
            <div>
                <canvas
                    width={"32"}
                    height={"32"}
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full -z-20"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 34%, 0 83%)',
                    }}
                >
                </canvas>
            </div>

            <div className='relative -z-10 mt-5 md:mt-16 flex justify-between w-full h-full 3xl:justify-center  pl-5 sm:pl-6 md:ml-0 lg:ml-0 2xl:pl-[240px] 3xl:pl-[0px] 3xl:ml-0 overflow-hidden'>
                <div className='flex justify-between 3xl:max-w-[1050px] 3xl:w-full '>
                    <div className="text-black mr-[90px] 3xl:w-full">
                        {/* Preview Tag */}
                        <div className="flex justify-start items-center mb-8">
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
                            <p className="text-gray-700 font-medium text-lg leading-relaxed pr-[40px]">
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

                    <div className='w-full relative'>
                        <div className='relative z-30 ml-20 bg-[#ffffff60] w-[1050px] h-[600px] flex items-start gap-2 px-6 py-6 rounded-lg justify-between'>
                            <div className='flex items-center  gap-4'>
                                <div className='flex items-center gap-2'>
                                    <svg width="20" height="20" viewBox="0 0 20 20"><path fill="#FFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"></path></svg>
                                    <span className='text-[13px] text-white font-semibold'>ROCKET RIDES</span>
                                    <svg width="10" height="4" viewBox="0 0 10 4"><polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"></polyline></svg>
                                </div>

                                <div class="HomepageDashboardGraphic__searchBar flex items-center h-[20px] bg-white p-1 text-[12px] w-[300px] rounded-sm gap-1">
                                    <svg class="w-3" viewBox="0 0 10 10"><circle cx="4" cy="4" r="3.5" fill="none" stroke="#62788d"></circle><path fill="#62788d" d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z"></path></svg>
                                    Search
                                </div>
                            </div>

                            {/* icons */}
                            <div>
                                <svg width="70" height="12" viewBox="0 0 70 12"><path fill="#62788d" d="M3.12 10.5h3.76C6.7 11.37 5.91 12 5 12c-.91 0-1.7-.63-1.88-1.5zm5.72-3.7l.94.92c.22.22.28.54.16.82a.77.77 0 0 1-.7.46H.76a.77.77 0 0 1-.71-.46.74.74 0 0 1 .16-.82l.94-.92V3.75A3.8 3.8 0 0 1 5 0a3.8 3.8 0 0 1 3.84 3.75V6.8z"></path><path fill="#62788d" d="M34 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.75-5.93v.3a.75.75 0 0 0 1.44.29 2.63 2.63 0 1 0-3.32-2.53.75.75 0 0 0 1.51-.01A1.13 1.13 0 0 1 34 3a1.12 1.12 0 0 1 0 2.23.75.75 0 0 0-.75.83zM34 10.5a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25zm30-2.25c1.09 0 2.13-.41 2.92-1.15l1.33.5A2.7 2.7 0 0 1 70 10.12v1.12c0 .41-.34.75-.75.75h-10.5a.75.75 0 0 1-.75-.75v-1.13C58 9 58.7 8 59.76 7.6l1.32-.5A4.23 4.23 0 0 0 64 8.26zM63.85 0h.3a2.63 2.63 0 0 1 2.61 2.84l-.12 1.48a2.65 2.65 0 0 1-5.28 0l-.12-1.48A2.63 2.63 0 0 1 63.85 0z"></path></svg>
                            </div>
                            <div className='absolute left-[-60px] top-16 z-50 rounded-lg'>
                                <img src={hero1} alt="" className='rounded-[30px] w-[85%] border-[4px] border-[#e7eef6a6]' />
                            </div>

                            <div className='absolute right-[-180px] top-16 z-50 '>
                                <img src={hero} alt="" className=' w-[82%]' />
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className=' w-full' >hello</div> */}
            </div>
        </div >
    );
};

export default CanvasAnimation;

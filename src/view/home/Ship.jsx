import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import code from '../../assets/images/code.jpg';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';


function Ship() {
    return (
        <section
            className="
            before:content-[''] before:block before:w-full before:h-5 bg-[#0a2540] z-20
            after:content-[''] after:block after:w-full after:h-40"
            style={{
                clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
                WebkitClipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
            }}


        >
            <div className='py-20 pt-48 px-5 md:px-4 md:pl-8 xl:px-24 2xl:px-56  w-full 3xl:flex justify-center text-white z-10 relative'>
                <div className='space-y-16 pt-5 max-w-[1100px] 3xl:ml-10'>
                    {/* row 1 */}
                    <div className='grid sm:grid-cols-2 grid-cols-1 space-y-6 md:pl-4'>
                        {/* col1 */}
                        <div className='space-y-6'>
                            <p className='text-[#00d4ff] font-semibold text-[18px] lg:pr-16'>Designed for develoeprs</p>

                            <h1 className='text-white text-4xl font-semibold leading-[2.8rem] lg:pr-16 tracking-tighter'>Ship more quickly with powerful and easy-to-use APIs</h1>

                            <p className='pl-5 pr-5 sm:pl-0 md:pr-20 text-[#adbdcc] leading-7 text-[18px] '>
                                Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.
                            </p>

                            <button className='flex items-center gap-1 hover:bg-white bg-[#00d4ff] text-[#0a2540] text-[15px] font-[550] p-[6px_12px_6px_16px] rounded-full'>
                                Read the docs
                                <MdKeyboardArrowRight />
                            </button>
                        </div>

                        {/* col2 */}
                        <div>
                            <img src={code} alt="" />
                        </div>
                    </div>


                    {/* row 2 */}
                    <div className='grid md:grid-cols-4 grid-cols-2'>
                        {/* col1 */}
                        <div className='space-y-3'>
                            <div className="pb-2 pl-1">
                                <img src={icon1} className='w-14' alt="" />
                            </div>

                            <div className='flex gap-4 relative'>
                                <span className='block top-[3px] left-0 w-[1px] h-[14px] bg-[#00d4ff] absolute '></span>
                                <p className='pl-4 text-[15px] font-semibold'>
                                    Use Stripe with your stack
                                </p>
                            </div>

                            <p className='pl-4 text-[#adbdcc] text-[15px] text-left pr-8'> We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                            <p className='flex items-center text-[15px] pl-4 text-[#00d4ff] hover:text-white font-medium'>See libraries <span><MdKeyboardArrowRight /></span> </p>
                        </div>

                        {/* col2 */}
                        <div className='space-y-3 '>
                            <div className="pb-2 pl-1">
                                <img src={icon2} className='w-14' alt="" />
                            </div>

                            <div className='flex gap-4 relative'>
                                <span className='block top-[3px] left-0 w-[1px] h-[14px] bg-[#00d4ff] absolute '></span>
                                <p className='pl-4 text-[15px] font-semibold'>
                                    Try no-code options
                                </p>
                            </div>

                            <p className='pl-4 text-[#adbdcc] text-[15px] pr-[32px]'> Customize and deploy payments interfaces directly from the Stripe Dashboard.</p>

                            <p className='flex items-center text-[15px] pl-4 text-[#00d4ff] hover:text-white font-medium'>Explore no-code <span><MdKeyboardArrowRight /></span></p>
                        </div>


                        {/* col3 */}
                        <div className='space-y-3 mt-10 md:mt-0'>
                            <div className="pb-2 pl-1">
                                <img src={icon3} className='w-14' alt="" />
                            </div>

                            <div className='flex gap-4 relative'>
                                <span className='block top-[3px] left-0 w-[1px] h-[14px] bg-[#00d4ff] absolute '></span>
                                <p className='pl-4 text-[15px] font-semibold'>
                                    Explore pre-built integrations
                                </p>
                            </div>

                            <p className='pl-4 text-[#adbdcc] text-[15px] pr-[32px]'> Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.</p>

                            <p className='flex items-center text-[15px] pl-4 text-[#00d4ff] hover:text-white font-medium'>Browse App Marketplace <span><MdKeyboardArrowRight /></span></p>
                        </div>


                        {/* col4 */}
                        <div className='space-y-3 mt-10 md:mt-0'>
                            <div className="pb-2 pl-1">
                                <img src={icon4} className='w-12 pt-1' alt="" />
                            </div>

                            <div className='flex gap-4 relative'>
                                <span className='block top-[3px] left-0 w-[0.5px] h-[14px] bg-[#00d4ff] absolute '></span>
                                <p className='pl-4 text-[15px] font-semibold'>
                                    Build on Stripe Apps
                                </p>
                            </div>

                            <p className='pl-4 text-[#adbdcc] text-[15px] pr-[32px]'> Create an app just for your team or for the millions of businesses on Stripe.</p>

                            <p className='flex items-center text-[15px] pl-4 text-[#00d4ff] hover:text-white font-medium'>Learn about Apps <MdKeyboardArrowRight /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ship;
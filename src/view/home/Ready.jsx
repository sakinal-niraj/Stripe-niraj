import React from 'react'
import { TiArrowRight } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa6";


<TiArrowRight />
function Ready() {
    return (
        <div className='bg-[#f2f6f9] w-full text-white z-50 py-16 pb-28'
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 87%, 0% 100%)',
                WebkitClipPath: 'polygon(0 0, 100% 0, 100% 87%, 0% 100%)',
            }}
        >
            <div className=" bg-[#f2f6f9] mb-10">
                <div className="text-black px-5 md:px-10 xl:px-24 2xl:px-56 pt-16 w-full">
                    <div className="grid grid-cols-[100%] md:grid-cols-[50%_25%_25%] gap-4 w-full">
                        {/* First Grid: 50% Width */}
                        <div className="space-y-6">
                            <h1 className="text-[24px] font-semibold text-[#0A2540]">
                                Ready to get started
                            </h1>
                            <p className="text-[#425466] text-[18px] w-full pr-32 font-medium">
                                Create an account instantly to get started or contact us to design a custom package for your business.
                            </p>
                            <div className='flex items-center gap-1'>
                                <p className='bg-[#635BFF] text-white pr-3 pl-4 pb-2 py-1 font-semibold flex items-center rounded-full '>Start now <span className='pt-1'><MdKeyboardArrowRight /></span></p>
                                <p className='text-[#635BFF] font-semibold flex items-center pr-3 pl-4 pb-2 py-1 rounded-full'>Contact sales<span className='pt-1'><MdKeyboardArrowRight /></span></p>
                            </div>
                        </div>

                        {/* Second Grid: 25% Width */}
                        <div className="space-y-4">
                            <div>
                                <FaTags />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-[#0A2540] md:pr-8 text-[15px] font-bold'>Always know what you pay</p>
                                <p className='text-[#425466] md:pr-8 font-normal'>Integrated per-transaction pricing with no hidden fees.</p>
                                <p className='flex items-center pr-8 text-[#635BFF] font-semibold'>Pricing details <span className='pt-1'><MdKeyboardArrowRight /></span></p>
                            </div>
                        </div>

                        {/* Third Grid: 25% Width */}
                        <div className="space-y-4 ">
                            <div>
                                <FaTags />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-[#0A2540] text-[15px] font-bold pr-8'>Start your integration</p>
                                <p className='text-[#425466] font-normal pr-8'>Get up and running with Stripe in as little as 10 minutes.</p>
                                <p className='flex items-center pr-8 text-[#635BFF] font-semibold'>API reference <span className='pt-1'><MdKeyboardArrowRight /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Ready;
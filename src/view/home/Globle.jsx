import React from 'react'
import card1 from '../../assets/images/card1.svg';
import card2 from '../../assets/images/card2.svg';


function Globle() {
    return (
        <section className='py-32 px-5 md:px-10 xl:px-24 2xl:px-56 pt-16 w-full space-y-12'>
            {/* Content */}
            <div className='flex flex-col space-y-6 md:w-[60%] w-full font-bold'>
                <h1 className='text-[#635BFF] text-[18px] font-semibold pr-[64px]'>Launch with ease</h1>

                <p className='pr-[64px] text-[34px]'>Low- and no-code options for getting started</p>

                <p className='text-[#425466] text-[18px] font-normal'>If you’d like to use Stripe for your business but don’t have developers on staff, no problem. We have a few options depending on your needs.</p>

            </div>

            {/* Cards */}
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full px-4 gap-5'>
                {/* card1  */}
                <div className="h-[540px] w-full shadow-lg shadow-gay-150 overflow-hidden hover:cursor-pointer relative group p-1 rounded-md">
                    {/* Image Section */}
                    <div className="w-full h-[220px] transition-all duration-300 group-hover:h-[180px] pl-10 bg-[#f6f9fa] z-0  overflow-hidden">
                        <img
                            src={card1}
                            alt=""
                            className="rounded-md w-full h-[250px] object-cover transition-transform duration-300  group-hover:-translate-y-1"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full text-black bg-white z-10 p-6 space-y-6">
                        <h1 className=" text-[26px] font-semibold">
                            Use a pre-integrated platform
                        </h1>
                        <p className="text-[18px] text-[#425466]">
                            Explore our directory to find out-of-the-box solutions that connect with Stripe, such as Squarespace and Lightspeed.
                        </p>
                        {/* Hidden Button */}
                        <p className="h-[10px] w-full box-border absolute text-[#9966FF] text-[18px] font-semibold bottom-[-20px] transition-all duration-300 group-hover:bottom-10">
                            See directory
                        </p>
                    </div>
                </div>

                {/* card2 */}
                <div className="h-[540px] w-full shadow-lg shadow-gay-150 overflow-hidden hover:cursor-pointer relative group p-1 rounded-md">
                    {/* Image Section */}
                    <div className="w-[full] h-[220px] transition-all duration-300 group-hover:h-[180px] pl-10 bg-[#f6f9fa] z-0  overflow-hidden">
                        <img
                            src={card2}
                            alt=""
                            className="rounded-md w-[full] h-[250px] object-cover transition-transform duration-300  group-hover:-translate-y-1"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full text-black bg-white z-10 p-6 space-y-6">
                        <h1 className=" text-[26px] font-semibold">
                            Build with Stripe-certified experts
                        </h1>
                        <p className="text-[18px] text-[#425466]">
                            Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.
                        </p>
                        {/* Hidden Button */}
                        <p className="h-[10px] w-full box-border absolute text-[#9966FF] text-[18px] font-semibold bottom-[-20px] transition-all duration-300 group-hover:bottom-10">
                            View partners
                        </p>
                    </div>
                </div>

                {/* card3 */}
                <div className="h-[540px] w-full shadow-lg shadow-gay-150 overflow-hidden hover:cursor-pointer relative group p-1 rounded-md">
                    {/* Image Section */}
                    <div className="w-full h-[220px] transition-all duration-300 group-hover:h-[180px] pl-10 bg-[#f6f9fa] z-0  overflow-hidden">
                        <img
                            src={card1}
                            alt=""
                            className="rounded-md w-full h-[250px] object-cover transition-transform duration-300  group-hover:-translate-y-1"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full text-black bg-white z-10 p-6 space-y-6">
                        <h1 className=" text-[26px] font-semibold">
                            Try our no-code products
                        </h1>
                        <p className="text-[18px] text-[#425466]">
                            Create an invoice, accept an in-person payment with your phone, or share a payment link directly from your Dashboard to start generating revenue in minutes – no code required.
                        </p>
                        {/* Hidden Button */}
                        <p className="h-[10px] w-full box-border absolute text-[#9966FF] text-[18px] font-semibold bottom-[-20px] transition-all duration-300 group-hover:bottom-10">
                            Explore no-code
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Globle

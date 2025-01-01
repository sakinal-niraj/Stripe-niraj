import React from 'react';
import img1 from '../../assets/images/Screenshot 2024-12-30 124422.png';
import DetailsComponent from './DetailsComponent';

function Details() {
    return (
        <section className="relative text-white bg-[#f2f6f9]
  after:content-[''] after:block after:w-full after:bg-[#f2f6f9] after:absolute after:h-28 z-10 top-9 md:top-[150px]">
            <div
                className='bg-[#f2f6f9] mt-10'
            >
                {/* First Clipped Section */}
                <div className='pb-28 z-10'>
                    <div className="px-5 md:px-10 xl:px-20 2xl:px-52 py-20 pt-28 space-y-32">
                        <div className="w-full flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="space-y-6 md:w-1/2 w-full">
                                <h2 className="text-[#635BFF] font-bold text-xl pl-4 flex items-center gap-2">
                                    Modular solutions
                                </h2>
                                <p className="font-bold text-[36px] lg:text-[46px] xl:text-[56px] text-[#0A2540] leading-tight md:pr-10 pl-4">
                                    A fully integrated suite of financial and payments products
                                </p>
                                <p className="text-lg text-gray-700 pl-4 pr-10">
                                    Reduce costs, grow revenue, and run your business more efficiently on a
                                    fully integrated platform. Use Stripe to handle all of your
                                    payments-related needs, manage revenue operations, and launch (or invent)
                                    new business models.
                                </p>
                            </div>

                            <div className="md:w-1/2 w-full flex justify-center items-center">
                                <div className="bg-gray-200 w-[75%] md:w-full flex justify-center items-center rounded-lg shadow-md">
                                    <img src={img1} alt="Modular solutions visual" className="object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <DetailsComponent />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Details;

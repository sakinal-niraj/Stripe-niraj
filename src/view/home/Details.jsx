import React from 'react';
import img1 from '../../assets/images/Screenshot 2024-12-30 124422.png';
import DetailsComponent from './DetailsComponent';

function Details() {
    return (
        <section className="relative text-white bg-[#f2f6f9]
  after:content-[''] after:block after:w-full after:bg-[#f2f6f9] after:absolute after:h-28 z-10 top-9 md:top-[150px]">
            <div
                className='bg-[#f2f6f9] mt-2 flex justify-center '
            >
                {/* First Clipped Section */}
                <div className='pb-28 2xl:ml-36 z-10 3xl:max-w-[1600px]'>
                    <div className="px-5 md:px-6 xl:px-20 3xl:px-56 py-20 pt-28 space-y-20 lg:space-y-24 3xl:space-y-52">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="space-y-6 md:w-1/2 w-full">
                                <h2 className="text-[#635BFF] font-bold text-[18px] pl-2 pb-2 flex items-center gap-2">
                                    Modular solutions
                                </h2>
                                <p className="tracking-[-3px] font-bold text-[48px] xl:text-[56px] text-[#0A2540] leading-tight pr-[20px] pl-2 lg:pr-[100px]">
                                    A fully integrated suite of financial and payments products
                                </p>
                                <p className="text-lg text-[#425466] pl-2 lg:pr-[135px] pr-6">
                                    Reduce costs, grow revenue, and run your business more efficiently on a
                                    fully integrated platform. Use Stripe to handle all of your
                                    payments-related needs, manage revenue operations, and launch (or invent)
                                    new business models.
                                </p>
                            </div>

                            <div className="md:w-1/2 w-full flex justify-center items-center">
                                <div className="bg-gray-200 w-[75%] flex justify-center items-center rounded-lg shadow-md">
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

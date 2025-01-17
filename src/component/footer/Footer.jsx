import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { companyData, developersData, integrationCustom, productsPricing, resourcesData, solutoinsData, supportData } from '../../constant/FooterData';
import { Link } from 'react-router-dom';
import { MdCopyright } from "react-icons/md";



function Footer() {
    return (
        <>
            <footer className=' text-black w-full '>
                <div className='py-20 px-5 md:px-10 xl:px-24 2xl:px-56 3xl:px-0 pt-16 w-full text-black flex justify-center '>
                    <div className='3xl:max-w-[1050px] 3xl:ml-28'>
                        <div className=''>
                            <div className='grid grid-cols-2 sm:grid-cols-4 space-x-4 gap-5'>
                                {/* col1 */}
                                <div className='col-span-2 sm:col-span-1 row-auto gap-2'>
                                    <div className='col-span-2 sm:col-span-1 row-auto gap-2'>
                                        <h1 className='pb-2'><svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><title>Stripe logo</title><path fill="var(--userLogoColor, #0A2540)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg></h1>

                                        <span className='flex items-center gap-2  cursor-pointer text-[#0a2450] text-[15px]'><span className='pt-1'><FaLocationArrow /></span>india (English)</span>
                                    </div>
                                </div>


                                {/* col2 */}
                                <div className='space-y-2'>
                                    <h1 className='font-medium'>Products & pricing</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            productsPricing.map((item, index) => (
                                                <Link className='hover:opacity-60 duration-0' to={item.path} key={item.index}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* col3 */}
                                <div class="grid grid-rows-min grid-cols-auto grid-flow-row auto-cols-auto auto-rows-min space-y-6">
                                    {/* Solutions */}
                                    <div className='flex flex-col space-y-2'>
                                        <h1 className='font-medium'>Solutions</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                solutoinsData.map((item, index) => (
                                                    <Link className='hover:opacity-60' to={item.path} key={item.key}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* Integration & custom solutions */}
                                    <div className='flex flex-col space-y-2'>
                                        <h1 className='font-medium'>Integrations & custom solutions</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                integrationCustom.map((item, index) => (
                                                    <Link className='hover:opacity-60' to={item.path} key={item.index}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* Integration & custom solutions */}
                                    <div className='flex flex-col space-y-2'>
                                        <h1 className='font-medium'>Developers</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                developersData.map((item, index) => (
                                                    <Link className='hover:opacity-60' to={item.path} key={item.index}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* col4 */}
                                <div class="grid grid-cols-2 sm:grid-cols-1 col-span-2 sm:col-span-1 row-auto ">
                                    {/* Solutions */}
                                    <div className='flex flex-wrap w-[50%] flex-col space-y-2  sm:mt-0'>
                                        <h1 className='font-medium '>Resources</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                resourcesData.map((item, index) => (
                                                    <Link className='hover:opacity-60' to={item.path} key={item.index}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* Integration & custom solutions */}
                                    <div className='flex flex-col space-y-2 ml-4 sm:ml-0'>
                                        <h1 className='font-medium'>Company</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                companyData.map((item, index) => (
                                                    <Link className='hover:opacity-60' to={item.path} key={item.index}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* Integration & custom solutions */}
                                    <div className='flex flex-col space-y-2 mt-10 sm:mt-0'>
                                        <h1 className='font-medium'>Support</h1>

                                        <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                            {
                                                supportData.map((item, index) => (
                                                    <Link className='hover:opacity-60 duration-0' to={item.path} key={item.index}>{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 pt-8 pl-3.5 sm:pl-0 sm:pt-0 text-[#364657] text-[15px]'>
                            <span><MdCopyright /></span>
                            2025 Stripe, Inc.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
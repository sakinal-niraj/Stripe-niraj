import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { companyData, developersData, integrationCustom, productsPricing, resourcesData, solutoinsData, supportData } from '../../constant/FooterData';
import { Link } from 'react-router-dom';
import { MdCopyright } from "react-icons/md";



function Footer() {
    return (
        <>
            <footer className=' text-black w-full '>
                <div className='py-20 px-5 md:px-10 xl:px-24 2xl:px-56 pt-16 w-full text-black'>
                    <div className=''>
                    <div className='sm:hidden block'>
                                <h1 className=''>Stripe</h1>

                                <p className='flex items-center gap-2'><span className='pt-1'><FaLocationArrow /></span>india (English)</p>
                            </div>
                        <div className='grid grid-cols-2 sm:grid-cols-4 space-x-4'>
                            {/* col1 */}
                            <div className='hidden sm:block'>
                                <h1 className=''>Stripe</h1>

                                <p className='flex items-center gap-2'><span className='pt-1'><FaLocationArrow /></span>india (English)</p>
                            </div>

                            {/* col2 */}
                            <div className='space-y-2'>
                                <h1 className='font-semibold'>Products & pricing</h1>

                                <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                    {
                                        productsPricing.map((item, index) => (
                                            <Link to={item.path} key={item.key}>{item.label}</Link>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* col3 */}
                            <div class="grid grid-rows-min grid-cols-auto grid-flow-row auto-cols-auto auto-rows-min space-y-6">
                                {/* Solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Solutions</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            solutoinsData.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Integration & custom solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Integrations & custom solutions</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            integrationCustom.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Integration & custom solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Developers</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            developersData.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* col4 */}
                            <div class="grid grid-rows-min grid-cols-auto grid-flow-row auto-cols-auto auto-rows-min space-y-6">
                                {/* Solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Resources</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            resourcesData.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Integration & custom solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Company</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            companyData.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Integration & custom solutions */}
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='font-semibold'>Support</h1>

                                    <div className='flex flex-col space-y-1 text-[#0A2540] text-[15px]'>
                                        {
                                            supportData.map((item, index) => (
                                                <Link to={item.path} key={item.key}>{item.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-[#364657] text-[15px]'>
                        <span><MdCopyright /></span>
                        2024 Stripe, Inc.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
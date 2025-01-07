import { BsArrowRightShort, BsFillBuildingsFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { BsFillBasket3Fill } from "react-icons/bs";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { BiSolidLayer } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { ImPieChart } from "react-icons/im";
import { TbGlobeFilled } from "react-icons/tb";
import { IoMdRadio } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { AiFillPlusSquare } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { RiLifebuoyFill } from "react-icons/ri";
import { FaTag } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPenNib } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoAnalytics } from "react-icons/io5";
import { FaArrowsAltH } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import { ProductConstant, ProductGlobal, RevenueFinance } from "../../constant/Products";
import { paymentHover } from "../../constant/Hover";




const Products = () => {
    const [hovered, setHovered] = useState({
        elements: false,
        connect: false,
    });

    // global-2
    const [globHoverd, setGlobHoverd] = useState({
        Terminal: false,
        Radar: false,
        Authorization: false,
    });


    // icons
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <div className='absolute top-0 left-[-6.5rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[1000px] transform'>
            <div className="relative top-6 bg-[#F6F9FB] rounded-xl shadow-xl w-full">
                <div className="w-10 h-10  bg-[#F6F9FB] transform rotate-45 absolute top-0 z-0 translate-x-[8rem] rounded-sm"></div>
                <div>
                    <div className="p-1 space-y-1 text-[15px] flex">
                        <div className="flex flex-col relative z-10 w-[70%]">
                            {/* Globel */}
                            <div className="bg-white rounded-xl p-6 pb-7 border-[1px]  w-full">
                                <h1 className="uppercase text-[#0A2540] text-[12px] ">Globle payments</h1>
                                <div className="grid grid-cols-2 mt-2 gap-30">
                                    <div>
                                        {/* logo x payment  */}
                                        <div className="flex gap-2">
                                            <div className="pt-2">
                                                <svg class="ProductIcon ProductIcon--Payments " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <title>Payments</title>

                                                    <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-SiteMobileMenu-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-payments-SiteMobileMenu-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-SiteMobileMenu-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                                                </svg>
                                            </div>
                                            <div
                                                onMouseEnter={() => setHovered({ ...hovered, payments: true })}
                                                onMouseLeave={() => setHovered({ ...hovered, payments: false })}
                                            >
                                                <p className="font-semibold flex items-center gap-2 text-[#0a2540]">Payments {hovered.payments ? <BsArrowRightShort size={20} /> : ""}</p>
                                                <p className="opacity-70 hover:font-semibold hover:opacity-100">Online payments</p>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="text-xs ml-7 mt-3 space-y-1 lg:w-[70%]">
                                            {paymentHover.map((item) => (
                                                <p
                                                    className="flex items-center p-1.5 bg-[#F6F9FC] rounded-md"
                                                    key={item.id}
                                                    onMouseEnter={() => setHoveredIcon(item.id)}
                                                    onMouseLeave={() => setHoveredIcon(null)}
                                                >
                                                    <span className="text-[13px] text-[#0a2540]">{item.title}</span>
                                                    <span className="mt-0.5 ml-0.5">
                                                        {hoveredIcon === item.id ? item.hover : item.default}
                                                    </span>
                                                    <span className={`transition-opacity duration-100 text-[13px] text-[#0a2540] ${hoveredIcon === item.id ? "opacity-100" :"opacity-50"} font-[300]`}>
                                                        {item.desc}
                                                    </span>
                                                </p>
                                            ))}

                                        </div>
                                    </div>

                                    {/* global-2 */}
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            {ProductGlobal.map((item) => (
                                                <div className="flex gap-2">
                                                    <div className="pt-2">
                                                        {item.svg}
                                                    </div>
                                                    <div
                                                        onMouseEnter={() =>
                                                            setGlobHoverd((prev) => ({ ...prev, [item.label]: true }))
                                                        }
                                                        onMouseLeave={() =>
                                                            setGlobHoverd((prev) => ({ ...prev, [item.label]: false }))
                                                        }
                                                    >
                                                        <p className="font-semibold flex items-center gap-2 text-[#0a2540] text-[16px]">{item.label} {globHoverd[item.label] ? <BsArrowRightShort size={20} /> : ""}</p>
                                                        <p className={`transition-opacity duration-100 opacity-50 text-[#0a2540] ${globHoverd[item.label] ? "opacity-100" : "opacity-0"} text-[16px] font-normal `}>{item.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Embedded */}
                            <div className="bg-white rounded-xl p-6 pb-7 border-2  w-full">
                                <h1 className="uppercase text-[#0a2540] text-[13px]">Embedded payments and Finance</h1>
                                <div className="flex gap-2 mt-2">
                                    <div className="pt-2">
                                        <svg class="ProductIcon ProductIcon--Payments " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <title>Connect</title>

                                            <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-SiteMobileMenu-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-payments-SiteMobileMenu-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-SiteMobileMenu-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                                        </svg>
                                    </div>
                                    <div
                                        onMouseEnter={() => setHovered({ ...hovered, connect: true })}
                                        onMouseLeave={() => setHovered({ ...hovered, connect: false })}
                                    >
                                        <p className="flex items-center gap-2 text-[#0a2540] font-[500]">
                                            Connect {hovered.connect ? <BsArrowRightShort size={20} /> : ""}
                                        </p>
                                        <p className={`transition-opacity text-[#0a2450] duration-100 ${hovered.connect ? "opacity-100" : "opacity-50"} font-[300]`}>
                                            Payments for platforms
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Revenue and finance */}
                            <div className="bg-white rounded-xl p-6 pb-7 border-2  w-full">
                                <h1 className="uppercase text-[#000000] text-[15px] font-bold">Revenue and Finance Automation</h1>

                                <div className="grid grid-cols-2">
                                    {RevenueFinance.map((item) => (
                                        <>
                                            {/* first div */}
                                            <div>
                                                {/* billing */}
                                                <div className="flex gap-2 mt-2">
                                                    <div className="pt-2">
                                                        {/* svg revenue */}
                                                        {item.svg}
                                                    </div>
                                                    <div
                                                        key={item.id}
                                                        onMouseEnter={() => setHoveredIcon(item.id)}
                                                        onMouseLeave={() => setHoveredIcon(null)}
                                                    >
                                                        <p className="flex items-center gap-1 font-[500]">{item.label} {hoveredIcon === item.id ? item.hover : ""}</p>
                                                        <p className={`transition-opacity duration-100 text-[#0a2540] opacity-50 ${hoveredIcon === item.id ? "opacity-100" : "opacity-0"} font-[300]`}>{item.description}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] p-4 space-y-2 cursor-pointer">
                            <h1 className="font-bold text-lg">More</h1>

                            {ProductConstant.map((item) => (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setHoveredIcon(item.id)} // Set hoveredIcon to item.id when mouse enters
                                    onMouseLeave={() => setHoveredIcon(null)} // Reset hoveredIcon to null when mouse leaves
                                    className="relative"
                                >
                                    <p className="flex items-center gap-1 font-[500]">
                                        {item?.label}
                                        <span>{hoveredIcon === item.id ? item.hover : item.default}</span>
                                    </p>
                                    <p
                                        className={`transition-all duration-700 font-[300] text-[#0a2540] opacity-50 max-h-0 overflow-hidden ${hoveredIcon === item.id ? 'max-h-40' : ''}`}
                                    >
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};





const Solutions = () => {
    return (
        <div className='absolute top-0 left-[-3.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[600px] transform'>
            <div className="relative top-6 bg-[#F6F9FB] rounded-xl shadow-xl w-full">
                <div className="w-10 h-10  bg-[#F6F9FB] transform rotate-45 absolute top-0 z-0 translate-x-[5rem] rounded-sm"></div>
                <div>
                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px]">
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-7">
                            <h1 className="uppercase text-[#000000] text-[15px] font-bold">by stage</h1>

                            <div className="grid grid-cols-2 mt-2">
                                <span className="flex items-center gap-2"><BsFillBuildingsFill /> Enterprise</span>
                                <span className="flex items-center gap-2"><IoIosRocket /> Startups</span>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#000000]">by business model</h1>

                            <div className="space-y-3">
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><BsFillBasket3Fill /> E-commerce</span>
                                    <span className="flex items-center gap-2"><PiArrowsClockwiseBold /> SaaS</span>
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><BiSolidLayer /> plateforms</span>
                                    <span className="flex items-center gap-2"><BsShop /> Marketplaces</span>
                                </div>
                            </div>
                        </div>

                        {/* third row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#000000]">by business model</h1>

                            <div className="space-y-3">
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><LuChartNoAxesColumn /> Finance automation</span>
                                    <span className="flex items-center gap-2"><ImPieChart /> Embedded finance</span>
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><TbGlobeFilled /> Global business</span>
                                    <span className="flex items-center gap-2"><IoMdRadio /> Crypto</span>
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><FaLightbulb /> Createor economy</span>
                                    <span className="flex items-center gap-2"><CiShop /> Retail</span>
                                </div>
                            </div>
                        </div>

                        {/* fourth row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#000000]">by business model</h1>

                            <div className="space-y-3">
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><AiFillPlusSquare /> Stripe App Marketplace</span>
                                    <span className="flex items-center gap-2"><PiArrowsClockwiseBold /> Partners</span>
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <span className="flex items-center gap-2"><IoMdPeople /> Professional Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Developers = () => {
    return (
        <div className='absolute top-0 left-[-7.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[550px] transform'>
            <div className="relative top-6 bg-[white] rounded-xl shadow-xl shadow-gray-400 w-full">
                <div className="w-10 h-10  bg-[white] transform rotate-45 absolute top-0 z-0 translate-x-[9rem] rounded-sm"></div>
                <div>

                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px]">
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl space-y-6">
                            <div className="mb-2 pt-5 space-y-2 px-6">
                                <span className="flex items-center gap-2"><FaBookOpen /> Documentation</span>

                            </div>

                            <div className="grid grid-cols-2 mb-2 pt-2 space-y-2 px-10">
                                <div className="mt-1.5 space-y-2">
                                    <span className="flex items-center gap-2 font-bold">Get Started</span>
                                    <span className="flex items-center gap-2">Libraries and SDKs</span>
                                    <span className="flex items-center gap-2">Pre-built checkout </span>
                                    <span className="flex items-center gap-2">App integrations</span>
                                    <span className="flex items-center gap-2">Code samples </span>
                                </div>
                                <div className="mt-1.5 space-y-2">
                                    <span className="flex items-center gap-2 font-bold">Guied</span>
                                    <span className="flex items-center gap-2">Accept online payments</span>
                                    <span className="flex items-center gap-2">Manage subscriptions</span>
                                    <span className="flex items-center gap-2">Send payments</span>
                                    <span className="flex items-center gap-2">Set up in-person payments</span>
                                </div>
                            </div>

                            <div className="my-2 px-6 py-6 bg-[#F6F9FB]  grid grid-cols-2 space-y-3 shadow-xl text-black shadow-white rounded-md">
                                <span className="flex items-center gap-2"><HiOutlineBars4 /> Full API reference</span>
                                <span className="flex items-center gap-2"><IoAnalytics /> API changelog</span>
                                <span className="flex items-center gap-2"><FaArrowsAltH /> API status</span>
                                <span className="flex items-center gap-2"><BsFiles /> Build on Stripe Apps</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Resources = () => {
    return (
        <div className='absolute top-0 left-[-7.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[500px] transform'>
            <div className="relative top-6 bg-[white] rounded-xl shadow-xl shadow-gray-400 w-full">
                <div className="w-10 h-10  bg-[white] transform rotate-45 absolute top-0 z-0 translate-x-[9rem] rounded-sm"></div>
                <div>

                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px]">
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl space-y-6">
                            <div className="grid grid-cols-2 mb-2 pt-5 space-y-2 px-6">
                                <span className="flex items-center gap-2"><RiLifebuoyFill size={18} /> Support center</span>
                                <span className="flex items-center gap-2"><FaTag /> Support plans</span>
                                <span className="flex items-center gap-2"><FaFile /> Guides</span>
                                <span className="flex items-center gap-2"><RiCustomerService2Fill /> Customer stories</span>
                                <span className="flex items-center gap-2"><FaPenNib /> Blog</span>
                                <span className="flex items-center gap-2"><FaCalendar /> Sessions</span>
                                <span className="flex items-center gap-2"><TiMessages size={17} /> Contact sales</span>
                            </div>

                            <div className="my-2 px-6 py-6 bg-[#F6F9FB] grid grid-cols-2 space-y-3 shadow-xl text-black shadow-white rounded-md">
                                <span className="flex items-center gap-2"><PiBagSimpleFill /> Jobs</span>
                                <span className="flex items-center gap-2"><FaNewspaper /> Newsroom</span>
                                <span className="flex items-center gap-2"><FaBookOpen /> Stripe Press</span>
                                <span className="flex items-center gap-2"><BsAwardFill /> Become a partner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Pricing = () => {
    return (
        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">

        </div>
    )
}

export {
    Products,
    Solutions,
    Developers,
    Resources,
    Pricing
}
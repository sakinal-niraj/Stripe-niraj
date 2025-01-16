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
import { businessModel, byStage, ecosystem, useCase } from "../../constant/Solutions";
import { developers } from "../../constant/Developers";
import { resources, resources2 } from "../../constant/Resources";




const Products = () => {
    const [hovered, setHovered] = useState({
        payments: false,
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
       
            <div className="relative top-6 lg:bg-[#F6F9FB] lg:rounded-xl lg:shadow-xl w-full">
                <div className="w-10 h-10  lg:bg-[#F6F9FB] transform rotate-45 absolute top-0 z-0 translate-x-[8rem] rounded-sm"></div>
                <div>
                    <div className="p-1 space-y-1 text-[15px] lg:flex ">
                        <div className="flex flex-col relative z-10 w-full lg:w-[76%] ">
                            {/* Globel */}
                            <div className="bg-white rounded-xl p-6 pb-7 lg:border-[1px]  w-full">
                                <h1 className="uppercase text-[#0A2540] text-[13px] font-[600] opacity-90 pb-2">Globle payments</h1>
                                <div className="grid lg:grid-cols-2 space-y-8 mt-2 gap-30">
                                    <div>
                                        {/* logo x payment  */}
                                        <div className="flex gap-2">
                                            <div className="pt-2 pr-3">
                                                <svg class="ProductIcon ProductIcon--Payments " width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <title>Payments</title>

                                                    <path d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z" fill="url(#product-icon-payments-SiteMobileMenu-a)"></path><path d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z" fill="#96F"></path><path d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z" fill="url(#product-icon-payments-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-payments-SiteMobileMenu-a" x1="20" y1="4.13" x2="20" y2="21.13" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-payments-SiteMobileMenu-b" x1="35" y1="11.28" x2="35" y2="28.72" gradientUnits="userSpaceOnUse"><stop stop-color="#0048E5"></stop><stop offset="1" stop-color="#9B66FF"></stop></linearGradient></defs>
                                                </svg>
                                            </div>
                                            <div
                                                onMouseEnter={() => setHovered({ ...hovered, payments: true })}
                                                onMouseLeave={() => setHovered({ ...hovered, payments: false })}

                                            >
                                                <p className="font-[600] flex items-center gap-2 text-[#0a2540] text-[14px]">Payments {hovered.payments ? <BsArrowRightShort size={20} /> : ""}</p>
                                                <p className={` font-[425] text-[#0a2540] ${hovered.payments ? 'opacity-100' : "opacity-50"} text-[13px]`}>Online payments</p>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="text-xs ml-9 mt-3 space-y-1 lg:w-[70%]">
                                            {paymentHover.map((item) => (
                                                <p
                                                    className="flex items-center p-1.5 bg-[#F6F9FC] rounded-md"
                                                    key={item.id}
                                                    onMouseEnter={() => setHoveredIcon(item.id)}
                                                    onMouseLeave={() => setHoveredIcon(null)}
                                                >
                                                    <span className="font-[550] flex items-center gap-2 text-[#0a2540] text-[12px]">{item.title}</span>
                                                    <span className="mt-0.5 lg:ml-0.5">
                                                        {hoveredIcon === item.id ? item.hover : item.default}
                                                    </span>
                                                    <span className={`transition-opacity duration-100 font-[300] text-[12px] text-[#0a2540] ${hoveredIcon === item.id ? "opacity-100" : "opacity-50"} font-[300]`}>
                                                        {item.desc}
                                                    </span>
                                                </p>
                                            ))}

                                        </div>
                                    </div>

                                    {/* global-2 */}
                                    <div>
                                        <div className="flex flex-col space-y-3 lg:pl-10">
                                            {ProductGlobal.map((item) => (
                                                <div className="flex gap-2">
                                                    <div className="pt-2 pr-3">
                                                        {item.svg}
                                                    </div>
                                                    <div
                                                        onMouseEnter={() =>
                                                            setGlobHoverd((prev) => ({ ...prev, [item.label]: true }))
                                                        }
                                                        onMouseLeave={() =>
                                                            setGlobHoverd((prev) => ({ ...prev, [item.label]: false }))
                                                        }
                                                        className="pt-[1px]"
                                                    >
                                                        <p className="font-semibold flex items-center gap-2 text-[#0a2540] text-[14px]">{item.label} {globHoverd[item.label] ? <BsArrowRightShort size={20} /> : ""}</p>
                                                        <p className={`transition-opacity duration-100  text-[#0a2540] ${globHoverd[item.label] ? "opacity-100" : "opacity-50"} text-[13px] font-normal `}>{item.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Embedded */}
                            <div className="bg-white rounded-xl p-6 pb-7 lg:border-2  w-full">
                                <h1 className="uppercase text-[#0A2540] text-[13px] font-[600] opacity-90">Embedded payments and Finance</h1>
                                <div className="flex gap-2 mt-2">
                                    <div className="pt-2 pr-3">
                                        <svg class="ProductIcon ProductIcon--Connect " width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <title>Connect</title>

                                            <path d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z" fill="url(#product-icon-connect-SiteMobileMenu-a)"></path><path d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z" fill="#0073E6"></path><path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z" fill="url(#product-icon-connect-SiteMobileMenu-b)"></path><defs><linearGradient id="product-icon-connect-SiteMobileMenu-a" x1="13" y1="1.71" x2="13" y2="15.25" gradientUnits="userSpaceOnUse"><stop stop-color="#11EFE3"></stop><stop offset=".33" stop-color="#15E8E2"></stop><stop offset=".74" stop-color="#1FD3E0"></stop><stop offset="1" stop-color="#21CFE0"></stop></linearGradient><linearGradient id="product-icon-connect-SiteMobileMenu-b" x1="20" y1="15.72" x2="20" y2="27.24" gradientUnits="userSpaceOnUse"><stop stop-color="#00299C"></stop><stop offset="1" stop-color="#0073E6"></stop></linearGradient></defs>
                                        </svg>
                                    </div>
                                    <div
                                        onMouseEnter={() => setHovered({ ...hovered, connect: true })}
                                        onMouseLeave={() => setHovered({ ...hovered, connect: false })}
                                    >
                                        <p className="flex items-center gap-2 text-[14px] text-[#0a2540] font-[530]">
                                            Connect {hovered.connect ? <BsArrowRightShort size={20} /> : ""}
                                        </p>
                                        <p className={`text-[13px] transition-opacity text-[#0a2450] duration-100 ${hovered.connect ? "opacity-100" : "opacity-50"} font-[300]`}>
                                            Payments for platforms
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Revenue and finance */}
                            <div className="bg-white rounded-xl p-6 pb-7 lg:border-2  w-full">
                                <h1 className="uppercase text-[#0A2540] text-[13px] font-[600] opacity-90">Revenue and Finance Automation</h1>

                                <div className="grid lg:grid-cols-2">
                                    {RevenueFinance.map((item) => (
                                        <div key={item.id}>
                                            <div className="flex gap-2 mt-2">
                                                <div className="pt-2 pr-3">{item.svg}</div>
                                                <div
                                                    onMouseEnter={() => setHoveredIcon(item.id)}
                                                    onMouseLeave={() => setHoveredIcon(null)}
                                                >
                                                    <p className="flex items-center gap-1 font-[500]">
                                                        {item.label} {hoveredIcon === item.id ? item.hover : ""}
                                                    </p>
                                                    <p
                                                        className={`transition-opacity duration-100 text-[#0a2540]  ${hoveredIcon === item.id ? "opacity-100" : "opacity-50"
                                                            } font-[300]`}
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}



                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%] w-full p-4 space-y-2 cursor-pointer bg-gray-50">
                            <h1 className="text-[13px] font-semibold uppercase pb-2">More</h1>

                            {ProductConstant.map((item) => (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setHoveredIcon(item.id)} // Set hoveredIcon to item.id when mouse enters
                                    onMouseLeave={() => setHoveredIcon(null)} // Reset hoveredIcon to null when mouse leaves
                                    className="relative"
                                >
                                    <p className="flex items-center gap-1 font-[500] text-[14px]">
                                        {item?.label}
                                        <span className="lg:flex hidden">{hoveredIcon === item.id ? item.hover : item.default}</span>
                                    </p>
                                    <p
                                        className={`transition-all duration-1000 font-[300] text-[13px] text-[#0a2540] opacity-50 max-h-0 overflow-hidden ${hoveredIcon === item.id ? 'max-h-40' : ''}`}
                                    >
                                        <span className="hidden lg:block">{item?.description}</span>
                                    </p>
                                    <p className="lg:hidden text-[#0a2540] opacity-50">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    );
};





const Solutions = () => {
    const [isIconHoverd, setIsIconHoverd] = useState(null);
    return (
        
            <div className="relative top-6 bg-[#F6F9FB] lg:rounded-xl shadow-xl w-full">
                <div className="w-10 h-10  lg:bg-[#F6F9FB] transform rotate-45 absolute top-0 z-0 translate-x-[5rem] rounded-sm"></div>
                <div>
                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px] w-full">
                        <div className="relative z-10 w-full bg-white  lg:rounded-xl p-6 pb-7">
                            <h1 className="uppercase text-[#0a2540] text-[13px] font-[550] tracking-tight">by stage</h1>

                            <div className="grid lg:grid-cols-2 lg:mt-2 mt-4 space-y-3 ">
                                {
                                    byStage.map((item) => (
                                        <span
                                            onMouseEnter={() => setIsIconHoverd(item.id)}
                                            onMouseLeave={() => setIsIconHoverd(null)}
                                            key={item.id}
                                            className=""
                                        >
                                            <span className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize">
                                                <svg
                                                    className={`${isIconHoverd === item.id ? 'fill-[#0a2540]' : 'fill-[#88add2]'} duration-100`}
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    {item.svg}
                                                </svg>
                                                {item.title}
                                            </span>
                                        </span>
                                    ))
                                }

                            </div>
                        </div>

                        {/* second row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#0a2540] text-[13px] font-[550]">by business model</h1>

                            <div className="">
                                <div className="grid md:grid-cols-2 grid-cols-1   mt-2 space-y-3">
                                    {
                                        businessModel.map((item) => (
                                            <span
                                                key={item.id}
                                                onMouseEnter={() => setIsIconHoverd(item.id)}
                                                onMouseLeave={() => setIsIconHoverd(null)}
                                                className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize">
                                                <svg
                                                    className={`${isIconHoverd === item.id ? 'fill-[#0a2540]' : 'fill-[#88add2]'} duration-100`}
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    {item.svg}
                                                </svg>
                                                {item.title}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* third row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#0a2540] text-[13px] font-[550]">By use case</h1>

                            <div className="">
                                <div className="grid lg:grid-cols-2 mt-2 space-y-3">
                                    {
                                        useCase.map((item) => (
                                            <span
                                                key={item.id}
                                                className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize"
                                                onMouseEnter={() => setIsIconHoverd(item.id)}
                                                onMouseLeave={() => setIsIconHoverd(null)}
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`${isIconHoverd === item.id ? "fill-[#0a2540]" : "fill-[#88add2]"} `}>
                                                    {item.svg}
                                                </svg>
                                                {item.title}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* fourth row */}
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl p-6 pb-8 space-y-3">
                            <h1 className="uppercase text-[#0a2540] text-[13px] font-[550] tracking-tighter">Ecosystem</h1>

                            <div className="">
                                <div className="grid lg:grid-cols-2 mt-2 space-y-3">
                                    {
                                        ecosystem.map((item) => (
                                            <span
                                                key={item.id}
                                                className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize"
                                                onMouseEnter={() => setIsIconHoverd(item.id)}
                                                onMouseLeave={() => setIsIconHoverd(null)}
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`${isIconHoverd === item.id ? "fill-[#0a2540]" : "fill-[#88add2]"} `}>
                                                    {item.svg}
                                                </svg>
                                                {item.title}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}


const Developers = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [isIconHoverd, setIsIconHoverd] = useState(null);
    return (
       
            <div className="relative top-6 bg-[white] rounded-xl shadow-xl shadow-gray-400 w-full">
                <div className="w-10 h-10  bg-[white] transform rotate-45 absolute top-0 z-0 translate-x-[9rem] rounded-sm"></div>
                <div>

                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px]">
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl space-y-6">
                            <div className="mb-2 pt-5 space-y-2 px-6">
                                <div className="flex  gap-2"
                                    onMouseEnter={() =>
                                        setIsHovered(true)
                                    }
                                    onMouseLeave={() =>
                                        setIsHovered(false)
                                    }
                                >
                                    <span className="pt-[2px]">
                                        <svg class={`${isHovered ? 'fill-[#0a2540]' : 'fill-[#88add2]'}`} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.04 2c1.91 0 3.46.9 3.46 2.55V15c-.45 0-.9-.3-1.17-.53-.86-.71-2.52-.75-4.31-.75H.83a.82.82 0 0 1-.59-.25.86.86 0 0 1-.24-.6V2.85C0 2.38.37 2 .83 2h3.2zm11.13 0c.22 0 .43.1.59.25.15.16.24.38.24.6v10.02c0 .23-.09.44-.24.6a.82.82 0 0 1-.6.25h-1.18c-1.8 0-3.45.04-4.3.75-.28.23-.73.53-1.18.53V4.55C8.5 2.91 10.05 2 11.96 2h3.2z" fill-rule="evenodd"></path></svg>
                                    </span>
                                    <div
                                        className="space-y-[2px]"
                                    >
                                        <p className="flex items-center gap-1 uppercase text-[#0a2540] font-[550] tracking-tight text-[13px]"> Documentation{isHovered ? <BsArrowRightShort className="hidden md:flex" size={20} /> : ""}</p>
                                        <p className={`hidden lg:block transition-opacity duration-100  text-[#0a2540] ${isHovered ? "opacity-100" : "opacity-60"} text-[13px] font-normal `}>Start intergating Stripe's products and tools</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 mb-2 pt-2 lg:space-y-2 px-10 space-y-6">
                                <div className="mt-1.5 space-y-1.5">
                                    <span className="flex items-center gap-2 uppercase text-[#0a2540] text-[13px] font-[600] tracking-tight">Get Started</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Pre-built checkout </span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Libraries and SDKs</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">App integrations</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Code samples </span>
                                </div>
                                <div className="mt-1.5 space-y-2">
                                    <span className="flex items-center gap-2 uppercase text-[#0a2540] text-[13px] font-[600]">Guied</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Accept online payments</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Manage subscriptions</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Send payments</span>
                                    <span className="capitalize text-[#0a2540] text-[14px] font-[500] opacity-75 hover:opacity-100 flex items-center gap-2">Set up in-person payments</span>
                                </div>
                            </div>

                            <div className="my-2 px-6 py-6 bg-[#F6F9FB]  grid lg:grid-cols-2 lg:pd-0 pb-16 space-y-3 rounded-md">
                                {
                                    developers.map((item) => (
                                        <span
                                            key={item.id}
                                            className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize"
                                            onMouseEnter={() => setIsIconHoverd(item.id)}
                                            onMouseLeave={() => setIsIconHoverd(null)}
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${isIconHoverd === item.id ? "fill-[#0a2540] stroke-[#0a2540]" : "fill-[#88add2] stroke-[#88add2]"} `}>
                                                {item.svg}
                                            </svg>
                                            {item.title}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


const Resources = () => {
    const [isIconHoverd, setIsIconHoverd] = useState(null);
    return (
       
            <div className="relative top-6 bg-[white] rounded-xl shadow-xl shadow-gray-400 w-full">
                <div className="w-10 h-10  bg-[white] transform rotate-45 absolute top-0 z-0 translate-x-[9rem] rounded-sm"></div>
                <div>

                    {/* first row */}
                    <div className="p-1 space-y-1 text-[15px]">
                        <div className="relative z-10 w-full bg-white shadow-white  rounded-xl space-y-6">
                            <div className="grid lg:grid-cols-2 mt-6 space-y-6 lg:space-y-2 px-6">
                                {
                                    resources.map((item) => (
                                        <span
                                            key={item.id}
                                            className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize"
                                            onMouseEnter={() => setIsIconHoverd(item.id)}
                                            onMouseLeave={() => setIsIconHoverd(null)}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${isIconHoverd === item.id ? "fill-[#0a2540]" : "fill-[#88add2]"} `}>
                                                {item.svg}
                                            </svg>
                                            {item.title}
                                        </span>
                                    ))
                                }
                            </div>

                            <div className="my-2 px-6 py-6 lg:pb-0 pb-20 bg-[#F6F9FB] grid lg:grid-cols-2 lg:space-y-3 space-y-6 shadow-xl text-black shadow-white rounded-md">
                                {
                                    resources2.map((item) => (
                                        <span
                                            key={item.id}
                                            className="flex items-center gap-2 font-[550] text-[#0a2540] opacity-90 text-[14px] capitalize"
                                            onMouseEnter={() => setIsIconHoverd(item.id)}
                                            onMouseLeave={() => setIsIconHoverd(null)}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${isIconHoverd === item.id ? "fill-[#0a2540]" : "fill-[#88add2]"} `}>
                                                {item.svg}
                                            </svg>
                                            {item.title}
                                        </span>
                                    ))
                                }
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
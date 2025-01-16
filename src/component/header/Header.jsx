import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
// import ResponsiveHeader from './ResponsiveHeader';
import { Developers, Products, Resources, Solutions } from './SubMenu';
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { BsArrowRightShort } from "react-icons/bs";
// import { Developers, Products, Resources } from './SubMenu';
// import { Solutions } from './SubMenu';

function Header() {
    const [hovered, setHovered] = useState({ signIn: false, contactSales: false });
    const [isOpen, setIsOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSubDrawerOpen, setIsSubDrawerOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(false);
    // const [hovered, setHovered] = useState({ signIn: false, contactSales: false });


    const handleMouseEnter = (e) => {
        e.target.classList.add('text-gray-400');
    };

    const handleMouseLeave = (e) => {
        e.target.classList.remove('text-gray-400');
    };

    const [content, setContent] = useState("main"); // Track content type

    // Function to switch between content
    const changeContent = (newContent) => {
        setContent(newContent);
        console.log(newContent);
    };

    const goBack = () => {
        setContent("main");
    };

    useEffect(() => {
        if (isDrawerOpen) {
            // Hide the scrollbar
            document.body.style.overflow = "hidden";
        } else {
            // Show the scrollbar again
            document.body.style.overflow = "auto";
        }

        // Cleanup the effect when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const menuLink = [
        { key: 'Products', label: 'Products', tab: <MdKeyboardArrowRight /> },
        { key: 'Solutions', label: 'Solutions', tab: <MdKeyboardArrowRight /> },
        { key: 'Developers', label: 'Developers', tab: <MdKeyboardArrowRight /> },
        { key: 'Resources', label: 'Resources', tab: <MdKeyboardArrowRight /> },
        { key: 'Contact_sales', label: 'Contact sales' },
        { key: 'Pricing', label: 'Pricing' },
    ];


    return (
        <>
            <header className='w-full h-14 mt-2 z-50 '>
                <nav className='px-2 md:px-4 xl:px-24 2xl:px-[230px] 3xl:flex justify-center xl:w-full'>
                    <div className={`lg:mt-0 md:pt-2 px-3 3xl:px-0 flex justify-between 3xl:w-full 3xl:max-w-[1100px] items-center font-bold ${isOpen} ? mt-8 md:mt-4 : mt-3 md:mt-2`}>
                        {/* right side */}
                        <div className='flex items-center justify-center space-x-6'>
                            {/* Logo */}
                            <h1 className="SiteHeader__logo text-white">
                                <Link to="/"
                                    className="SiteHeader__logoLink hover:opacity-50 duration-300"
                                    data-js-controller="AnalyticsButton"
                                    data-analytics-category="Navigation"
                                    data-analytics-action="Clicked"
                                    data-analytics-label="Stripe Logo"
                                    data-testid="header-stripe-logo"
                                >
                                    <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" className="UserLogo variant-- ">
                                        <title>Stripe logo</title>
                                        <path fill="white" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z " fill-rule="evenodd" />
                                    </svg>
                                </Link>
                            </h1>

                            {/* nav links */}
                            <div className='hidden lg:block'>
                                <nav>
                                    <ul className='flex items-center justify-center font-semibold'>
                                        <li className='relative px-5 hover:opacity-100 group cursor-pointer'>
                                            <button className='text-white group-hover:opacity-50 text-[15px]'>Products</button>
                                            <div className='absolute top-0 left-[-6.5rem] transition group-hover:translate-y-5 translate-y-0
                                            md:opacity-0 invisible md:group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[950px] transform'>
                                                <Products />
                                            </div>
                                        </li>
                                        <li className='relative px-5 hover:opacity-100 group cursor-pointer'>
                                            <button className='text-white group-hover:opacity-50 text-[15px]'>Solutoins</button>
                                            <div className='absolute top-0 left-[-3.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[600px] transform'>
                                                <Solutions />
                                            </div>
                                        </li>
                                        <li className='relative px-5 hover:opacity-100 group cursor-pointer'>
                                            <button className='text-white group-hover:opacity-50 text-[15px]'>Developers</button>
                                            <div className='absolute top-0 left-[-7.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[550px] transform'>

                                                <Developers />
                                            </div>
                                        </li>
                                        <li className='relative px-5 hover:opacity-100 group cursor-pointer'>
                                            <button className='text-white group-hover:opacity-50 text-[15px]'>Resources</button>
                                            <div className='absolute top-0 left-[-7.5rem] transition group-hover:translate-y-5 translate-y-0 
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out
                                            group-hover:transform z-50 min-w-[500px] transform'>

                                            <Resources />
                                            </div>
                                        </li>
                                        <li className='relative px-5 hover:opacity-50'>
                                            <Link to={'/'} className=' text-white text-[15px]'>Price</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* left side */}
                        <div className='lg:flex space-y-2 space-x-2 items-center hidden 3xl:ml-24'>
                            {/* Sign in */}
                            <div
                                className='flex items-center pt-1 font-bold first-letter:uppercase transform text-[15px] hover:opacity-50 text-white'
                                onMouseEnter={() => setHovered({ ...hovered, signIn: true })}
                                onMouseLeave={() => setHovered({ ...hovered, signIn: false })}
                            >
                                Sign in
                                <span className=' text-lg font-extrabold transition duration-500'>{hovered.signIn ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}</span>
                            </div>

                            {/* Contact sales */}
                            <div
                                className='flex items-center font-normal transform bg-white rounded-full py-1.5 px-4 gap-1'
                                onMouseEnter={() => setHovered({ ...hovered, contactSales: true })}
                                onMouseLeave={() => setHovered({ ...hovered, contactSales: false })}
                            >
                                <span className='font-medium text-[15px] bg-gradient-to-r from-[#FFBD22] to-[#A13FBC] bg-clip-text text-transparent'>Contact sales</span>
                                <span className='pt-[2px] font-bold transition duration-500'>{hovered.contactSales ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}</span>
                            </div>
                        </div>


                        <div className='lg:hidden flex justify-center items-center font-bold text-2xl' onClick={() => setIsDrawerOpen(true)}>
                            <ion-icon name={'menu'}></ion-icon>
                        </div>

                    </div>


                    {isDrawerOpen && (
                        <div
                            className={`fixed lg:hidden top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                                } bg-white w-full`}
                            aria-labelledby="drawer-label"
                        >
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h5
                                    onClick={content !== "main" ? goBack : undefined}
                                    id="drawer-label"
                                    className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
                                >
                                    {content === 'main' ? (<svg className=' fill-[#635bff]' viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><title>Stripe logo</title><path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill="#635bff" fill-rule="evenodd"></path></svg>) : "Back"}
                                </h5>
                                {/* Close Button */}
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setIsDrawerOpen(false)}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close menu</span>
                                </button>
                            </div>

                            {content === "main" && (
                                <ul className="text-left pl-1 cursor-pointer w-full pt-6 space-y-8 text-[#3F4B66]">
                                    {menuLink.map((item, index) => (
                                        <li
                                            key={index} // Using index as the key (make sure `item.index` is not undefined)
                                            className="text-lg font-bold flex items-center justify-between"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => changeContent(item.label)} // Pass unique data to changeContent
                                        >
                                            {item.label}
                                            <span className="text-3xl">{item.tab}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}


                            {
                                content === "Products" && (<Products />)
                            }

                            {
                                content === "Solutions" && (<Solutions />)
                            }

                            {
                                content === "Developers" && (<Developers />)
                            }

                            {
                                content === "Resources" && (<Resources />)
                            }


                            <div className="fixed bottom-[-4px] left-0 right-0 flex justify-center w-full z-50 bg-white mb-5">
                                <div
                                    onMouseEnter={() => setHovered({ ...hovered, signIn: true })}
                                    onMouseLeave={() => setHovered({ ...hovered, signIn: false })}
                                    className="flex items-center justify-center gap-1 bg-[#635BFF] text-white font-semibold rounded-full px-4 py-1.5 tracking-tighter hover:bg-[#0a2540]"
                                >
                                    Sign in
                                    <span className="pt-1 text-lg font-extrabold">
                                        {hovered.signIn ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}



                </nav>
            </header>
            {/* <ResponsiveHeader isOpen={isOpen} /> */}

        </>
    );
}

export default Header;

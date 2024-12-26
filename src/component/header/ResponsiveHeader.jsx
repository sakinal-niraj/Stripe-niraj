import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { Developers, Products, Resources } from './SubMenu';
import { Solutions } from './SubMenu';

function ResponsiveHeader({ isOpen }) {
    const [hovered, setHovered] = useState({ signIn: false, contactSales: false });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null);

    const handleMouseEnter = (e) => {
        e.target.classList.add('text-gray-400');
    };

    const handleMouseLeave = (e) => {
        e.target.classList.remove('text-gray-400');
    };

    const handleDrawerToggle = (content) => {
        setIsDrawerOpen(!isDrawerOpen);
        setDrawerContent(content); // Set the content to be shown in the drawer
    };

    const menuLink = [
        { key: 'Products', label: 'Products', tab: <MdKeyboardArrowRight /> },
        { key: 'Solutions', label: 'Solutions', tab: <MdKeyboardArrowRight /> },
        { key: 'Developers', label: 'Developers', tab: <MdKeyboardArrowRight /> },
        { key: 'Resources', label: 'Resources', tab: <MdKeyboardArrowRight /> },
        { key: 'Contact_sales', label: 'Contact sales' },
        { key: 'Pricing', label: 'Pricing' },
    ];

    const handleBack = () => {
        setIsDrawerOpen(false);
        setDrawerContent(null); // Reset the drawer content when going back
    };

    return (
        <>
            {isOpen && (
                <div className="lg:hidden absolute top-12 left-0 w-full h-[93vh] bg-white z-20 shadow-lg">
                    <div className="flex py-7 flex-col">
                        <ul className="text-left pl-5 cursor-pointer w-full pt-6 space-y-8 text-[#3F4B66]">
                            {menuLink.map((item, index) => (
                                <li
                                    key={item.key}
                                    className="text-lg font-bold flex items-center justify-between pr-4"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => index < 4 ? handleDrawerToggle(item.key) : undefined}
                                >
                                    {item.label}
                                    <span className="text-3xl ">{item.tab}</span>
                                </li>
                            ))}
                        </ul>

                        {isDrawerOpen && (
                            <div className="w-full fixed top-0 left-0 h-[90vh] p-4 overflow-y-auto transition-transform bg-white z-40">
                                <h5
                                    onClick={handleBack}
                                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 cursor-pointer"
                                >
                                    Back
                                </h5>

                                <div className="w-full">
                                    {drawerContent === 'Products' && <Products />}
                                    {drawerContent === 'Solutions' && <Solutions />}
                                    {drawerContent === 'Developers' && <Developers />}
                                    {drawerContent === 'Resources' && <Resources />}
                                </div>
                            </div>
                        )}

                        <div className="absolute bottom-0 flex-1 w-full flex justify-center z-50 bg-white mb-5">
                            <div
                                onMouseEnter={() => setHovered({ ...hovered, signIn: true })}
                                onMouseLeave={() => setHovered({ ...hovered, signIn: false })}
                                className="tracking-tighter hover:bg-[#0a2540] gap-1 bg-[#635BFF] font-semibold text-white rounded-full flex items-center justify-center pl-4 pr-2 py-1 pb-1.5"
                            >
                                Sign in
                                <span className="pt-1 text-lg font-extrabold">
                                    {hovered.signIn ? <BsArrowRightShort /> : <MdKeyboardArrowRight />}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ResponsiveHeader;

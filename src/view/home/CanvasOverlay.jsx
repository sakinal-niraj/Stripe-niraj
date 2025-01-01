import React from "react";

const CanvasOverlay = () => {
    return (
        <section className='py-32 px-5 md:px-10 xl:px-24 2xl:px-56 pt-16 w-full space-y-12 mt-10'>
            {/* Content */}

            <div className="relative w-full h-screen bg-gray-200">
                {/* Background Canvas */}
                <div className="absolute inset-0 bg-blue-500 z-0">
                    {/* Canvas or content */}
                    <p className="text-white text-xl text-center pt-10">Canvas Content</p>
                </div>

                {/* Overlay using Tailwind `after` */}
                <div className="relative z-10 after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50 after:pointer-events-none">
                    <p className="text-white text-2xl text-center pt-10">
                        Overlay Content on Top
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CanvasOverlay;

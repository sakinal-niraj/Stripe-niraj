import React from 'react';
import earth from '../../assets/images/earth.png';

function GlobeScale() {
  return (
    <>
      <section
        className="bg-[#0A2540] relative z-20
        before:content-[''] before:block before:w-full before:h-28 globe_scale"
        // style={{
        //   clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0% 100%)',
        //   WebkitClipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0% 100%)',
        // }}
      >
        <div className="py-10 px-5 md:px-10 xl:px-24 2xl:px-56 pt-16 w-full text-white z-10 flex justify-center relative 3xl:static">
          <div className='w-full 3xl:max-w-[1050px] 3xl:relative static'>
            {/* Content */}
            <div className='relative z-50 md:py-10 space-y-20'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
                <div className='space-y-6 pl-4'>
                  <h1 className='text-[#00D4FF] text-[18px] font-semibold'>Global scale</h1>

                  <p className='text-[34px] text-white md:pr-32 font-bold'>The backbone for global commerce</p>

                  <p className='text-[#adbdccde] text-[18px] md:pr-[60px] font-[500]'>Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                  </p>
                </div>
              </div>


              <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                {/* col1 */}
                <div className='space-y-3 '>
                  <div className='relative flex gap-4'>
                    <span className='block top-[3px] pt-1 left-0 w-[1px] h-[22px] bg-[#00d4ff] absolute '></span>
                    <h1 className='text-2xl font-bold tracking-tighter pl-4'>
                      500M+
                    </h1>
                  </div>
                  <p className='pl-4 text-[#ADBDCC] text-[15px] font-semibold '>API requests per day, peaking at 13,000 requests a second.</p>
                </div>


                {/* col2 */}
                <div className='space-y-3'>
                  <div className='relative flex gap-4'>
                    <span className='block top-[3px] pt-1 left-0 w-[0.51px] h-[22px] bg-[#00d4ff] absolute '></span>
                    <h1 className='pl-4 text-2xl font-bold tracking-tighter'>99.999%</h1>
                  </div>
                  <p className='pl-4 text-[#ADBDCC] text-[15px] font-semibold '>historical uptime for <span className='text-[#02bcf5]'>Stripe services</span>.</p>
                </div>


                {/* col3 */}
                <div className='space-y-3'>
                  <div className='relative flex gap-4'>
                    <span className='block top-[3px] pt-1 left-0 w-[1px] h-[22px] bg-[#00d4ff] absolute '></span>
                    <h1 className='pl-4 text-2xl font-bold tracking-tighter'>47+</h1>
                  </div>
                  <p className='pl-4 text-[#ADBDCC] text-[15px] font-semibold '>countries with local acquiring.</p>
                </div>


                {/* col4 */}
                <div className='space-y-3'>
                  <div className='relative flex gap-4'>
                    <span className='block top-[3px] pt-1 left-0 w-[1px] h-[22px] bg-[#00d4ff] absolute '></span>
                    <h1 className='pl-4 text-2xl font-bold tracking-tighter'>135+</h1>
                  </div>
                  <p className='pl-4 text-[#ADBDCC] text-[15px] font-semibold pr-10'>currencies and payment methods supported.</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="absolute -bottom-3 md:top-0 right-0 z-40 h-[500px] w-auto md:h-auto">
              <img src={earth} className=" md:w-auto md:h-auto object-cover" alt="Earth" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default GlobeScale

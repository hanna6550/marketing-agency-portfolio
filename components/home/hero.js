import React from 'react'
import Image from 'next/image';
import aboutImg from "@/public/images/about.jpg"

function Hero() {
  return (
    <div className='md:flex items-center max-w-screen-lg mx-auto gap-15 overflow-hidden p-10  h-screen'>
      <div className='md:w-1/2'>
        <Image src={aboutImg} alt='about' className='h-[25rem] w-full' />
      </div>
      <div className='md:w-1/2'>
        <div className='mb-5 md:mt-0 mt-5'>
          <h1 className='text-5xl md:text-8xl font-bold text-center md:text-start bg-gradient-to-r from-orange-900 via-gray-200 to-gray-100 inline-block text-transparent bg-clip-text'>
            About US
          </h1>
        </div>
        <div className='text-2xl text-gray-400'>
          <span className='text-5xl text-orange-900'>IKIM </span>Tech Co. which was
          established in 2000, will commemorate its x year anniversary on
          March 8th, the day it formally began operations. Any business needs to
          have meaning and purpose, and ours is essentially based on a profound
          philosophy that satisfies both.
        </div>
        <a href='#' className='text-white bg-amber-900 md:text-2xl text-lg md:py-4 py-2 mt-5 md:mx-20 mx-16 flex justify-center items-center'>
                  Explore More
        </a>
      </div>
    </div>
  );
};


export default Hero
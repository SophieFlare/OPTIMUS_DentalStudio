"use client";

import React, { useRef, useEffect } from 'react';
import Lenis from 'lenis'
import "../media.css";

const Iphone = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });


  })

  return (
    <main>
      <section className="relative flex flex-col md:flex-row h-screen w-full px-10 py-10">
        {/* Video Background */}
        <div className='absolute top-0 left-0 w-full h-full z-0'>
        <div className='absolute top-0 left-0 w-full h-full z-0'>
            <img src="/videos/Twist.gif" alt="twist" className="w-full h-full object-cover" />
          </div>
         
        </div>

        {/* Left side - Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-[1]">
          <div className="text-left max-w-md">
            <h1 className="text-4xl font-bold">OPTIMUS MEDIA</h1>
            <p className="mt-10 text-lg">Learn more about Optimus Dental Studio.</p>
          </div>
        </div>

        {/* Right side - iPhone */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="iphone">
            <div className="iphone-frame">
              <div className="dynamic-island"></div>
              <div className="iphone-screen">
              <video
  autoPlay
  muted
  playsInline
  loop
  preload="auto"
  className="w-[calc(100%+200px)] h-full object-cover "
>
  <source src="/videos/22.mp4" type="video/mp4" />
</video>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Iphone
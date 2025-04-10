"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NeonButton from "../../../../components/NeonButton";

const HeroContent = () => {
  return (
    <main className="z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#42f8d48b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#3bc39a] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] color-white">
            Optimus Dental Studio - Contact Us
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Contact Us✦
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-cyan-300">
              {" "}
              Optimus Dental Studio{" "}
            </span>
           
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          At Optimus Dental Studio, we blend advanced technology with expert care to deliver exceptional dental services. From routine check-ups to cosmetic and emergency treatments, we’re here to keep your smile healthy and bright. Contact us today and see why Optimus is the trusted choice.


        </motion.p>


        <NeonButton 
        variants={slideInFromLeft(1)} 
        className="mt-[10px] w-[120px] py-1 px-2 text-sm text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-green-400 via-teal-400 to-cyan-500 hover:brightness-110 transition duration-300"
      >
        Reach Out to Optimus!
      </NeonButton>
      </div>
 
 
      <motion.div
  variants={slideInFromRight(0.8)}
  className="w-full h-full flex justify-center items-center relative"
>
  {/* Main Image */}
  <div className="relative w-[650px] h-[650px]">
    <Image
      src="/contact-public/mainIconsdark.svg"
      alt="Optimus Dental Studio"
      fill
      className="object-contain"
    />

    {/* Monster Image Positioned Bottom Right */}
    <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
      <Image
        src="/images/monster1.png"
        alt="Optimus Monster"
        height={250}
        width={250}
      />
    </div>
  </div>
</motion.div>

    </motion.div>
    </main>
  );
};

export default HeroContent;



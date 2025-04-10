"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full">
      {/* Radial glow effect */}
<div className="absolute inset-0 z-[3] pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_center,rgba(140,255,255,0.4)_10%,rgba(14,5,16,0.6)_60%,transparent_90%)]" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
</div>

      {/* Video with Color Overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/contact-public/encryption.webm/"
        />
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgba(140,255,255,0.4)_15%,rgba(14,5,16,0.6)_80%,transparent)]" />
      </div>

      {/* Top Motion Text */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
          </span>
        </motion.div>
      </div>

      {/* Lock + Welcome Box */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/contact-public/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/contact-public/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#42f8da8b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">OPTIMUS</h1>
        </div>
      </div>
    </div>
  );
};

export default Encryption;


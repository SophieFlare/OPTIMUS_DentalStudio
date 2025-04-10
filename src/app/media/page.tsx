"use client";

import React, { useRef, useEffect } from 'react';
import { Header } from "../../sections/Header";
import Lenis from 'lenis'
import Iphone from "./main/Iphone";
import Sections from "./main/Sections"

const Page = () => {
  return (
    <>
      <Header />
      <Iphone />
      <Sections />
    </>
  );
};

export default Page;

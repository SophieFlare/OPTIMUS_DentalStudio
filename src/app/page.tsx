"use client"

import { useEffect } from 'react';
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker"
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer"
import Lenis from 'lenis'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });


  })
     
  return <>
    <Header />
    <Hero />
    <LogoTicker />
    <Features />
    <Testimonials />
    <CallToAction />
    <Footer />
  </>;
}

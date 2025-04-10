"use client";

import Encryption from "./components/main/Encryption";
import Hero from "./components/main/Hero";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect } from "react";
import ContactForm from "./components/contact-form-section/components2/contact-form/ContactForm"

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <main className="h-full w-full relative z-[2]"> {/* Add z-index here for the main content */}
    {/* Main content */}
    <div className="flex flex-col relative z-[2]"> {/* Keep z-[2] for stacking */}
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
      <ContactForm />
    </div>
  </main>
  );
}

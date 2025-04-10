import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full h-screen relative overflow-hidden"
      style={{ transform: "scale(1)" }}
    >
      <SkillText />



      {/* Full-width, full-height video background */}
      <div className="absolute inset-0 w-full h-full z-[-10] opacity-30">
        <video
          className="w-full h-full object-cover absolute top-0 left-0"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/contact-public/cards-video.webm"
          style={{
            objectFit: "cover", // Ensures the video covers the entire area
            objectPosition: "center", // Keeps the video centered
            filter:
              "hue-rotate(280deg) saturate(150%) brightness(0.95) contrast(155%)",
          }}
        />
      </div>

      {/* Glowing Radial Overlay (matches OPTIMUS aesthetic) */}
      <div className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen bg-[radial-gradient(75%_75%_at_center,rgba(140,255,255,0.4)_15%,rgba(14,5,16,0.6)_80%,transparent)]" />
    </section>
  );
};

export default Skills;

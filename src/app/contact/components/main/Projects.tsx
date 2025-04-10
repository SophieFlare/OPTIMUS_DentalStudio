import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  h-[93.5vh]" // Full-screen height
      id="projects"
    >


      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 py-50 mt-[120px]">
        OPTIMUS DENTAL STUDIO
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center items-center z-[100]"> {/* Full height and centered */}
        <ProjectCard
          src="/videos/capcut.mp4"
          title="Modern"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/videos/capcut.mp4"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/videos/capcut.mp4"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;

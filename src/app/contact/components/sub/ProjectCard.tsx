import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative w-[550px] h-[500px] overflow-hidden rounded-lg shadow-lg border border-[#66e1bc] flex flex-col">
      <video
        src={src}
        alt={title}
        width="1000"
        height="1000"
        className="w-full object-contain"
        autoPlay
        loop
        muted 
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import Button from "./Button";

export default function MiniProjectCard({ project }) {
  const { name, website, preview } = project;
  return (
    <div className=" rounded-md overflow-hidden p-1 bg-[#2f3744] relative group">
      <img
        src={preview}
        alt={name}
        className="rounded-md group-hover:opacity-10"
      />
      <div className=" flex items-center justify-center absolute top-0 right-0 w-full h-full invisible group-hover:visible">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Button content="Live Demo" />
        </a>
      </div>
    </div>
  );
}

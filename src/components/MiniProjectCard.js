import React from "react";
import { useWasViewed } from "../hooks/useWasViewed";
import Button from "./Button";

export default function MiniProjectCard({ project }) {
  const { name, website, preview } = project;
  const DOMAIN = "https://projects.anhtuan.info/projects/";

  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-slide-in-bottom" : "";
  return (
    <div
      className={` rounded-md overflow-hidden p-1 bg-[#2f3744] relative group ${animation}`}
      ref={setRef}
    >
      <img
        src={preview !== "" ? DOMAIN + preview : null}
        alt={name}
        className="rounded-md group-hover:opacity-10"
      />
      <div className=" flex items-center justify-center absolute top-0 right-0 w-full h-full invisible group-hover:visible">
        <a href={DOMAIN + website} target="_blank" rel="noopener noreferrer">
          <Button content="Live Demo" />
        </a>
      </div>
    </div>
  );
}

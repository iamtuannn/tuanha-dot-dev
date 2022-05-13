import React from "react";
import Heading from "../components/Heading";
import MainProjectCard from "../components/MainProjectCard";
import MiniProjectCard from "../components/MiniProjectCard";
import { featured, miniProjects } from "../utils/config";

export default function MainProjects(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="Featured" />
        {featured.map((project) => (
          <MainProjectCard project={project} key={project.id} />
        ))}
        <Heading text="Mini Projects" />
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2">
          {miniProjects.map((project) => (
            <MiniProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

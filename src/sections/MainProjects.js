import React from "react";
import Heading from "../components/Heading";
import MainProjectCard from "../components/MainProjectCard";
import { mainProjects } from "../utils/config";

export default function MainProjects(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="Personal Projects" />
        {mainProjects.map(project => <MainProjectCard project={project} key={project.id}/>)}
      </div>
    </div>
  );
}

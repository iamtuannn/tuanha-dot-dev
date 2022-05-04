import React from "react";
import Heading from "../components/Heading";
import MainProjectCard from "../components/MainProjectCard";
import { featured } from "../utils/config";

export default function MainProjects(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="Featured" />
        {featured.map(project => <MainProjectCard project={project} key={project.id}/>)}
      </div>
    </div>
  );
}

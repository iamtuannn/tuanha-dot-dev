import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import MainProjectCard from "../components/MainProjectCard";
import MiniProjectCard from "../components/MiniProjectCard";
import { featured } from "../utils/config";

export default function MainProjects(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="Featured" />
        {featured.map((project) => (
          <MainProjectCard project={project} key={project.id} />
        ))}
        <MiniProjects />
      </div>
    </div>
  );
}

const MiniProjects = () => {
  const [projects, setProjects] = useState([
    {
      _id: "",
      name: "",
      website: "",
      preview: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        axios
          .get("https://projects.anhtuan.info/api/mini-projects")
          .then((res) => res.data.projects.reverse())
          .then((res) => setProjects(res));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {projects[0].name === "" ? null : (
        <>
          <Heading text="Mini Projects" />
          <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <MiniProjectCard project={project} key={project._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

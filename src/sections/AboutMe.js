import React, { useState } from "react";
import Heading from "../components/Heading";
import cybersoft from "../assets/certification-cybersoft.jpg";
import { facts } from "../utils/config";
import Highlight from "../components/Highlight";

export default function AboutMe(props) {
  const [blur, setBlur] = useState(true);

  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="About Me" />
        <div className=" flex w-full bg-box rounded-2xl shadow-primary overflow-hidden">
          <div
            className=" hidden xl:block min-w-[300px] bg-cover bg-no-repeat bg-center cursor-pointer min-h-[400px] overflow-hidden duration-[2s] ease-in bg-cybersoft"
            style={{
              backgroundImage: `url(${cybersoft})`,
              filter: blur ? "blur(8px)" : "none",
            }}
            onMouseEnter={() => setBlur(false)}
            onMouseLeave={() => setBlur(true)}
          ></div>
          <div className=" p-4 md:p-8">
            {facts.map((fact, i) => (
              <Highlight key={i} highlight={fact} />
            ))}
            <Highlight isLink />
          </div>
        </div>
      </div>
    </div>
  );
}

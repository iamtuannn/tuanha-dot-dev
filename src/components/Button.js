import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export default function Button({ type, text }) {
  const iconClassName =
    " p-2 text-2xl duration-500 ease-in-out hover:scale-125 mx-auto";

  const checkType = () => {
    if (type === "View Source") {
      return <FaGithub className={iconClassName} title={type} />;
    }

    if (type === "Live Demo") {
      return <FaEye className={iconClassName} title={type} />;
    }

    return (
      <p className="py-1 text-base lg:text-lg text-center capitalize">{text}</p>
    );
  };
  
  return (
    <div className=" cursor-pointer min-w-[80px] bg-transparent border border-slate-500 rounded-md text-lg">
      {checkType()}
    </div>
  );
}

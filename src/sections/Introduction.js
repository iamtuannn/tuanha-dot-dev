import React from "react";
import Typical from "react-typical";
import tuanha from "../assets/tuanha.jpg";
import wave from "../assets/footer.png";
import SocialMedia from "../components/SocialMedia";
import ScrollUp from "../components/ScrollUp";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import { useWasViewed } from "../hooks/useWasViewed";

export default function Introduction(props) {
  const { ref, inView } = useInView();
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-slide-in-bottom" : "null";

  return (
    <div className=" bg-home">
      <Navbar />
      <div
        className=" p-auto flex flex-col justify-center items-center"
        ref={ref}
        id={props.id || ""}
      >
        <div className=" flex flex-col-reverse lg:grid lg:gap-12 lg:grid-cols-[1fr_200px] 2xl:gap-20 2xl:grid-cols-[1fr_300px] max-w-[1024px] w-[80%] items-center">
          <div className=" text-center">
            <SocialMedia />
            <div ref={setRef} className={animation}>
              <h3 className=" my-4 text-xl lg:text-2xl 2xl:text-3xl">
                Hi ! My name's{" "}
                <span className=" text-pastel-pink font-khand font-semibold">
                  Anh Tuan
                </span>
              </h3>
              <div className=" text-xl lg:text-2xl 2xl:text-3xl">
                <Typical
                  steps={[
                    "I'm a Web Developer",
                    2000,
                    "Fresher ReactJS Developer",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </div>
              <p>
                I enjoy learning everything about Front-end and Back-end
                technologies
              </p>
            </div>
          </div>
          <div className=" rounded-full shadow-avatar flex-center h-[200px] w-[200px] 2xl:w-[300px] 2xl:h-[300px] mb-4 lg:mb-0">
            <img
              src={tuanha}
              alt="Anh Tuan"
              className=" rounded-full w-[90%] h-[90%] transition duration-1000 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <img src={wave} alt="wave" className=" h-[130px] w-screen align-middle" />
      <ScrollUp visible={!inView} />
    </div>
  );
}

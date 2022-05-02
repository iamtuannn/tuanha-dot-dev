import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import svgHTML from "../assets/skills/html.svg";
import svgCSS from "../assets/skills/css.svg";
import svgJS from "../assets/skills/javascript.svg";
import svgReact from "../assets/skills/react.svg";
import svgNodejs from "../assets/skills/nodejs.svg";
import svgRedux from "../assets/skills/redux.svg";
import svgAntDesign from "../assets/skills/antd.svg";
import svgTailwind from "../assets/skills/tailwind.svg";
import svgStyledComponents from "../assets/skills/styled-components.svg";
import svgMongoDB from "../assets/skills/mongodb.svg";
import svgVercel from "../assets/skills/vercel.svg";
import svgHeroku from "../assets/skills/heroku.svg";

import nemoCinema from "../assets/mainProjects/nemo-cinema.jpg";
import nemoQuotes from "../assets/mainProjects/nemo-quotes.jpg";
import nemoAPIv1 from "../assets/mainProjects/nemo-api-v1.png";
import portfolio from "../assets/mainProjects/portfolio.jpg";

import Introduction from "../sections/Introduction";
import AboutMe from "../sections/AboutMe";
import MySkills from "../sections/MySkills";
import MainProjects from "../sections/MainProjects";

export const socialMediaIcons = [
  {
    name: "facebook",
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/tuan.hngf/",
    color: "#4267B2",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/tuan.hngf/",
    color: "#C13584",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/tuanhngf/",
    color: "#333333",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/tuanhngf/",
    color: "#0A66C2",
  },
];

export const facts = [
  "I'm a fresher front-end developer",
  "I'm working on web development skills like JavaScript, ReactJS, NodeJS etc.",
  "I'm learning everything about Frontend and Backend skills",
  "Future Goals: Learn more skills",
  "Future Goals: Learning to become a full-stack developer",
];

export const abilities = [
  "Good working experience in using JavaScript (ES6), HTML5, CSS3.",
  "Experience with ReactJS, Redux and Router.",
  "Responsive for a better user experience",
  "Friendly with UI library/framework like: Bootstrap, Ant Design, Tailwind CSS...",
  "Have experience in Git/GitHub.",
  "Good logical thinking",
  "Willing to learn and improve.",
];

export const skills = [
  {
    name: "HTML",
    icon: svgHTML,
  },
  {
    name: "CSS",
    icon: svgCSS,
  },
  {
    name: "Javascript",
    icon: svgJS,
  },
  {
    name: "React JS",
    icon: svgReact,
  },
  {
    name: "Redux",
    icon: svgRedux,
  },
  {
    name: "Node JS",
    icon: svgNodejs,
  },

  {
    name: "Styled Components",
    icon: svgStyledComponents,
  },
  {
    name: "Ant Design",
    icon: svgAntDesign,
  },
  {
    name: "Tailwind CSS",
    icon: svgTailwind,
  },
  {
    name: "Mongo DB",
    icon: svgMongoDB,
  },
  {
    name: "Heroku",
    icon: svgHeroku,
  },
  {
    name: "Vercel",
    icon: svgVercel,
  },
];

export const mainProjects = [
  {
    id: 1,
    name: "Nemo Cinema",
    description: "Online Ticket Booking For Movies.",
    gitRepo: "https://github.com/tuanhngf/nemo-cinema",
    website: "https://cinema.anhtuan.info/",
    preview: nemoCinema,
    completed: true,
    background: "rgba(70, 55, 51, 0.25)",
    technologies: [
      "ReactJS / Redux / React Router",
      "Ant Design / Styled Components",
      "Vercel",
    ],
  },
  {
    id: 2,
    name: "Nemo Quotes",
    description: "A randomly generated quote every 15 seconds.",
    gitRepo: "https://github.com/tuanhngf/nemo-quotes",
    website: "https://quotes.anhtuan.info/",
    preview: nemoQuotes,
    completed: true,
    background: "rgba(209, 176, 208, 0.25)",
    technologies: [
      "ReactJS / Redux / React Router",
      "Ant Design / Styled Components",
      "Vercel",
    ],
  },
  {
    id: 3,
    name: "Nemo API v1.0 - Basic",
    description: "API use for repository Nemo Cinema and Nemo Quotes.",
    gitRepo: "https://github.com/tuanhngf/nemo-api-v1",
    website: null,
    preview: nemoAPIv1,
    completed: true,
    background: "rgba(12, 116, 117, 0.25)",
    technologies: ["Express JS", "Mongoose", "Heroku"],
  },
  {
    id: 4,
    name: "My Portfolio",
    description: "Some information about me and mainProjects was built by me",
    gitRepo: "https://github.com/tuanhngf/anhtuan-dot-info",
    website: "https://www.anhtuan.info/",
    preview: portfolio,
    completed: true,
    background: "rgba(102, 84, 128, 0.25)",
    technologies: ["ReactJS", "Tailwind CSS", "Vercel"],
  },
];

export const displays = [
  {
    id: "home",
    name: "Home",
    component: Introduction,
  },
  {
    id: "about-me",
    name: "About Me",
    component: AboutMe,
  },
  {
    id: "skills",
    name: "Skills",
    component: MySkills,
  },
  {
    id: "main-projects",
    name: "Projects",
    component: MainProjects,
  },
];

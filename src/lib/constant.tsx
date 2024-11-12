import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";

export const technology: { tech: string; icons?: any; iconColor: string }[] = [
  {
    tech: "React",
    icons: <FaReact color="#61DAFB"/>,
    iconColor: "#61DAFB",
  },
  {
    tech: "Next js",
    icons: <TbBrandNextjs color="#FFFFFF"/>,
    iconColor: "#FFFFFF",
  },
  {
    tech: "Flutter",
    icons: <TbBrandFlutter color="#02569B" />,
    iconColor: "#02569B",
  },
  {
    tech: "Node js",
    icons: <FaNodeJs color="#339933" />,
    iconColor: "#339933",
  },
  {
    tech: "Express Js",
    icons: <SiExpress color="#FFFFFF"/>,
    iconColor: "#FFFFFF",
  },
  {
    tech: "MongoDB",
    icons: <DiMongodb color="#47A248"/>,
    iconColor: "#47A248",
  },
  {
    tech: "Java",
    icons: <FaJava color="#007396"/>,
    iconColor: "#007396",
  },
  {
    tech: "Spring boot",
    icons: <BiLogoSpringBoot color="#6DB33F"/>,
    iconColor: "#6DB33F",
  },
];


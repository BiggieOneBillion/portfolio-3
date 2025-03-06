import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
// import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
// import { FaJava } from "react-icons/fa6";
// import { BiLogoSpringBoot } from "react-icons/bi";
import { PiFramerLogo } from "react-icons/pi";
import { SiReactrouter } from "react-icons/si";
import { TbBrandSupabase } from "react-icons/tb";
import { FaStripeS } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";

type dataType = (
  | {
      imgUrl?: string;
      title: string;
      description: string;
      techStack: (
        | {
            tech: string;
            icon: JSX.Element;
          }
        | {
            tech: string;
            icon?: undefined;
          }
      )[];
      links: {
        github: string;
        website: string;
      };
    }
  | {
      title: string;
      description: string;
      techStack: (
        | {
            tech: string;
            icon: JSX.Element;
          }
        | {
            tech: string;
            icon?: undefined;
          }
      )[];
      links: {
        github: string;
        website: string;
      };
      imgUrl?: undefined;
    }
)[];

export const workData: dataType = [
  {
    imgUrl: "/movies2.png",
    title: "Movie App (React Js + External API)",
    description:
      "Shows recent movies plus movies from different genres, and their trailers",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        tech: "Framer Motion",
        icon: <PiFramerLogo />,
      },
      {
        tech: "react-router-dom",
        icon: <SiReactrouter />,
      },
      {
        tech: "react-icons",
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "Tanstack query",
      },
    ],
    links: {
      github: "https://github.com/ray-BADA-1994/movieTv",
      website: "https://movie-tv-kappa.vercel.app/",
    },
  },
  {
    imgUrl: "/ecommerce.png",
    title: "Ecommerce Store (React Js + External API)",
    description:
      "Ecommerce store for cloths and other items for sale, React Js is used for the Front-end and it communicates with an external api to get the products and also uses STRIPE to handle payment and SupaBase to handle users details..",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        tech: "Framer Motion",
        icon: <PiFramerLogo />,
      },
      {
        tech: "react-router-dom",
        icon: <SiReactrouter />,
      },
      {
        tech: "react-icons",
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "Supabase",
        icon: <TbBrandSupabase color="#3ECF8E" />,
      },
      {
        tech: "Stripe",
        icon: <FaStripeS color="#635BFF" />,
      },
      {
        tech: "Tanstack query",
      },
    ],
    links: {
      github: "https://github.com/ray-BADA-1994/raystore",
      website: "https://raystore-sandy.vercel.app/",
    },
  },
  {
    imgUrl: "/logistics1.png",
    title: "Logistics Car Hire (React Js + SuparBase)",
    description:
      "A website for hiring luxury vehicles. Where luxury car owners meet client that want to rent",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        tech: "Framer Motion",
        icon: <PiFramerLogo />,
      },
      {
        tech: "react-router-dom",
        icon: <SiReactrouter />,
      },
      {
        tech: "react-icons",
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "Supabase",
        icon: <TbBrandSupabase color="#3ECF8E" />,
      },
      {
        tech: "Tanstack query",
      },
    ],
    links: {
      github: "https://github.com/BiggieOneBillion/cia-luxury-logistics",
      website: "https://luxury-logistics.vercel.app",
    },
  },
  {
    imgUrl: "/weather-forcast.png",
    title: "Weather Forecast (React Js)",
    description:
      "This project is a weather forecast app that shows the weather for the next 5 days. It is built using react js with typescript no frameworks as it just a simple app",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        tech: "react-icons",
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "Tanstack query",
      },
    ],
    links: {
      github: "https://github.com/BiggieOneBillion/weather-app",
      website: "https://weather-app-chuks-projects-bfff9e26.vercel.app/",
    },
  },
];

export const utilities: dataType = [
  {
    imgUrl: "/student-study.png",
    title: "Student Study (Next Js + Tailwindcss + Shadcn UI)",
    description:
      "This project is a student study app that helps students to study more effectively. It is built using next js with typescript and tailwindcss, it uses AI to generate study guides and lessons.",
    techStack: [
      {
        tech: "Next Js",
        icon: <TbBrandNextjs color="#fff" />,
      },
      {
        tech: "react-hook-form",
        icon: <SiReacthookform color="#EC5990" />,
      },
      {
        tech: "zod",
        icon: <SiZod color="#3A7AFE" />,
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "shadcn ui",
        icon: <SiShadcnui />,
      },
    ],
    links: {
      github: "",
      website: "https://study-student-tool.vercel.app",
    },
  },
  {
    imgUrl: "/study-timer.png",
    title: "Study Timer (React Js + Headless UI)",
    description:
      "This project is a study timer to help improve concentration, i did it as a result of my need to focus while reading. It is built using react js with typescript no frameworks as it just a simple app",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
    ],
    links: {
      github: "https://github.com/BiggieOneBillion/study-timer",
      website: "",
    },
  },
  {
    imgUrl: "/react-template.png",
    title: "React Starter Template ( Nextjs )",
    description:
      "I built this project to help my students or anybody learning / using react to be able to start a new project quickly. It is built using nextjs with typescript and tailwindcss",
    techStack: [
      {
        tech: "Next Js",
        icon: <TbBrandNextjs color="#fff" />,
      },
      {
        tech: "react-hook-form",
        icon: <SiReacthookform color="#EC5990" />,
      },
      {
        tech: "zod",
        icon: <SiZod color="#3A7AFE" />,
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
    ],
    links: {
      github: "https://github.com/BiggieOneBillion/react-starter",
      website: "https://react-starter-f0c4.onrender.com",
    },
  },
  {
    imgUrl: "/resume-builder.png",
    title: "Resume Builder (Next Js)",
    description:
      "Want to build a resume but you don't want to spend hours on it? Well this is the app for you. It is a resume builder that helps you build a resume in no time. It is built using react js with typescript and tailwindcss",
    techStack: [
      {
        tech: "Next Js",
        icon: <TbBrandNextjs color="#fff" />,
      },
      {
        tech: "react-icons",
      },
    ],
    links: {
      github: "https://github.com/BiggieOneBillion/resume-builder",
      website: "https://resume-builder-zeta-eight.vercel.app/",
    },
  },
  // {
  //   imgUrl: "/market-list.png",
  //   title: "MarketList App (Next Js + MongoDB for saving data)",
  //   description:
  //     "As part of my goal of financial management, i found out that a large chunk of my money was going to shopping at my local groceries store, so i wanted to monitor my spending and what items i buy the most, so as i techie i decided to build a MarketList App that helps me do that. Still in Progress. This is V1, V2 would be out soon with more features",
  //   techStack: [
  //     {
  //       tech: "Next Js",
  //       icon: <TbBrandNextjs color="#fff" />,
  //     },
  //     {
  //       tech: "Framer Motion",
  //       icon: <PiFramerLogo />,
  //     },
  //     {
  //       tech: "shadcn ui",
  //       icon: <SiShadcnui />,
  //     },
  //     {
  //       tech: "MongoDB",
  //       icon: <DiMongodb />,
  //     },
  //     {
  //       tech: "axios",
  //       icon: <SiAxios color="#5A29E4" />,
  //     },
  //     {
  //       tech: "Tanstack query",
  //     },
  //   ],
  //   links: {
  //     github: "https://github.com/BiggieOneBillion/MarketListNextJs",
  //     website: "https://market-list-next-js.vercel.app",
  //   },
  // },
  {
    title: "Iregistration (React Js + Nest Js + MongoDB)",
    description:
      "I built this project to managing multiple events. A friend who happens to be  in the entertainment industry wanted to manage a couple of events he was organising, so he reached out and i decided to build a platform that would have him register the events and the event details and keep track of how many people have registered and generate a registeration links for the various event. This is V1 and i am still improving it as we go along ",
    techStack: [
      {
        tech: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        tech: "Nest js",
        icon: <SiNestjs color="#E0234E" />,
      },
      {
        tech: "react-hook-form",
        icon: <SiReacthookform color="#EC5990" />,
      },
      {
        tech: "zod",
        icon: <SiZod color="#3A7AFE" />,
      },
      {
        tech: "Framer Motion",
        icon: <PiFramerLogo />,
      },
      {
        tech: "Chakra ui",
        icon: <SiChakraui color="#319795" />,
      },
      {
        tech: "MongoDB",
        icon: <DiMongodb />,
      },
      {
        tech: "axios",
        icon: <SiAxios color="#5A29E4" />,
      },
      {
        tech: "Tanstack query",
      },
      {
        tech: "Zustand",
      },
    ],
    links: {
      github: "",
      website: "",
    },
  },
];

export const backend: dataType = [
  {
    imgUrl: "/bE.jpg",
    title: "Ecommerce Backend (NodeJs + ExpressJs)",
    description:
      "A Node / ExpressJs backend for an ecommerce website, I implemented user authentication and authorization using JWT and  MongoDB as database, I also used Cloudinary for the storing assets like images and implemented a global error management system to handle errors and exceptions.",
    techStack: [
      {
        tech: "Express Js",
        icon: <SiExpress color="#fff" />,
      },
      {
        tech: "Node Js",
        icon: <FaNodeJs color="#339933" />,
      },
      {
        tech: "MongoDB",
        icon: <DiMongodb />,
      },
      {
        tech: "Cloudinary",
        icon: <SiCloudinary color="#3448C5" />,
      },
    ],
    links: {
      github: "",
      website: "",
    },
  },
  {
    imgUrl: "/bE.jpg",
    title: "Iregistration Backend ( Nest Js + MongoDB)",
    description:
      "The Nest Js backend for the Iresgistartion wwebsite - built using nest js and mongodb as the database",
    techStack: [
      {
        tech: "Nest js",
        icon: <SiNestjs color="#E0234E" />,
      },
      {
        tech: "MongoDB",
        icon: <DiMongodb />,
      },
    ],
    links: {
      github: "",
      website: "",
    },
  },
];

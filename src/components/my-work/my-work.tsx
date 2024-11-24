// import React from "react";
// import { InfiniteMovingCards } from "../global/infinte-moving-cards";
// import { technology } from "../../lib/constant";

import { Link } from "react-router-dom";
import { DirectionAwareHoverCard } from "../global/card";
import { backend, utilities, workData } from "./data";
import TechStack from "./tech-stack";
import { v4 } from "uuid";
import { useState } from "react";
import { span } from "framer-motion/client";

const imageUrl =
  "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const categories = [
  "External Api Integration",
  "Utilities",
  "Backend Services",
];

const MyWork = () => {
  const [count, setCount] = useState(0);
  const dataArr = [workData, utilities, backend];
  return (
    <section className="min-h-screen h-full pt-[10rem] space-y-5 px-3 md:px-0">
      <nav className="max-w-4xl mx-auto">
        <ul className="flex items-center flex-wrap gap-4">
          {categories.map((cat, i) => (
            <li
              onClick={() => setCount(i)}
              className={` ${
                i === count
                  ? "text-white bg-zinc-950"
                  : "text-zinc-950 bg-white"
              } font-medium px-3 py-1 rounded-lg text-sm border border-zinc-300 cursor-pointer`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>
      <div className="max-w-4xl mx-auto flex flex-col gap-10 overflow-hidden">
        {/* loop through the project data */}
        {dataArr[count].map((datum) => (
          <article
            className="flex flex-col items-center md:flex-row md:items-start gap-10 px-3 md:px-0 bordery"
            key={v4()}
          >
            {/* image container */}
            <DirectionAwareHoverCard
              imageUrl={datum.imgUrl ? datum.imgUrl : imageUrl}
            >
              {/* <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">$1299 / night</p> */}
              <TechStack iconsList={datum.techStack} />
            </DirectionAwareHoverCard>
            {/* description */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Name of project */}
              <h3 className="font-semibold text-xl text-black">
                {datum.title}
              </h3>
              {/* description of the project */}
              <p className="font-medium text-zinc-600 text-sm">
                {datum.description}
              </p>
              {/* links container */}
              <div className="flex items-center gap-3">
                {datum.links.github && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-2 py-1 rounded-md underline"
                    // href={"https://github.com/BiggieOneBillion/cia-luxury-logistics"}
                    href={datum.links.github}
                  >
                    Github Link
                  </a>
                )}
                {datum.links.website && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-2 py-1 rounded-md underline"
                    href={datum.links.website}
                  >
                    Website Link
                  </a>
                )}
                {!datum.links.github && !datum.links.website && (
                  <Link
                    to={"/contact-me"}
                    className="text-sm text-black capitalize underline"
                  >
                    Links Avaliable on request
                  </Link>
                )}
              </div>
              {/* technologies used */}
              <ul className="flex items-center sm:w-[400px] flex-wrap gap-3">
                {datum.techStack.map((tech) => (
                  <li key={v4()} className="flex items-center gap-1 text-sm">
                    <span className="">{tech.icon}</span>
                    <span>{tech.tech}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="w-[200px] overflow-hidden">
                <InfiniteMovingTech items={datum.techStack} />
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyWork;

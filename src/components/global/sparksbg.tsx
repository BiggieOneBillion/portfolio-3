import { SparklesCore } from "./sparkles";
import { InfiniteMovingCards } from "./infinte-moving-cards";
import { technology } from "../../lib/constant";
import { FaCircleArrowRight } from "react-icons/fa6";

export function SparklesPreview() {
  return (
    <div className="h-[40rem]y h-fit relative w-full bg-black flex flex-col items-centery md:pl-[14rem] justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={0.8}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* sparrks bg */}
      <section className="min-h-[100vh] md:h-screen grid grid-cols-1 gap-10 py-[10rem] md:py-0 px-4 md:px-0 md:grid-cols-2 container mx-auto text-white">
        {/* LEFT SIDE  */}
        <aside className="h-full flex flex-col justify-center gap-5">
          <h1 className="flex flex-wrap text-7xl font-semibold uppercase leading-[85px] max-lg:text-4xl max-md:leading-snug">
            FRONT END <br />
            BACK END Developer.
          </h1>
          <p className="reveal-hero-text mt-2 max-w-[450px] p-2 text-justify max-lg:max-w-full">
            In the symphony of pixels and code, I orchestrate seamless and
            captivating web experiences
          </p>
          <button className="group relative z-[1000] transition-transform duration-300 rounded-2xl px-3 py-2 border w-fit cursor-pointer flex items-center gap-2">
            <span>Get In Touch</span>

            <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <FaCircleArrowRight />
            </span>
          </button>
        </aside>
        <section className="md:hidden">
          <InfiniteMovingCards
            items={technology}
            direction="left"
            speed="slow"
          />
        </section>
        {/* RIGHT SIDE */}
        <section className="h-full md:flex flex-col justify-center hidden">
          <div className="earth md:w-[500px] w-full h-fit rounded-fully bordery flex flex-col items-center justify-center gap-3 relative overflow-hidden">
            <InfiniteMovingCards
              items={technology}
              direction="left"
              speed="slow"
              isborder={true}
            />
            <InfiniteMovingCards
              items={technology}
              direction="right"
              speed="slow"
              isborder={true}
            />
            <InfiniteMovingCards
              items={technology}
              direction="left"
              speed="slow"
              isborder={true}
            />
            <InfiniteMovingCards
              items={technology}
              direction="right"
              speed="slow"
              isborder={true}
            />
            {/* <InfiniteMovingCards items={technology} direction="left" speed="slow"/> */}
            {/* <InfiniteMovingCards items={technology} direction="right" speed="slow"/> */}
            {/* <InfiniteMovingCards items={technology} direction="left" speed="slow"/>
           <InfiniteMovingCards items={technology} direction="right" speed="slow"/>
           <InfiniteMovingCards items={technology} direction="left" speed="slow"/> */}
          </div>
        </section>
      </section>
    </div>
  );
}

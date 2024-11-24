import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../global/tracing-beam";

export function TracingBeamSection() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 px-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-sm font-semibold md:text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {/* {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title:
      "Worked as a Web Development Trainer with OLOTU SQUARE for PING - An NGO interested in empowering young people with digital skills.",
    description: (
      <div>
        <ul className="flex flex-col gap-2 list-outside list-disc mb-8 ">
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Trained over 20 developers in modern web development, achieving a
            90% course completion rate with positive feedback.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Led workshops on state management, component-based architecture, and
            full-stack best practices, enhancing problem-solving skills.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Developed a project-based curriculum for real-world application
            development, improving hands-on coding abilities.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Provided code reviews and one-on-one support, helping students debug
            and adopt clean coding standards.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Created training materials and exercises aligned with industry
            standards and trends.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Taught version control using Git and GitHub, emphasizing
            collaborative development and best practices
          </li>
        </ul>
      </div>
    ),
    badge: "Jun 2024 - Aug 2024",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      " Worked as a freelancer, creating websites and applications for various clients.",
    description: (
      <>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I gained more experience in working with different technologies and
          tools, including React, Next.js, Tailwind CSS, Flutter, Dart, React
          Native, and more. As i had different client with diverse needs and as
          such i had to learn and adapt to different technologies and tools.
        </p>
      </>
    ),
    badge: "Early 2023",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Worked at Ultino Resources Limited on contract as a Front-end developer using React.js.",
    description: (
      <>
        <ul className="flex flex-col gap-2 list-outside list-disc mb-8">
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            We Developed scalable web applications using React.js, Redux,
            Node.js, and REST APIs.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            I Refactored existing codebases to enhance application
            responsiveness by improving loading times,
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Also integrated third-party libraries and APIs to expand
            functionality, improving the overall user experience I also engaged
            in cross-functional collaboration with back-end developers and
            conducted code reviews to uphold coding quality and consistency
          </li>
        </ul>
      </>
    ),
    badge: "Jan 2023 - Aug 2023",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      " Worked at Shooly Brandt on contract as a Front-end developer using React.js.",
    description: (
      <>
        <ul className="flex flex-col gap-2 list-outside list-disc mb-8">
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            {" "}
            Led the development and maintenance of the company&apos;s website
            front-end using JavaScript (ES6), CSS3, HTML, and React.js.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Enhanced website performance by optimizing code and implementing
            best practices, resulting in significantly improved page load time.
          </li>
          <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Collaborated closely with design and cross-functional teams to
            improve UI/UX, ultimately increasing user engagement.
          </li>
        </ul>
      </>
    ),
    badge: "Sep 2021 - Dec 2022",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "",
    description: (
      <>
         <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-10">
            I have experience working with various technologies and tools to
            develop and maintain both new and existing codebases. My work
            includes projects as a freelancer and collaboration within teams of
            diverse backgrounds and skill levels. I believe that clear and
            concise communication is essential to success, as it enables
            effective collaboration and ensures that project goals are met
            efficiently. <br />I love to work with you, and I&apos;m excited to see
            what we can achieve together!
          </p>
        </div>
      </>
    ),
    badge: "Summary",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

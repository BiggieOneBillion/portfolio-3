import Herosection from "./herosection";
import { TracingBeamSection } from "./timelines";

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <>
      <Herosection />
      <section className="space-y-8 pt-10 px-3">
        <h1 className="text-2xl font-semibold max-w-2xl mx-auto">Work Experience</h1>
        <TracingBeamSection />
      </section>
    </>
  );
};

export default HomeComponent;

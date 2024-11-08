import Hero from "./Components/hero";
import Project from "./Components/project";
import Section3 from "./Components/section3";
import Section4 from "./Components/section4";
import Section5 from "./Components/section5";
import Sponsors from "./Components/sponsers";
import Worktogether from "./Components/worktogether";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <Worktogether />
      <Section3 />
      <Section4 />
      <Section5 />
      <Sponsors />

    </div>
  );
}

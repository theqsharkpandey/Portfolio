import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import TechStack from "./TechStack";
import Projects from "./Projects";
import { lazy, Suspense } from "react";
// LightRays is in App.jsx

const LogoLoop = lazy(() => import("./LogoLoop"));

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiThreedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiGit,
  SiOpenjdk,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact size={40} color="#61DAFB" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNodedotjs size={40} color="#339933" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiPython size={40} color="#3776AB" />,
    title: "Python",
    href: "https://python.org",
  },
  {
    node: <SiThreedotjs size={40} color="#ffffff" />,
    title: "Three.js",
    href: "https://threejs.org",
  },
  {
    node: <SiTailwindcss size={40} color="#06B6D4" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiMongodb size={40} color="#47A248" />,
    title: "MongoDB",
    href: "https://mongodb.com",
  },
  {
    node: <SiExpress size={40} color="#ffffff" />,
    title: "Express",
    href: "https://expressjs.com",
  },
  {
    node: <SiFramer size={40} color="#ffffff" />,
    title: "Framer",
    href: "https://framer.com",
  },
  {
    node: <SiGit size={40} color="#F05032" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiOpenjdk size={40} color="#007396" />,
    title: "Java",
    href: "https://java.com",
  },
];

const Home = () => {
  return (
    <>
      <Hero />

      <About />
      <Education />

      <Projects />

      <TechStack />

      <div className="tech-loop-wrap">
        {/* Basic horizontal loop */}
        <Suspense fallback={null}>
          <LogoLoop
            logos={techLogos}
            speed={15}
            direction="left"
            pauseOnHover={true}
            ariaLabel="Technology partners"
          />
        </Suspense>
      </div>
    </>
  );
};

export default Home;

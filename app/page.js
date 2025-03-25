
import About from "./components/About";
import Banner from "./components/Banner";
import Project from "./components/Project";
import ProjectCard from "./components/ProjectCard";

import SkillsCard from "./components/SkillsCard";


export default function Home() {
  return (
   <div className="">
    <Banner></Banner>
    <About></About>
    <SkillsCard></SkillsCard>
    {/* <ProjectCard></ProjectCard> */}
    <Project></Project>
    
   </div>
  );
}

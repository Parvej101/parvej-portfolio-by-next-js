"use client";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import Project from "./components/Project";
import SkillsCard from "./components/SkillsCard";


export default function Home() {
  return (
   <div className="">
    <Banner></Banner>
    <About></About>
    <SkillsCard></SkillsCard>
    <Project></Project>
    <ContactSection></ContactSection>
    <div>
      
    </div>
    
   </div>
  );
}

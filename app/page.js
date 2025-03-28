"use client";
import { useEffect } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import Project from "./components/Project";
import SkillsCard from "./components/SkillsCard";

export default function Home() {
  useEffect(() => {
    // This will ensure that the page is rendered only on the client side
    if (typeof document !== "undefined") {
      // Your browser-specific code (if any) can go here
    }
  }, []);

  return (
    <div className="">
      <Banner />
      <About />
      <SkillsCard />
      <Project />
      <ContactSection />
      <div></div>
    </div>
  );
}

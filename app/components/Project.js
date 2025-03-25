import ProjectCard from "./ProjectCard";

import hopeHive1 from "@/public/images/b1.jpg";
import hopeHive2 from "@/public/images/b2.jpg";
import hopeHive3 from "@/public/images/b3.jpg";
import classVault1 from "@/public/images/p1.jpg";
import classVault2 from "@/public/images/p2.jpg";
import classVault3 from "@/public/images/p3.jpg";


const projects = [
    {
      name: "Class Vault",
      description: "A platform for managing classes, connecting tutors with students, and streamlining the educational experience.",
      images: [
       {src: classVault1, alt: "Class Vault" },
       {src: classVault2, alt: "Class Vault" },
       {src: classVault3, alt: "Class Vault" },
      
      ],
      liveLink: "https://class-vault.web.app/",
      githubLink: "https://github.com/Parvej101/class-vault-client",
    },
    {
      name: "Hope Hive",
      description: "A community-driven platform that connects individuals with resources, support, and services to promote well-being and personal growth.",
      images: [
        { src: hopeHive1, alt: "Hope Hive" },
        { src: hopeHive2, alt: "Hope Hive" },
        { src: hopeHive3, alt: "Hope Hive" },
        
      ],
      liveLink: "https://hope-hive.web.app/",
      githubLink: "https://github.com/Parvej101/hope-hive-client",
    },
  ];
 

export default function Project() {
  return (
    <section id="projects" className=" bg-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white text-center pb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {/* <h1>{project.name}</h1> */}
    </div>
  </section>
  )
}

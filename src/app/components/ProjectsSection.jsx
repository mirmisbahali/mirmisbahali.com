"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "MeArm v0.4",
    description: "Developed a 3D-printed MeArm v0.4 robotic arm, controlled by an ESP8622 NodeMCU and programmed in Lua.",
    image: "https://aurtmqhwnryjpytqiltv.supabase.co/storage/v1/object/public/projects/MeArm/header.jpg",
    tag: ["All", "CAD", "Embedded Systems"],
    gitUrl: "/",
    previewUrl: "https://www.intromech.com/",
  },
  {
    id: 1,
    title: "Intromech",
    description: "IntroMech is a blog where I share accessible insights and practical knowledge on mechanical engineering topics, aimed at helping others learn and grow in the field.",
    image: "https://aurtmqhwnryjpytqiltv.supabase.co/storage/v1/object/public/projects/intromech/intromech.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.intromech.com/",
  },
];

const categories = ["All", "WEB", "CAD", "CAM", "CAE", "Embedded Systems"]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {categories.map(category => (
          <ProjectTag
          key={category}
          onClick={handleTagChange}
          name={category}
          isSelected={tag === category}
        />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

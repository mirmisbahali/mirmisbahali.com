"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import CategorySearch from "./CategorySearch";
import { motion, useInView } from "framer-motion";

const ProjectsSection = ({ projects, categories }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  // Apple's signature easing curves and motion design
  const cardVariants = {
    initial: { y: 60, opacity: 0, scale: 0.9 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        mass: 0.8
      }
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Split categories: first 3 as buttons, rest for search
  const visibleCategories = categories.slice(0, 3);
  const searchableCategories = categories.slice(3);

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 tracking-tight leading-none mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Crafting products with precision and purpose
        </p>
      </div>
      {/* Filter Controls with Apple's precise spacing */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-12 md:mb-16 lg:mb-20 px-4">
        {/* Visible category buttons */}
        {visibleCategories.map(category => (
          <ProjectTag
            key={category}
            onClick={handleTagChange}
            name={category}
            isSelected={tag === category}
          />
        ))}
        
        {/* Search component for additional categories */}
        {searchableCategories.length > 0 && (
          <CategorySearch
            categories={searchableCategories}
            onCategorySelect={handleTagChange}
            selectedCategory={tag}
          />
        )}
      </div>

      {/* Projects Grid with Apple's responsive system */}
      <motion.ul 
        ref={ref} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={`${project.id}-${tag}`} // Key includes tag to trigger re-animation on filter
            variants={cardVariants}
            layout // Apple-style layout animations
            layoutId={`project-${project.id}`}
          >
            <ProjectCard
              project={project}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;

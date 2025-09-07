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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Split categories: first 3 as buttons, rest for search
  const visibleCategories = categories.slice(0, 3);
  const searchableCategories = categories.slice(3);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
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
              id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              slug={project.slug}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

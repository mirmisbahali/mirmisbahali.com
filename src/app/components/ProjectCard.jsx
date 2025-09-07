import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, slug, tag, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectData = {
    id,
    title,
    description,
    image: imgUrl,
    gitUrl,
    previewUrl,
    slug,
    tag
  };

  const handleViewProject = () => {
    setIsModalOpen(true);
  };

  const handleExternalLink = (url, e) => {
    e.stopPropagation();
    if (url && url !== '/') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div
        className="group cursor-pointer"
        whileHover={!isModalOpen ? { y: -8, transition: { duration: 0.3, ease: "easeOut" } } : {}}
        onClick={handleViewProject}
        style={{ pointerEvents: isModalOpen ? "none" : "auto" }}
      >
      {/* Unified Card Container */}
      <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-800/50 hover:border-slate-700/50 h-full">
        
        {/* Image Section */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating action buttons - only show on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {gitUrl && gitUrl !== '/' && (
              <motion.button
                onClick={(e) => handleExternalLink(gitUrl, e)}
                className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="w-5 h-5" />
              </motion.button>
            )}
            {previewUrl && previewUrl !== '/' && (
              <motion.button
                onClick={(e) => handleExternalLink(previewUrl, e)}
                className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Tags */}
          {tag && tag.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tag.filter(t => t !== 'All').slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-200 line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Action Area */}
          <div className="flex items-center justify-between pt-2">
            <motion.div
              className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors duration-200"
              whileHover={{ x: 4 }}
            >
              <span>View Details</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
            </motion.div>

            {/* Quick action icons */}
            <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
              {gitUrl && gitUrl !== '/' && (
                <div className="w-2 h-2 bg-green-400 rounded-full" title="Source available" />
              )}
              {previewUrl && previewUrl !== '/' && (
                <div className="w-2 h-2 bg-blue-400 rounded-full" title="Live demo available" />
              )}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      
      {/* Project Modal - Rendered via Portal */}
      {isModalOpen && typeof window !== 'undefined' && createPortal(
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={projectData}
        />,
        document.body
      )}
    </>
  );
};

export default ProjectCard;

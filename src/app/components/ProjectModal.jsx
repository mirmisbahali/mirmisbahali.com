"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectModal = ({ 
  isOpen, 
  onClose, 
  project 
}) => {
  const router = useRouter();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  const handleFullscreen = async () => {
    // Get modal and backdrop elements
    const modalElement = document.getElementById('project-modal');
    const backdropElement = document.getElementById('modal-backdrop');
    
    if (modalElement && backdropElement) {
      // Phase 1: Scale up the modal
      modalElement.style.transform = 'scale(1.05)';
      modalElement.style.transition = 'transform 0.2s ease-out';
      
      setTimeout(() => {
        // Phase 2: Expand to fill screen with border radius animation
        modalElement.style.transform = 'scale(1.2)';
        modalElement.style.borderRadius = '0px';
        modalElement.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Fade out backdrop
        backdropElement.style.opacity = '0';
        backdropElement.style.backdropFilter = 'blur(0px)';
        backdropElement.style.transition = 'all 0.3s ease-out';
        
        setTimeout(() => {
          // Phase 3: Final expansion and navigate
          modalElement.style.transform = 'scale(1.5)';
          modalElement.style.opacity = '0.8';
          
          setTimeout(() => {
            router.push(`/projects/${project.slug}`);
          }, 150);
        }, 250);
      }, 100);
    }
  };

  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            id="project-modal"
            className="bg-[#181818] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-700"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#262626] hover:bg-[#333] transition-colors duration-200"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </motion.button>

            {/* Project Image */}
            {project.image && (
              <motion.div
                className="relative h-64 md:h-80 rounded-t-lg overflow-hidden"
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-60"></div>
              </motion.div>
            )}

            <div className="p-6 md:p-8">
              {/* Project Title & Description */}
              <motion.div
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-lg text-[#ADB7BE] leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Tags */}
              {project.tag && (
                <motion.div
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tag.filter(tag => tag !== 'All').map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* External Links */}
              <motion.div
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <div className="flex flex-wrap gap-4">
                  {project.previewUrl && project.previewUrl !== '/' && (
                    <Link
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <EyeIcon className="h-5 w-5" />
                      View Live Project
                    </Link>
                  )}
                  {project.gitUrl && project.gitUrl !== '/' && (
                    <Link
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#ADB7BE] hover:border-white text-[#ADB7BE] hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                      View Code
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                custom={4}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-700"
              >
                <button
                  onClick={handleFullscreen}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <ArrowsPointingOutIcon className="h-5 w-5" />
                  View Fullscreen
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center border border-slate-600 hover:border-slate-500 text-[#ADB7BE] hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
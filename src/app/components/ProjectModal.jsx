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
  
  // Debug: Check if contentHtml is available
  console.log('ProjectModal project data:', { 
    title: project.title,
    hasContentHtml: !!project.contentHtml,
    contentHtmlLength: project.contentHtml?.length
  });

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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: 'none' // Ensure no inherited transforms
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            id="project-modal"
            className="bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl mx-auto"
            style={{
              transform: 'none', // Override any inherited transforms
              position: 'relative',
              zIndex: 10000
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Action Bar */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              {/* View Fullscreen Button */}
              <motion.button
                onClick={handleFullscreen}
                className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-black/60 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Fullscreen"
              >
                <ArrowsPointingOutIcon className="h-5 w-5 text-white" />
              </motion.button>
              
              {/* Close Button */}
              <motion.button
                className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-black/60 transition-all duration-200"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Close"
              >
                <XMarkIcon className="h-5 w-5 text-white" />
              </motion.button>
            </div>

            {/* Project Image */}
            {project.image && (
              <motion.div
                className="relative h-48 md:h-64 rounded-t-xl overflow-hidden"
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
              </motion.div>
            )}

            <div className="p-6 bg-black/20 backdrop-blur-sm">
              {/* Project Title & Description */}
              <motion.div
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-4"
              >
                <h2 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
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
                        className="px-3 py-1 bg-black/30 backdrop-blur-sm border border-white/30 text-white text-xs rounded-full tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Markdown Content */}
              {project.contentHtml && (
                <motion.div
                  custom={3}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6"
                >
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div 
                      className="prose prose-invert prose-sm max-w-none
                        prose-headings:text-white prose-headings:font-light prose-headings:tracking-tight
                        prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                        prose-p:text-slate-300 prose-p:leading-relaxed
                        prose-ul:text-slate-300 prose-ol:text-slate-300
                        prose-li:text-slate-300 prose-li:mb-1
                        prose-strong:text-white prose-strong:font-medium
                        prose-code:text-primary-300 prose-code:bg-black/30 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                        prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-lg
                        prose-blockquote:border-l-primary-400 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-slate-300
                        prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300 prose-a:transition-colors
                      "
                      dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                    />
                  </div>
                </motion.div>
              )}

              {/* External Links */}
              <motion.div
                custom={4}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <div className="flex flex-wrap gap-3">
                  {project.previewUrl && project.previewUrl !== '/' && (
                    <Link
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-primary-400/50 hover:border-primary-400/80 hover:bg-black/50 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                    >
                      <EyeIcon className="h-4 w-4" />
                      View Live
                    </Link>
                  )}
                  {project.gitUrl && project.gitUrl !== '/' && (
                    <Link
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/30 hover:border-white/50 hover:bg-black/50 text-white hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      View Code
                    </Link>
                  )}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-white/15 border-white/30 shadow-lg backdrop-blur-xl"
    : "text-slate-300 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-md";
  
  return (
    <motion.button
      className={`${buttonStyles} relative overflow-hidden rounded-2xl border px-6 py-3 text-base font-medium cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md group`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
    >
      {/* Apple-style gradient overlay for selected state */}
      {isSelected && (
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/25 to-secondary-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Subtle hover gradient */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      <span className="relative z-10 tracking-wide">{name}</span>
    </motion.button>
  );
};

export default ProjectTag;

import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <>
      {/* Apple-style backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      
      {/* Apple-style mobile menu */}
      <motion.div
        className="fixed top-24 left-6 right-6 z-50 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          duration: 0.3
        }}
      >
        <div className="p-2">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              onClick={onClose}
            >
              <div className="w-full text-center py-4 px-6 hover:bg-white/5 rounded-xl transition-colors duration-200">
                <NavLink href={link.path} title={link.title} />
              </div>
              {index < links.length - 1 && (
                <div className="mx-6 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MenuOverlay;

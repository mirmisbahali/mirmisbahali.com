import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? "text-[#1d1d1f] dark:text-white bg-black/10 dark:bg-white/15 backdrop-blur-md border border-black/15 dark:border-white/20 shadow-lg"
          : "text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/5 border border-transparent hover:border-black/8 dark:hover:border-white/10"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Apple-style selection indicator */}
      {active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <span className="relative z-10 tracking-wide">{children}</span>
    </motion.button>
  );
};

export default TabButton;
